import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// StrictMode removed — it double-invokes useEffect in dev,
// which fires the phase timer twice and breaks the animation sequence
createRoot(document.getElementById('root')!).render(
  <App />
)