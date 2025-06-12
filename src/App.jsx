import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import AddPatientFormikForm from './pages/AddPatientFormikForm.jsx'
import AddPatientHookForm from './pages/AddPatientHookForm.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/hook" element={<AddPatientHookForm />} />
      <Route path="/formik" element={<AddPatientFormikForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
