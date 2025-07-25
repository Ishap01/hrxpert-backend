import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';



const Register = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
    role: Yup.string().oneOf(['Employee','HR', 'Admin']).required('Role is required')
  });

  const handleSubmit = async (values,{ resetForm }) => {
    try {
       await axios.post('http://localhost:5000/api/auth/register', values);
    alert("Registration successful! Redirecting to login...");
    resetForm();
    navigate('/login'); 
  } catch (err) {
    alert("Registration failed. Try again.");
    }
  };

   const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1753362975708-c2932c383b7f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
     <div  style={bgStyle} className="bg-image d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Registration</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '', role: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <Field
                name="name"
                className="form-control"
                placeholder="Full Name"
              />
              <ErrorMessage name="name" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <Field as="select" name="role" className="form-select">
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
                <option value="Admin">Admin</option>
              </Field>
              <ErrorMessage name="role" component="div" className="text-danger small" />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </Form>
        </Formik>

        <p className="text-center mt-3">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;