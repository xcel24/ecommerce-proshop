import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import products from '../products-and-images/products';

const Cart = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-12'>
      <div className='col-span-8'>
        <h1 className='text-5xl text-gray-400 font-semibold mt-5'>
          Shopping Cart
        </h1>
        <div className='mt-4'>
          {products.map((product) => {
            return (
              <div className='grid grid-cols-12 gap-3 border-b-2 border-gray-200 items-center p-4 pb-6'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-32 h-auto rounded-2xl col-span-4'
                />
                <h2 className='text-2xl text-gray-500 col-span-4'>
                  {product.name}
                </h2>
                <h2 className='col-span-2 text-lg text-gray-500'>
                  $ <span className='font-bold'>{product.price}</span>
                </h2>
                <select
                  name='quantity'
                  id='qty'
                  className='px-4 py-2 border-b-2 border-gray-400 outline-none col-span-1 w-[80px]'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
                <button className='col-span-1 text-lg ml-4'>
                  <FaTrash />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className='col-span-4 shadow-xl ml-8 p-6 h-[320px] mt-5 '>
        <h1 className='text-3xl text-gray-500 font-semibold'>Subtotal Items</h1>
        <h3 className='text-2xl text-gray-400 mt-8 border-b-2 border-gray-200 pb-4'>
          $35.44
        </h3>
        <Link to={'/shipping'}>
          <button className='w-full p-4 rounded-lg mt-8 bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800'>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
