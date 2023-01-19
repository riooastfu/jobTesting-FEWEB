import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components import
import { Dashboard } from '../components/dashboard/Dashboard';
import Sidebar from '../components/sidebar/Sidebar';
import { TambahPegawai } from '../components/dashboard/AddPegawai/TambahPegawai';
import { EditPegawai } from '../components/dashboard/EditPegawai/EditPegawai.jsx';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='add' element={<TambahPegawai/>}/>
          <Route path='edit/:nik' element={<EditPegawai/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
