import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../context/AuthContext';
import * as Yup from 'yup';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  //const { setUser } = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

   const SignupSchema = Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().min(6).required("Password is required"),
    });


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {email,password});
      const { token, user } = res.data;
       localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      alert("Login successful");
       if (user.role === 'HR') navigate('/hr-dashboard');
      else if (user.role === 'Admin') navigate('/admin-dashboard');
      else navigate('/employee-dashboard');

    } catch (err) {
      alert("Login failed");
    }
  };

 const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  
   return (
     <div style={bgStyle} className="d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <h2 className="text-center mb-4 text-dark">Welcome Back</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleLogin}
        >
          <Form>
                    <div className="mb-3">
                    <Field name="email"  className="form-control" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                    </div>
          
                    <div className="mb-3">
                    <input name="password"  className="form-control" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <ErrorMessage name="password" component="div" className="error-text" />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;