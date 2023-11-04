
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/home';
import MyForm from './components/dynamics';
import MaterialUI from './components/Mui';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      <Route element={<MyForm/>} path='/dynamic'/>
      <Route element={<MaterialUI/>} path='/mui'/>
     
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
