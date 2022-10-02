import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Driver from './components/Driver';
import 'antd/dist/antd.css';
import reducer from './reducer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import SiteHeader from './components/SiteHeader';


const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <div>
      <Provider store={store}>
        <SiteHeader />
        <Routes>
          <Route path='/' element={< Driver />} />
          <Route path='/cart' element={< Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
