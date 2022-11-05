import './App.css';
import {Route, Routes} from 'react-router-dom'
import Profile from './components/Profile';
import Links from './components/Links';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
 
  return (
    <div className="container mt-md-5 mt-4">
      <Routes>
        <Route path= "/" element = {
            <>
              <Profile />
              <Links />
              <Footer />
            </>
          }
        />
        <Route path='/contact' element = {
            <>
              <Form />
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
