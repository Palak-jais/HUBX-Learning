
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
