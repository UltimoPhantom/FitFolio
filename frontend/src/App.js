import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <BrowserRouter>
       <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home/>}
            />
            <Route 
                    path='/login'
                    element={<Login/>}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
