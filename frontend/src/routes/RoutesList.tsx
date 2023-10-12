import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Add } from '../templates/Add';
import { Home } from '../templates/Home';

export function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}
