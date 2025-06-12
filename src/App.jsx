import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import WelcomePage from './pages/WelcomePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx'
import AddPatientFormikForm from './pages/AddPatientFormikForm.jsx'; 
import AddPatientHookForm from './pages/AddPatientHookForm.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/hook" element={<AddPatientHookForm />} />
        <Route path="/formik" element={<AddPatientFormikForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
export default App;
