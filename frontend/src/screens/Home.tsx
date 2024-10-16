import { useEffect, useState } from 'react';
import Product from '../components/Product';

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

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5006/api/v1/products').then(async (res) => {
      const data = await res.json();

      setProducts(data);
    });
  }, []);

  return (
    <div>
      <div className='w-4/5  mx-auto p-4'>
        <div className='h-96'>Hero Component</div>
        <h1 className='text-5xl text-gray-500 mt-4'>Latest Products</h1>

        {products.length === 0 ? (
          <h1>Loading..</h1>
        ) : (
          <div className='grid grid-cols-5 gap-4 mt-4'>
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
