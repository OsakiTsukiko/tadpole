import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './scss/styles.css'
import Login from './auth/Login.tsx';
import Register from './auth/Register.tsx';
import { TadpoleProvider } from './TadpoleProvider.tsx';
import Home from './home/Home.tsx';
import Settings from './home/Settings.tsx';
import Seedlings from './home/Seedlings.tsx';
import Tadpoles from './home/Tadpoles.tsx';


/*
End In-Memory Repository
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TadpoleProvider>
      <HashRouter>
        <Routes>
          
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='home' element={<Home />}>
            <Route index path='tadpoles' element={<Tadpoles />} />
            <Route index path='seedlings' element={<Seedlings />} />
            <Route path='settings' element={<Settings />} />
          </Route>

        </Routes>
      </HashRouter>
    </TadpoleProvider>
  </StrictMode>,
)