import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../../../../redux/store'
import { loginThunk } from '../../../../redux/slice/authSlice'
import { setModalState } from '../../../../redux/slice/modalSlice'

type FieldType = {
  email: string
  password: string
  remember?: string
}

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    dispatch(loginThunk({ email: values.email, password: values.password }))
    dispatch(
      setModalState({
        key: 'authModal',
        isOpen: false
      })
    )
  }

  return (
    <>
      <h2 className='mt-4 text-center mb-5'>Log in to Tech Heim</h2>
      <Form form={form} onFinish={onFinish}>
        <Form.Item<FieldType>
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            size='large'
            prefix={
              <img
                src='/assets/icons/email/email_icon.svg'
                className='h-4 mr-2'
              />
            }
            placeholder='E-mail'
          />
        </Form.Item>

        <Form.Item<FieldType>
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            iconRender={(visible) => {
              return visible ? (
                <img src='/assets/icons/security/eye_visible.svg' />
              ) : (
                <img src='/assets/icons/security/eye_unvisible_icon.svg' />
              )
            }}
            size='large'
            prefix={
              <img
                src='/assets/icons/security/password_icon.svg'
                className='h-4 mr-2'
              />
            }
            placeholder='Password'
          />
        </Form.Item>

        <div className='flex justify-between h-6 mb-2'>
          <Form.Item<FieldType> name='remember' valuePropName='checked'>
            <Checkbox className='text-gray-717171'>Keep me logged in</Checkbox>
          </Form.Item>
          <Link className='text-primary' to='/'>
            Forgot password ?
          </Link>
        </div>
        <Form.Item>
          <Button
            size='large'
            className='w-full'
            type='primary'
            htmlType='submit'
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
