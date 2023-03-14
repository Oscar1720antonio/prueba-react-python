import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowForms from './components/ShowForms'; //COMPONENTE DE VER TODOS LOS FORMULARIOS
import CreateForm from './components/CreateForm'; // CREAR EL FORMULARIO
import EditForm from './components/EditForm'; // EDITAR EL FORMULARIO
import ReportForm from './components/ReportForm'; // CREAR REPORTE DE FORMULARIOS
/* import PdfForm from './components/PdfForm'; */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowForms/>} />
          <Route path='/create' element={ <CreateForm/>} />
          <Route path='/edit/:id' element={ <EditForm/>} />
          <Route path='/report' element={ <ReportForm/>} />
          {/* <Route path='/print' element={ <PdfForm/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
