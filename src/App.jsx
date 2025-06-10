// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//2
// import React from 'react';
// import { useForm } from 'react-hook-form';

// function LoginForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   console.log(useForm());

//   const onSubmit = (data) => {
//     console.log('Form Data:', data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("email", { required: "Email is required" })}
//         placeholder="Email"
//       />
//       {errors.email && <p>{errors.email.message}</p>}

//       <input
//         type="password"
//         {...register("password", { required: "Password is required" })}
//         placeholder="Password"
//       />
//       {errors.password && <p>{errors.password.message}</p>}

//       <button type="submit">Login</button>
//     </form>
//   );
// }
// export default LoginForm

//3
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
