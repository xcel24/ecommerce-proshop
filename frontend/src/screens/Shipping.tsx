import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='shadow-xl h-[4/5] w-[550px] p-4 bg-white rounded-xl'>
        <h1 className='text-5xl text-gray-500 text-center font-normal mt-5'>
          Shipping
        </h1>
        <div className='mt-[40px] p-4'>
          <h1 className='text-lg text-gray-500 px-2'>Address</h1>
          <input
            type='text'
            placeholder='Enter address'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <div className='px-4 py-2'>
          <h1 className='text-lg text-gray-500 px-2'>City</h1>
          <input
            type='text'
            placeholder='Enter city'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <div className='mt-3 px-4 py-2'>
          <h1 className='text-lg text-gray-500 px-2'>Postal Code</h1>
          <input
            type='text'
            placeholder='Enter postal code'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <div className='mt-3 px-4 py-2'>
          <h1 className='text-lg text-gray-500 px-2'>Country</h1>
          <input
            type='text'
            placeholder='Enter country'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <Link to={'/payment'}>
          <button className='w-full px-4 py-2 rounded-lg my-[50px] bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
