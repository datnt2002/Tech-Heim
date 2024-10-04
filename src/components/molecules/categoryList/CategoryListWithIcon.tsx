import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { RootState } from '../../../redux/store'
import { cn } from '../../../utils/utils'

const CategoryListWithIcon = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { listCategory } = useSelector((state: RootState) => state.product)
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const handleOnClick = (name: string) => {
    navigate(`/products/categories/${name}`)
  }
  return (
    <div className='flex justify-center gap-8 p-2 mb-12'>
      {listCategory.map((item) => {
        return (
          <div
            onClick={() => {
              handleOnClick(item.categoryName.toLowerCase())
            }}
            className={cn(
              'relative flex flex-col items-center gap-4 cursor-pointer h-full border-transparent border-b-2',
              item.categoryName.toLowerCase() === pathSnippets[length + 1]
                ? 'border-b-2 border-b-transparent'
                : 'hover:border-b-2 hover:border-b-primary'
            )}
            key={item.id}
          >
            <img src={item.image} alt='' className='h-12 w-12' />
            <p className='px-2 pb-2'>{item.categoryName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryListWithIcon
