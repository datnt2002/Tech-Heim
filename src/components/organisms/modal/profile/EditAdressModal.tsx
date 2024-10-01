import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { Form, FormProps, Input, Modal } from 'antd'

type FieldType = {
  fullname: string
  address: string
  district: string
  city: string
  country: string
}

type ModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const EditAdressModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = localStorage.getItem('token')
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {}

  const [form] = Form.useForm()

  return (
    <Modal
      className='text-xl font-medium text-gray-444444 p-6'
      title='Address detail'
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <div className='flex flex-row gap-4'>
          <div className='w-full basis-1/2'>
            <Form.Item<FieldType>>
              <Input placeholder='house number' />
            </Form.Item>
            <Form.Item<FieldType>>
              <Input placeholder='street' />
            </Form.Item>
          </div>
          <div className='basis-1/2'>
            <Form.Item<FieldType> name='district'>
              <Input placeholder='district' />
            </Form.Item>
            <Form.Item<FieldType> name='city'>
              <Input placeholder='city' />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  )
}
export default EditAdressModal
