import { useState, useEffect } from 'react'
import { Button } from 'antd'
import CollapseCheckbox from '../../molecules/collapse/Collapse'
import Checkbox from '../../atoms/checkbox'
import { useLocation, useNavigate } from 'react-router-dom'
import Switch from '../../atoms/switch/Switch'
import queryString from 'query-string'
import { SpecFilter } from '../../../types/Product'

type Props = {
  specFilter: SpecFilter[]
}

const FilterOptions = ({ specFilter }: Props) => {
  const [switched, setSwitched] = useState<boolean>(false)
  const [checkedValues, setCheckedValues] = useState<{
    [key: string]: string[]
  }>({})
  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>(
    {}
  )
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = queryString.parse(location.search)
    const updatedCheckedValues: { [key: string]: string[] } = {}
    const newExpandedKeys: { [key: string]: boolean } = {}
    specFilter.forEach((spec) => {
      if (params[spec.key]) {
        updatedCheckedValues[spec.key] = (params[spec.key] as string).split(',')
        newExpandedKeys[spec.key] = true
      } else {
        newExpandedKeys[spec.key] = false
      }
    })

    const isDiscounted = params.discount === 'true'

    setCheckedValues(updatedCheckedValues)
    setSwitched(isDiscounted)
    setExpandedKeys(newExpandedKeys)
  }, [location.search, specFilter, switched])

  const handleCheckedValuesChange = (
    queryKey: string,
    selectedValues: string[]
  ) => {
    const currentParams = queryString.parse(location.search)

    const newParams = { ...currentParams }
    if (selectedValues.length > 0) {
      newParams[queryKey] = selectedValues.join(',')
    } else {
      delete newParams[queryKey]
    }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newParams)
    })

    console.log(`${queryKey}`, selectedValues)
  }

  const handleSwitchChange = (checked: boolean) => {
    setSwitched(checked)
    const newParams = { ...queryString.parse(location.search) }
    if (checked) {
      newParams.discount = 'true'
    } else {
      delete newParams.discount
    }
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newParams)
    })
  }

  const handleCollapseChange = (key: string) => {
    setExpandedKeys((prevExpanded) => ({
      ...prevExpanded,
      [key]: !prevExpanded[key]
    }))
  }

  const clearAllFilters = () => {
    navigate({
      pathname: location.pathname,
      search: ''
    })
    setSwitched(false)
    setCheckedValues({})
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex px-4 py-1 items-center'>
        <h5 className='text-xl flex-1 font-semibold'>Filters</h5>
        <Button
          type='text'
          size='small'
          className='text-primary px-12 py-3'
          onClick={clearAllFilters}
        >
          Clear all
        </Button>
      </div>

      <Switch
        title='Discount'
        basePath={location.pathname}
        checked={switched}
        onCheckedChange={handleSwitchChange}
      />
      {specFilter.map((spec) => (
        <CollapseCheckbox
          key={spec.key}
          label={spec.key}
          isOpen={expandedKeys[spec.key]}
          onToggle={() => handleCollapseChange(spec.key)}
          children={
            <Checkbox
              queryKey={spec.key}
              options={spec.value}
              basePath={location.pathname}
              checkedValues={checkedValues[spec.key]}
              onCheckedValuesChange={handleCheckedValuesChange}
            />
          }
        />
      ))}
    </div>
  )
}

export default FilterOptions
