// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
// import Trial from './Components/Trial';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Footer from './Components/Footer';
import SingleProductPage from './Components/SingleProductPage';
import { DataProvider } from './contexts/DataContexts';




function App() {

  console.log('ellooldkna')

  return (
    <>
      <Router>
        <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Product/>}/>
          <Route path='/product/:id' element={<SingleProductPage/>}/>      
        </Routes>
        <Footer/>
        </DataProvider>
      </Router>
      
    </>
  );
}

export default App;
