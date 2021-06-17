import GroceryList from './GroceryList';
import NewGroceryForm from './newGroceryForm';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <NewGroceryForm />
      <GroceryList />
    </div>
  );
};

export default Home;
