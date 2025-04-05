import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CountryProvider } from './CountryContext.jsx';
import './index.css'
import 'leaflet/dist/leaflet.css';
import '@fontsource-variable/sora';

createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>
)