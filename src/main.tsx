import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './scss/styles.css'
import App from './App.tsx'
import Login from './auth/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="about" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)