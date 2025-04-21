
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/reset.css'
// import './styles/common.css'
// import './i18n/i18n'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//   <I18nextProvider i18n={i18n}>

//     <App />
//       </I18nextProvider>

//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n/i18n";
import './styles/common.css'
import './styles/reset.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);