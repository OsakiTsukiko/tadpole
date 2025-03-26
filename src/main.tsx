import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './scss/styles.css'
import Login from './auth/Login.tsx';
import Register from './auth/Register.tsx';
import { TadpoleProvider } from './TadpoleProvider.tsx';


/*
End In-Memory Repository
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TadpoleProvider>
      <HashRouter>
        <Routes>
          <Route index path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </HashRouter>
    </TadpoleProvider>
  </StrictMode>,
)