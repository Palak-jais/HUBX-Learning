
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/home';
import MyForm from './components/dynamics';
import MaterialUI from './components/Mui';
import Main from './components/reactstrap/Main';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      <Route element={<MyForm/>} path='/dynamic'/>
      <Route element={<MaterialUI/>} path='/mui'/>
      <Route element={<Main/>} path='/reactstrap'/>
     
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
