import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  Routes,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import AuthProvider from './contexts/AuthContext';
import SignUp from './components/SignUp.js/SignUp';

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>} />
          <Route path='/shop' element={<Shop></Shop>} />
          <Route path='/review' element={<Review />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/product/:productKey' element={<ProductDetail></ProductDetail>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/shipment' element={<Shipment />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;