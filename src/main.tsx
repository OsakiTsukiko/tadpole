import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './scss/styles.css'
import Login from './auth/Login.tsx';
import Register from './auth/Register.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)