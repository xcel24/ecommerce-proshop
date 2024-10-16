import { Link } from 'react-router-dom';

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

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className='bg-white shadow-xl rounded-lg p-4 '>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className='object-cover mx-auto rounded-lg'
        />
      </Link>

      <div className='px-4'>
        <h1 className='text-md text-center mt-4 font-semibold underline'>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h1>
        <div className='flex justify-center mt-4 text-gray-500'>
          <h4 className='text-center mr-2'>{product.category}</h4>
          <h4>{product.numReviews} reviews</h4>
        </div>
        <h4 className='text-center text-xl font-semibold text-gray-700 mt-4'>
          ${product.price}
        </h4>
      </div>
    </div>
  );
};

export default Product;
