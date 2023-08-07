import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe();

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Home' element={<Home/>}>
          </Route>
          <Route path='/checkout' element={<Checkout />}>
          </Route>
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}>
          </Route>
          <Route path='/' element={<Login />}>
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
