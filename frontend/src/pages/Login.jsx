<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
//import { useAuth } from '../context/authContext';


const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(null);
  //const {setUser} = useAuth(); 

   
=======
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });
>>>>>>> 9442e79321675db37415140a98ea84b91c091323

  const handleLogin = async (values, { setSubmitting }) => {
    try {
<<<<<<< HEAD
      const response = await axios.post("http://localhost:5000/api/auth/login", {email,password});
      if(response.data.success){
       localStorage.setItem('token', response.data.token);
       localStorage.setItem('user', JSON.stringify(response.data.user));
       //setUser(response.data.user);
      alert("Login successful");
      console.log(response);
       if (response.data.user.role === 'HR') navigate('/hr-dashboard');
      else if (response.data.user.role === 'Admin') navigate('/admin-dashboard');
      else navigate('/EmployeeDashboard');
      }
    } catch (error) {
      if(error.response && !error.response.data.success){
        setError(error.response.data.error)
      }
      else{
        setError("Server Error")
      }
=======
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: values.email,
        password: values.password,
      });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      alert("Login successful");
      if (user.role === 'HR') navigate('/hr-dashboard');
      else if (user.role === 'Admin') navigate('/admin-dashboard');
      else navigate('/employee-dashboard');
    } catch (err) {
      alert("Login failed");
>>>>>>> 9442e79321675db37415140a98ea84b91c091323
    }
    setSubmitting(false);
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
<<<<<<< HEAD
        {error && <p className="text-danger small">{error}</p>}
          <form onSubmit={handleLogin}>
                    <div className="mb-3">
                    <input name="email" type="email"  className="form-control"  placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
                    </div>
          
                    <div className="mb-3">
                    <input name="password"  className="form-control" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  required/>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
            </form>
            <p className="text-center mt-3">
                      Not registered? <Link to="/register">Register</Link>
            </p>
=======
        <Formik
          initialValues={{ email, password }}
          enableReinitialize={true}
          validationSchema={SignupSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleChange(e);
                  }}
                />
                <ErrorMessage name="email" component="div" className="text-danger small" />
              </div>

              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleChange(e);
                  }}
                />
                <ErrorMessage name="password" component="div" className="text-danger small" />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Log in</button>
              </div>
            </Form>
          )}
        </Formik>
>>>>>>> 9442e79321675db37415140a98ea84b91c091323
      </div>
    </div>
  );
};

export default Login;
