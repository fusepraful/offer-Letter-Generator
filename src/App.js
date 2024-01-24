import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FieldList from './Componants/FieldList';
import Home from './Componants/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/fields' element={<FieldList />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
