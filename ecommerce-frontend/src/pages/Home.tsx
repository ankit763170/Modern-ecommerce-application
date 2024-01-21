import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card'; // Corrected import

function Home() {
  return (
    <div className='home'>
      <section>
        <h1>
          Latest Products{' '}
          <Link to={'/search'} className='findmore'>
            More
          </Link>
        </h1>
      </section>

      <main>
        {/* Pass the necessary props to ProductCard */}
        <ProductCard
          productId='jfhtdgsd'
          name='Macbook'
          price={10}
          image='https://m.media-amazon.com/images/I/71eXNIDUGjL._SX679_.jpg'
          stock={0}
          handler={() => {
            console.log('But');
          }}
        />
      </main>
    </div>
  );
}

export default Home;
