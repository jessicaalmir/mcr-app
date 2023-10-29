import React from 'react'
import ReactDOM from 'react-dom/client'
import {McrApp} from './McrApp.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <McrApp />
  </React.StrictMode>,
)
