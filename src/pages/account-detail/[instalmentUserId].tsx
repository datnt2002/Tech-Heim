import { Button } from 'antd'

const InstalmentsDetail = () => {
  return (
    <div>
      <div className='flex gap-4'>
        <div className='bg-gray-F9F9F9 flex px-3 basis-5/12'>
          <div className='text-gray-2D2D2D font-medium text-xl py-3 basis-1/2'>
            Subtotal
          </div>
          <div className='text-gray-444444 text-end content-center w-full px-6 py-[14.5px]'>
            842.50
          </div>
          <div>
            <Button
              type='primary'
              className='px-[70px] text-base font-light items-center '
            >
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InstalmentsDetail
