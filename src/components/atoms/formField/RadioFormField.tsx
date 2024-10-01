import { Radio, RadioChangeEvent } from 'antd'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { chooseShipCostAction } from '../../../redux/slice/orderSlice'

type Props = {
  label?: string
  className?: string
  value: number
  onShippingChange: (method: { label: string; price: number }) => void
}

type RadioCardProps = {
  label: string
  time: string
  price: number
}

const RadioCard = ({ label, price, time }: RadioCardProps) => {
  return (
    <div>
      <p className='text-base'>{label}</p>
      <p className='text-sm font-inter text-gray-505050'>
        <span className=''>{time} business days</span>
        <span className='absolute right-0'>${price}</span>
      </p>
    </div>
  )
}

const RadioFormField = ({
  label,
  className,
  value,
  onShippingChange
}: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const shippingMethod = [
    {
      label: 'Free Shipping',
      time: '7-30',
      price: 0
    },
    {
      label: 'Regular Shipping',
      time: '3-14',
      price: 7.5
    },
    {
      label: 'Express Shipping',
      time: '1-3',
      price: 22.5
    }
  ]

  const onChange = (e: RadioChangeEvent) => {
    const selectedMethod = shippingMethod.find(
      (method) => method.price === e.target.value
    )
    if (selectedMethod) {
      dispatch(
        chooseShipCostAction({
          label: selectedMethod.label,
          price: selectedMethod.price
        })
      )
      onShippingChange(selectedMethod)
    }
  }

  return (
    <div className={className}>
      <h5 className='text-xl mb-2 font-semibold'>{label}</h5>
      <Radio.Group
        className='flex flex-col gap-2'
        onChange={onChange}
        value={value}
      >
        {shippingMethod.map((method) => (
          <Radio key={method.label} value={method.price} className='relative'>
            <RadioCard
              label={method.label}
              time={method.time}
              price={method.price}
            />
          </Radio>
        ))}
      </Radio.Group>
    </div>
  )
}

export default RadioFormField
