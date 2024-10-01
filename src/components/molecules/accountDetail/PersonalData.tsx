import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { setModalState } from '../../../redux/slice/modalSlice'
import UserModal from '../../organisms/modal/profile/UserModal'
type Props = {
  classname?: string
}

const PersonalData = ({ classname }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { currentUser } = useSelector((state: RootState) => state.auth)
  const { userModal } = useSelector((state: RootState) => state.appModal)

  const handleToggleModalEditFullname = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: 'userModal',
        isOpen: isOpen
      })
    )
  }
  const handleToggleModalEditAdress = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: 'editAddressModal',
        isOpen: isOpen
      })
    )
  }

  return (
    <div className={`${classname}`}>
      <div className='font-medium text-xl mb-2'>Identification</div>
      <div className='font-light text-base mb-10'>Verify your identify</div>
      <div className='flex flex-row gap-6'>
        <div className='basis-1/2'>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              Full name
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/user.svg'
                  className='object-contain'
                />
                <div className='content-center text-base font-light text-gray-717171'>
                  {currentUser?.fullName}
                </div>
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
                onClick={() => handleToggleModalEditFullname(true)}
              />
            </div>
          </div>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              Phone number
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/call.svg'
                  className='object-contain'
                />
                <div className='content-center text-base font-light text-gray-717171'>
                  {currentUser?.phoneNumber}
                </div>
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
              />
            </div>
          </div>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              Address
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/home-2.svg'
                  className='object-contain'
                />
                <div className='content-center text-base font-light text-gray-717171'>
                  {`${currentUser?.address?.address}, ${currentUser?.address?.district}, ${currentUser?.address?.city}, ${currentUser?.address?.country}`}
                </div>
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
                onClick={() => handleToggleModalEditAdress(true)}
              />
            </div>
          </div>
        </div>
        <div className='basis-1/2'>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              E-mail address
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/direct.svg'
                  className='object-contain'
                />
                <div className='content-center text-base font-light text-gray-717171'>
                  {currentUser?.email}
                </div>
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
              />
            </div>
          </div>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              Password
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/key.svg'
                  className='object-contain'
                />
                <div
                  className='content-center text-base font-light text-gray-717171'
                  itemType='password'
                >
                  {currentUser?.password}
                </div>
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
              />
            </div>
          </div>
          <div>
            <div className='text-sm font-light text-gray-717171 mr-[19px]'>
              Postal code
            </div>
            <div className='flex flex-row px-4 py-6 bg-gray-F9F9F9'>
              <div className='flex flex-row gap-2 w-full'>
                <img
                  src='/assets/icons/user/userdetail/signpost.svg'
                  className='object-contain'
                />
              </div>
              <img
                src='/assets/icons/user/edit.svg'
                className='object-contain cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
      {userModal && (
        <UserModal
          isOpen={userModal}
          setIsOpen={handleToggleModalEditFullname}
        />
      )}
    </div>
  )
}
export default PersonalData
