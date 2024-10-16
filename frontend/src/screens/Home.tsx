import Product from '../components/Product';
import products from '../products-and-images/products';

const Home = () => {
  console.log(products);

  return (
    <div>
      <div className='w-4/5  mx-auto p-4'>
        <div className='h-96'>Hero Component</div>
        <h1 className='text-5xl text-gray-500 mt-4'>Latest Products</h1>

        <div className='grid grid-cols-5 gap-4 mt-4'>
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
