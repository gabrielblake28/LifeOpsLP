import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import './assets/styles.css'
import FirebaseProvider from './firebase/firebaseProvider'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
)
