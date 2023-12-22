import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import axios from 'axios';

// const API_BASE_URL = 'http://192.168.1.4:8081/products';
export const API_BASE_URL = `http://${window.location.hostname}:8081/products`;

function App() {

  const [item, setItem] = useState({
    productId: "",
    productName: "",
    price: "",
    quantity: ""
  })

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts(){
    try{
      const response = await axios.get(API_BASE_URL, { crossdomain: true });
      console.log(response);
      setProducts(response.data);
    }catch(error){
      console.error('Error fetching products:', error);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Products fetchProducts={fetchProducts} item={item} setItem={setItem} products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
