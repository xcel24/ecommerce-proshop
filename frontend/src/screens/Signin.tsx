import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='shadow-xl h-[600px] w-[550px] p-4 bg-white rounded-xl'>
        <h1 className='text-5xl text-gray-500 text-center font-normal mt-5'>
          Sign In
        </h1>
        <div className='mt-[40px] p-4'>
          <h1 className='text-lg text-gray-500 px-2'>Email Address</h1>
          <input
            type='email'
            placeholder='Enter email'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <div className='mt-3 px-4 py-2'>
          <h1 className='text-lg text-gray-500 px-2'>Password</h1>
          <input
            type='password'
            placeholder='Enter password'
            className='px-4 py-2 w-full outline-none border-[1.5px] border-gray-400 rounded-lg mt-2'
          />
        </div>
        <button className='w-full px-4 py-2 rounded-lg mt-[50px] bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800'>
          Sign In
        </button>
        <p className='text-lg text-gray-500 mt-6 px-4 py-2'>
          New Cusomter?{' '}
          <Link to={'/signup'}>
            <span className='font-bold hover:underline'>Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
