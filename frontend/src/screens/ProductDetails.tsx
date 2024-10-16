import { Link, useParams } from 'react-router-dom';
import products from '../products-and-images/products';
import { useEffect, useState } from 'react';

type ProductType = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  const { id } = useParams<{ id: string }>();

  console.log(id);

  useEffect(() => {
    const filterProduct = products.find((p) => p._id === id);
    if (filterProduct) setProduct(filterProduct);
  }, [id]);

  return (
    <div className='w-4/5 mx-auto'>
      <Link to='/'>
        <button className='mt-6 px-4 py-2 bg-gray-300 rounded-lg cursor-pointer'>
          Go back
        </button>
      </Link>
      {product === null ? (
        <h1>Loading...</h1>
      ) : (
        <div className='grid grid-cols-12 gap-6 mt-20'>
          <div className='col-span-5'>
            <img
              src={product.image}
              alt={product.name}
              className='object-contain w-full h-4/5 rounded-lg'
            />
          </div>
          <ul className='list-none col-span-4 ml-5'>
            <li className='border-b-2 border-gray-300 py-8 text-2xl font-semibold text-gray-500'>
              {product.name}
            </li>
            <li className='border-b-2 border-gray-300 py-8 text-gray-500 font-semibold'>
              {product.numReviews} reviews
            </li>
            <li className='border-b-2 border-gray-300 py-8 flex text-gray-500'>
              <h3>Price</h3>
              <h3 className='ml-4 font-bold'>${product.price}</h3>
            </li>
            <li className='py-8 text-gray-500'>
              Description: {product.description}
            </li>
          </ul>

          <ul className='list-none col-span-3 ml-6 shadow-lg px-6 py-2 h-4/5'>
            <li className='border-b-2 border-gray-300 py-8 text-lg text-gray-500 flex justify-between'>
              <h4>Price</h4>
              <h4 className='font-semibold'>${product.price}</h4>
            </li>
            <li className='border-b-2 border-gray-300 py-8 text-lg text-gray-500 flex justify-between'>
              <h4>Status</h4>
              <h4 className='font-semibold'>
                {product.countInStock > 0 ? 'In-Stock' : 'Out of Stock'}
              </h4>
            </li>
            <li className='border-b-2 border-gray-300 py-8 flex text-gray-500 justify-between'>
              <h3>Qty</h3>
              <select
                name='quantity'
                id='qty'
                className='px-4 py-2 border-b-2 border-gray-400 outline-none'
                disabled={product.countInStock === 0}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </li>
            <li className='py-8 text-gray-500'>
              <Link to={'/cart'}>
                <button
                  className={`w-full p-4 rounded-lg mt-6 ${
                    product.countInStock === 0
                      ? 'bg-gray-300 text-black'
                      : 'bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-800'
                  }  `}
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
