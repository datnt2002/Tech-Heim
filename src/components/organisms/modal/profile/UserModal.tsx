import { Button, Form, FormProps, Input, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'

type FieldType = {
  fullName: string
}

type ModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const UserModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = localStorage.getItem('token')
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (token) {
      setIsOpen(false)
    }
  }

  const [form] = Form.useForm()
  const handleSubmit = () => {
    form.submit()
  }
  return (
    <Modal
      className=' text-xl font-medium text-gray-444444 p-6'
      title='First name and Last name'
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item<FieldType> name='fullName' className='mb-4'>
          <Input
            placeholder='Full name'
            className='text-primary text-base font-light w-full p-3'
          />
        </Form.Item>
        <Form.Item>
          <div className='justify-items-end'>
            <Button
              className='w-fit items-end'
              type='primary'
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default UserModal
