import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import StorePage from './components/StorePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router'; 
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <div className='container px-4'>
        <Routes>
          <Route path='/' element={<StorePage />}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
        </Routes>
      
      </div>
      <Footer />
      </Router>
      </div>
      
  );
}

export default App;
