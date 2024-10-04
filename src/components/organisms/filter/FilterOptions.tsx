import { useEffect, useState } from 'react'
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
  const [checkedValues, setCheckedValues] = useState<string[]>([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {})

  const handleCheckedValuesChange = (
    queryKey: string,
    selectedValues: string[]
  ) => {
    const currentParams = queryString.parse(location.search)
    setCheckedValues(selectedValues)
    const newParams = { ...currentParams }
    if (currentParams[queryKey]) {
      newParams[queryKey] = selectedValues.join(',')
    } else {
      newParams[queryKey] = []
    }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newParams)
    })

    console.log('Selected Values:', selectedValues)
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

  const clearAllFilters = () => {
    navigate({
      pathname: location.pathname,
      search: ''
    })
    setSwitched(false)
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
          children={
            <Checkbox
              options={spec.value}
              basePath={location.pathname}
              queryKey={spec.key}
              checkedValues={checkedValues || []}
              onCheckedValuesChange={handleCheckedValuesChange}
            />
          }
        />
      ))}
    </div>
  )
}

export default FilterOptions
