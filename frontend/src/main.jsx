import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/index.css';
import '../src/assets/css/index.rtl.scss';
import '../src/lang/language.jsx';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
)
