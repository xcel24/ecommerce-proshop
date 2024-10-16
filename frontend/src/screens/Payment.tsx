import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='mt-[40px]'>
        <h1 className=' text-5xl text-gray-500 font-semibold'>
          Payment Method
        </h1>
        <h3 className='text-3xl text-gray-400 mt-6'>Select method</h3>
        <div className='flex flex-col space-y-4 mt-4'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='option'
              className='form-radio text-gray-600 focus:ring-gray-500'
            />
            <span className='ml-2'>PayPal</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='option'
              className='form-radio text-gray-600 focus:ring-gray-500'
            />
            <span className='ml-2'>UPI</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='option'
              className='form-radio text-gray-600 focus:ring-gray-500'
            />
            <span className='ml-2'>Netbanking</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='option'
              className='form-radio text-gray-600 focus:ring-gray-500'
            />
            <span className='ml-2'>Credit/Debit Card</span>
          </label>
        </div>
        <Link to={'/placeorder'}>
          <button className='w-full px-4 py-2 rounded-lg my-[50px] bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
