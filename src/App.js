
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/home';
import DynamicFieldsForm from './components/dynamics';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      <Route element={<DynamicFieldsForm/>} path='/dynamic'/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
