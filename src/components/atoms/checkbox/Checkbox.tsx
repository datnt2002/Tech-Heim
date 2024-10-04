import { Checkbox as AntCheckbox } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

type Props = {
  options: string[] | number[]
  basePath: string
  queryKey: string
  checkedValues: string[]
  onCheckedValuesChange: (queryKey: string, checkedValues: string[]) => void
}

const Checkbox = ({ options, basePath, queryKey, checkedValues, onCheckedValuesChange }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentParams = queryString.parse(location.search)

  const onChange = (newCheckedValues: Array<string | number>) => {
    const updatedValues = newCheckedValues as string[]
    onCheckedValuesChange(queryKey, updatedValues)
    const newParams = { ...currentParams }
    if (updatedValues.length > 0) {
      newParams[queryKey] = updatedValues.join(',')
    } else {
      delete newParams[queryKey]
    }

    console.log(checkedValues)

    navigate({
      pathname: basePath,
      search: `?${queryString.stringify(newParams)}`
    })
  }

  return (
    <AntCheckbox.Group
      options={options}
      value={checkedValues}
      onChange={onChange}
      className='flex flex-col gap-4'
    />
  )
}

export default Checkbox
