import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<LoginPage/>} />
        <Route path='/order/:inputValues' element = {<OrderPage/>} />
        <Route path='*' element = {<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
