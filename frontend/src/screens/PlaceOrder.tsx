import { Link } from 'react-router-dom';

import products from '../products-and-images/products';

const PlaceOrder = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-12'>
      <div className='col-span-8'>
        <div className='border-b-2 border-gray-400 pb-[40px]'>
          <h1 className='text-4xl text-gray-400 font-semibold mt-[80px]'>
            Shipping
          </h1>
          <h3 className='text-lg text-gray-400 font-semibold mt-8'>
            <span className='font-bold text-gray-500'>Address:</span> 20 Main
            st, Boston 0102, US
          </h3>
        </div>

        <div className='border-b-2 border-gray-400 pb-[40px]'>
          <h1 className='text-4xl text-gray-400 font-semibold mt-[80px]'>
            Payment Method
          </h1>
          <h3 className='text-lg text-gray-400 font-semibold mt-8'>
            <span className='font-bold text-gray-500'>Method:</span> PayPal
          </h3>
        </div>

        <div className='pb-[40px]'>
          <h1 className='text-4xl text-gray-400 font-semibold mt-[80px]'>
            Order Items
          </h1>
          <div className='mt-4'>
            {products.map((product) => {
              return (
                <div className='grid grid-cols-12 gap-3 border-b-2 border-gray-200 items-center p-4 pb-6'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-24 h-auto rounded-2xl col-span-4'
                  />
                  <h2 className='text-2xl text-gray-500 col-span-6'>
                    {product.name}
                  </h2>
                  <h2 className='col-span-2 text-lg text-gray-500'>
                    {' '}
                    2 x $ {product.price} = $199.99
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul className='list-none col-span-3 ml-8 shadow-lg px-6 py-2 h-2/5 mt-[50px]'>
        <h1 className='text-2xl text-gray-500 text-center font-semibold mb-4'>
          Order Summary
        </h1>
        <li className='border-b-2 border-gray-300 py-8 text-lg text-gray-500 flex justify-between'>
          <h4>Items</h4>
          <h4 className='font-semibold'>$379.99</h4>
        </li>
        <li className='border-b-2 border-gray-300 py-8 text-lg text-gray-500 flex justify-between'>
          <h4>Shipping</h4>
          <h4 className='font-semibold'>$0.0</h4>
        </li>
        <li className='border-b-2 border-gray-300 py-8 text-lg text-gray-500 flex justify-between'>
          <h4>Tax</h4>
          <h4 className='font-semibold'>$0.0</h4>
        </li>
        <li className='border-b-2 border-gray-300 py-6 text-lg text-gray-500 flex justify-between'>
          <h4>Total</h4>
          <h4 className='font-semibold'>$450.0</h4>
        </li>
        <Link to={'/shipping'}>
          <button className='w-full p-3 rounded-lg mt-8 bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800 mb-6'>
            Place Order
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default PlaceOrder;
