import { Outlet } from 'react-router-dom';
import { RxTriangleDown } from 'react-icons/rx';
import { FaCartShopping } from 'react-icons/fa6';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-600 flex items-center h-36 sticky top-0 z-50'>
        <div className='w-4/5 flex p-4  mx-auto items-center justify-between text-gray-200 font-sans'>
          <div className='text-3xl font-bold flex items-center'>
            <img src={logo} alt='Proshop' />
            <h2 className='font-normal ml-2'>Proshop</h2>
          </div>
          <div className='flex  w-2/4 justify-end items-center py-2 font-semibold'>
            <input
              type='text'
              placeholder='Search Products...'
              className='p-4  rounded-lg mr-6 outline-none text-gray-600 font-light'
            />
            <div className='border-[1.5px] border-blue-500 text-lg mr-3 px-2 py-4 rounded-lg text-green-500'>
              Search
            </div>
            <div className='text-lg mx-2 flex items-center'>
              <FaCartShopping />
              <span className='ml-1'>Cart</span>
            </div>
            <div className='text-lg mx-3 flex items-center'>
              <span className='mr-1'>John Doe</span>
              <RxTriangleDown />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
