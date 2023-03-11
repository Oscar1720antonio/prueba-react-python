import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowForms from './components/ShowForms';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowForms/>} />
          <Route path='/create' element={ <CreateForm/>} />
          <Route path='/edit/:id' element={ <EditForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
