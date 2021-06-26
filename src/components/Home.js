import GroceryList from './GroceryList';
import NewGroceryForm from './NewGroceryForm';
import Header from './Header';
import EditGroceryForm from './EditGroceryForm';

const Home = () => {
  return (
    <div>
      <Header />
      <NewGroceryForm />
      <GroceryList />
      <EditGroceryForm/>
    </div>
  );
};

export default Home;
