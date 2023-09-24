// import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path:'/',
      element: <ProductList />
    },
    {
      path:'/add',
      element: <AddProduct />
    }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
