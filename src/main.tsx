import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Supabase from './Supabase.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />,*/}
    <Supabase />
  </StrictMode>,
)

