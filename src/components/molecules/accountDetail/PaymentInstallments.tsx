import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { setModalState } from '../../../redux/slice/modalSlice'
import EditPaymentModal from '../../organisms/modal/profile/EditPaymentModal'
import { useNavigate } from 'react-router-dom'

const PaymentInstallments = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state: RootState) => state.auth)
  const { editPaymentModal } = useSelector((state: RootState) => state.appModal)

  const handleToggleModalEditPaymentModal = (isOpen: boolean) => {
    dispatch(
      setModalState({
        key: 'editPaymentModal',
        isOpen: isOpen
      })
    )
  }

  return (
    <>
      <div className='mb-2 text-xl font-medium'>Card</div>
      <div className='mb-10 text-base font-light text-gray-717171'>
        manage payment methods
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-row gap-3'>
          <div className='bg-gray-F9F9F9 rounded-lg flex flex-row px-4 py-6 basis-4/12 justify-between cursor-pointer'>
            {currentUser?.paymentCard?.cardNumber ? (
              <div className='  text-base font-light text-gray-717171'>
                {currentUser.paymentCard.cardNumber}
              </div>
            ) : (
              <div className='  text-base font-light text-gray-717171'>
                Credit or Debit cards
              </div>
            )}

            <img
              src='/assets/icons/user/edit.svg'
              className='object-contain'
              onClick={() => handleToggleModalEditPaymentModal(true)}
            />
          </div>
          <img
            src='/assets/icons/delivery/america.svg'
            alt='American express'
          />
          <img src='/assets/icons/delivery/master_card.svg' alt='Master card' />
          <img src='/assets/icons/delivery/visa.svg' alt='Visa' />
        </div>
        <div className='flex flex-row gap-3'>
          <div className='bg-gray-F9F9F9 rounded-lg flex flex-row px-4 py-6 basis-4/12 justify-between'>
            <div>PayPal</div>
            <img src='/assets/icons/user/edit.svg' className='object-contain' />
          </div>
          <img src='/assets/icons/delivery/paypal.svg' alt='Paypal' />
        </div>
        <div>
          <div className='text-xl font-medium mb-4'>Instalments</div>
          <div
            className='flex flex-row gap-2 cursor-pointer'
            onClick={() => navigate('/instalments')}
          >
            <div className='py-[14.5px] text-base text-primary font-light'>
              Manage your instalment
            </div>
            <img
              src='/assets/icons/arrow/arrow-right-blue.svg'
              alt='instalments'
              className='object-cover py-3'
            />
          </div>
        </div>
      </div>
      {editPaymentModal && (
        <EditPaymentModal
          isOpen={editPaymentModal}
          setIsOpen={handleToggleModalEditPaymentModal}
        />
      )}
    </>
  )
}

export default PaymentInstallments
