import React, { useState } from 'react'
import { Button, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import ImgAndNameCard from '../cards/ImgAndNameCard'
import { cn } from '../../../utils/utils'
import img from '../../../assets/images/mouse.png'

interface Category {
  key: string
  label: string
  icon: string
  children?: Category[]
}

const items: Category[] = [
  {
    key: '1',
    icon: '/assets/icon/device/mobile_icon.svg',
    label: 'Mobile Phones',
    children: [
      {
        key: '1-1',
        label: 'Smart Phones',
        icon: '/assets/icons/device/mobile_icon.svg'
      },
      {
        key: '1-2',
        label: 'Accessories',
        icon: '/assets/icons/device/accessories_icon.svg'
      },
      {
        key: '1-3',
        label: 'Accessories',
        icon: '/assets/icons/device/accessories_icon.svg'
      },
      {
        key: '1-4',
        label: 'Accessories',
        icon: '/assets/icons/device/accessories_icon.svg'
      }
    ]
  },
  {
    key: '2',
    label: 'Laptops & Computers',
    icon: '/assets/icons/device/laptop_icon.svg',
    children: [
      {
        key: '2-1',
        label: 'Laptops',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '2-2',
        label: 'Desktops',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '2-3',
        label: 'Laptops',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '2-4',
        label: 'Desktops',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '2-5',
        label: 'Laptops',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '2-6',
        label: 'Desktops',
        icon: '/assets/icons/device/laptop_icon.svg'
      }
    ]
  },
  {
    key: '3',
    label: 'Tablets & E-reader',
    icon: '/assets/icons/device/mobile_program_icon.svg',
    children: [
      {
        key: '3-1',
        label: 'Tablets',
        icon: '/assets/icons/device/mobile_icon.svg'
      },
      {
        key: '3-2',
        label: 'E-readers',
        icon: '/assets/icons/device/mobile_program_icon.svg'
      },
      {
        key: '3-3',
        label: 'E-readers',
        icon: '/assets/icons/device/mobile_program_icon.svg'
      },
      {
        key: '3-4',
        label: 'E-readers',
        icon: '/assets/icons/device/mobile_program_icon.svg'
      },
      {
        key: '3-5',
        label: 'E-readers',
        icon: '/assets/icons/device/mobile_program_icon.svg'
      }
    ]
  },
  {
    key: '4',
    label: 'Wearables',
    icon: '/assets/icons/device/watch_icon.svg',
    children: [
      {
        key: '4-1',
        label: 'Smart Watches',
        icon: '/assets/icons/device/watch_icon.svg'
      },
      {
        key: '4-2',
        label: 'Fitness Bands',
        icon: '/assets/icons/device/watch_icon.svg'
      },
      {
        key: '4-3',
        label: 'Smart Watches',
        icon: '/assets/icons/device/watch_icon.svg'
      },
      {
        key: '4-3',
        label: 'Fitness Bands',
        icon: '/assets/icons/device/watch_icon.svg'
      }
    ]
  },
  {
    key: '5',
    label: 'Audio',
    icon: '/assets/icons/device/audio_icon.svg',
    children: [
      {
        key: '5-1',
        label: 'Headphones',
        icon: '/assets/icons/device/audio_icon.svg'
      },
      {
        key: '5-2',
        label: 'Speakers',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '5-2',
        label: 'Headphones',
        icon: '/assets/icons/device/audio_icon.svg'
      },
      {
        key: '5-3',
        label: 'Speakers',
        icon: '/assets/icons/device/laptop_icon.svg'
      }
    ]
  },
  {
    key: '6',
    label: 'Cameras',
    icon: '/assets/icons/device/camera_icon.svg',
    children: [
      {
        key: '6-1',
        label: 'Digital Cameras',
        icon: '/assets/icons/device/camera_icon.svg'
      },
      {
        key: '6-2',
        label: 'Camcorders',
        icon: '/assets/icons/device/camera_icon.svg'
      }
    ]
  },
  {
    key: '7',
    label: 'Gaming',
    icon: '/assets/icons/device/game_icon.svg',
    children: [
      {
        key: '7-1',
        label: 'Consoles',
        icon: '/assets/icons/device/game_icon.svg'
      },
      {
        key: '7-2',
        label: 'Games',
        icon: '/assets/icons/device/game_icon.svg'
      }
    ]
  },
  {
    key: '8',
    label: 'Networking',
    icon: '/assets/icons/device/network_icon.svg',
    children: [
      {
        key: '8-1',
        label: 'Routers',
        icon: '/assets/icons/device/network_icon.svg'
      },
      {
        key: '8-2',
        label: 'Modems',
        icon: '/assets/icons/device/network_icon.svg'
      }
    ]
  },
  {
    key: '9',
    label: 'Accessories',
    icon: '/assets/icons/device/accessories_icon.svg',
    children: [
      {
        key: '9-1',
        label: 'Chargers',
        icon: '/assets/icons/device/laptop_icon.svg'
      },
      {
        key: '9-2',
        label: 'Cables',
        icon: '/assets/icons/device/laptop_icon.svg'
      }
    ]
  }
]

const renderCategories = (
  categories: Category[],
  setActiveCategory: React.Dispatch<React.SetStateAction<Category | null>>
) => {
  return categories.map((category) => (
    <div
      key={category.key}
      className='p-2 cursor-pointer hover:bg-gray-100'
      onMouseEnter={() => setActiveCategory(category)}
    >
      {category.label}
    </div>
  ))
}

const ProductNavbarDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  return (
    <Dropdown
      align={{ offset: [100, 6] }}
      dropdownRender={() => (
        <div className='pr-6 mt-[35px] w-full border border-t-transparent rounded-b-lg grid grid-cols-12 gap-2 bg-gray-F6F6F6'>
          <div className='max-h-96 col-span-3 shadow-none border-r pt-6'>
            {renderCategories(items, setActiveCategory)}
          </div>
          <div className='col-span-2 pt-6'>
            {activeCategory && activeCategory.children && (
              <>
                {activeCategory.children.map((child) => (
                  <div className='flex flex-row cursor-pointer'>
                    <img src={child.icon} />
                    <p key={child.key} className='p-2'>
                      {child.label}
                    </p>
                  </div>
                ))}
                <Button>View all</Button>
              </>
            )}
          </div>
          <div className='col-span-7 grid grid-cols-4 items-center gap-4'>
            <ImgAndNameCard img={img} name='Watch & Earpods' className='' />
            <ImgAndNameCard img={img} name='Holder' />
            <ImgAndNameCard img={img} name='Power cables' />
            <ImgAndNameCard img={img} name='Cases & Protection' />
          </div>
        </div>
      )}
      placement='bottomCenter'
    >
      <div>
        <Link
          to={'/products/categories/laptop'}
          className={
            (cn('p-2'), location.pathname === '/products' ? 'text-primary' : '')
          }
        >
          <p>Products</p>
        </Link>
        {location.pathname === 'products' && (
          <div className='gradient w-full' />
        )}
      </div>
    </Dropdown>
  )
}

export default ProductNavbarDropdown
