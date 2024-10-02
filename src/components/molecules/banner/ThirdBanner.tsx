import { Button } from 'antd'
import clock from '../../../assets/images/clocks.png'

const ThirdBanner = () => {
  return (
    <div className='relative bg-[#223949] w-full h-48 md:h-[20rem] xl:h-[26.25rem] rounded-lg flex items-center'>
      <div className='absolute w-3/6 h-full bg-[#FF6951] right-0 rounded-l-[45%] flex justify-center items-center p-10'>
        <div className='relative w-auto md:w-auto top-0 p-5  '>
          <img src={clock} alt='smart watches' className='object-contain' />
        </div>
      </div>

      <div className='flex'>
        <div className=' text-white font-inter pl-8 z-10 content-center'>
          <div className='text-xl md:text-[30px] lg:text-[44px]'>
            SMART WATCH
          </div>
          <p className='text-md md:text-xl lg:text-2xl font-light mt-4'>
            Various designs and brands
          </p>
          <Button
            size='large'
            className='mt-8 text-black bg-[#FF6951] border-none '
          >
            view
          </Button>
        </div>
        {/* <div className="relative w-auto md:w-auto top-0 my-10 md:my-10">
          <img
            src={clock}
            alt="smart watches"
            className="object-contain w-50"
          />
        </div> */}
      </div>
    </div>
  )
}

export default ThirdBanner
