import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Myheader';
import Footer from './Components/Myfooter';
import Home from './Components/Home';
import About from './Components/About';
import SamplePost from './Components/SamplePost';
import Contact from './Components/Contact';
import Nopage from './Components/Nopage';
import { Navigate, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {

  const [auth, setAuth] = useState(0);
  const loginhandler = () => {
    if (auth == 1) {
      alert('auth one' + auth);
      setAuth(0);
    } else {
      alert('auth zero' + auth);
      setAuth(1);
    }
  };
  // useEffect(() => {
  //   alert('Effect auth' + auth); // This will alert the updated (new) value of auth
  // }, [auth]);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar login={loginhandler} state={auth} />
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {
            auth ? ( <Route path="/" element={<Navigate />} /> ) : ( <Route path="/sample" element={<SamplePost />} /> )
            }

            <Route path="*" element={<Nopage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
