import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { Button, Form, FormProps, Modal } from 'antd'
import { PaymentCard, User } from '../../../../types/User'
import CustomizeInput from '../../../atoms/inputs/CustomizeInput'

type FieldType = {
  idPaymentCard: string
  cardNumber: string
  name: string
  type: string
  expired: string
  userId: string
  cvv: string
}

type ModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const EditPaymentModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = localStorage.getItem('token')
  const { currentUser } = useSelector((state: RootState) => state.auth)
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (token && currentUser) {
      const updatedPaymentCard: PaymentCard = {
        idPayment: String(new Date().getTime()),
        cardNumber: values.cardNumber,
        name: values.name,
        type: (values.type = 'Visa'),
        expired: values.expired,
        cvv: values.cvv
      }
      const updatedUser: User = {
        ...currentUser,
        paymentCard: updatedPaymentCard
      }
      setIsOpen(false)
    }
  }
  const [form] = Form.useForm()
  const handleSubmit = () => {
    form.submit()
  }

  const handleCancle = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      title='Add your payment method'
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={
        <div className='flex flex-row gap-4 content-end '>
          <Button
            className='border-primary text-primary basis-1/2'
            onClick={handleCancle}
          >
            Cancle
          </Button>
          <Button type='primary' className=' basis-1/2' onClick={handleSubmit}>
            Save
          </Button>
        </div>
      }
    >
      <div className='flex flex-row items-center mb-6'>
        <div>
          <div className='text-base font-medium text-gray-717171'>
            Credit or debit cards
          </div>
          <div className=' font-light text-gray-2D2D2D w-full basis-2/3'>
            Tech Heim accepts major credit and debit cards.
          </div>
        </div>

        <img src='/assets/icons/delivery/america.svg' alt='American express' />
        <img src='/assets/icons/delivery/master_card.svg' alt='Master card' />
        <img src='/assets/icons/delivery/visa.svg' alt='Visa' />
      </div>
      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name='cardNumber'>
          <CustomizeInput
            label='Card number'
            type='number'
            autocomplete='off'
          />
        </Form.Item>
        <Form.Item name='name'>
          <CustomizeInput label='Name on card' type='text' autocomplete='off' />
        </Form.Item>
        <div className='flex flex-row gap-5'>
          <Form.Item className='basis-1/2' name='expired'>
            <CustomizeInput
              label='Expiration date'
              type='text'
              autocomplete='off'
            />
          </Form.Item>
          <Form.Item className='basis-1/2' name='cvv'>
            <CustomizeInput label='CVV' type='number' autocomplete='off' />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default EditPaymentModal
