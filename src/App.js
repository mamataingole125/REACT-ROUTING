import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Products/*" element={<Products/> }>
                <Route path=":id" element={<Product/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
