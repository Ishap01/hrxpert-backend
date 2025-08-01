import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
    role: Yup.string().oneOf(['Employee', 'HR', 'Admin']).required('Role is required')
  });

  const handleSubmit = async (values, { resetForm }) => {
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
    backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsdFRkrKystLSstKy0tLS0rLSstLSstKy0rKy0tLSsrKystKys3LS0tLSsrLTctLTcrKy0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBgX/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8A+fFiQo+q/B1YUGFBkoQwoIUOBCiI6cny5w+UajpHTlzhxmukrpHSOfLpGXSHDgQ4jZQoMKClCgwkVYUGLAKFBiwUigxYBLBUUlFYCs0YFZGBWZgeBixIUeh4qsIYQyUKDCglKFBixGXSHy5w+UaldOXTlzh8s10jpy6cucPlHSOnJwIcRqHCgQojRxYMKClFiRUCiwYQqqigqioEuiuiksFgJkjArNrKPBQoKx2eSlCGErJRUixGaUKDCisnCgQ4g6Q45R05StyusdI5cunNYrrK6Q4EKI3HSFAhQU4UCFKjRrBUXSUSiCxUWKKoqKTJKoKo6ugqjqgrCoPBwoix2eUoQxRkoUGLBmnCgQoMnCgQoI6SnzXKV0lStSusrpy4810lZrpK68045ynKjpK6SlHOU5Ua04UCFBTiwJSlFOKEpSoulFFQ0ootouko6waSjraBNo62qaWsmoGvDlBhR1eZYQwhmrCgwoM0oUGLBmmsGLFZdJSlCFyhrrKfNcofNRuV2lOVy5pysukrrKUc5TlRuV0lXQlKVGtOUtCVZRTiwV0UtUZV0C1YEXRdLV0dbQLW0dbQLV0NbQLWHWDXioUGFHRxWEMKDJQoEKDNKEMVWacWCsGacKUCgy6SnHKFBddY6SuMpyo1K7SnK4SukqY3PTrKUrlKUqOkrrF1zlKVGtdJV0JVgunq6Eq6i6esOqBNoqC6wtqhNqJoFrDrA8bCgQo2wcWDClGKUWCUGSipFGaUKDFVkoUGKJTijFgyZSgsoOspyuMpSjUrtzXSVw5pys43K7SlK5SlKjpK6yrK5ylKjUpwtBdGtJRUNJtHVFJG1gZUYGZkB46LBKNslCgxRmkUGLBmmsGFBmlCAoMlFFYqHFlFYMkUoqIWlAlXQdJSlc4UouuspyuMpyo3K6ylK5SlKmNz06ylK5SlKjUpyroaujWujaGroaesOrqLq6o62qKyawPHQoEpRpacKDFgzTiwYozShQYoySwZSGaSwYUEJYMUZpQgKKiwhWCFC0FghylK5lBddJ0crjKU6RqV21Z05c0p0NSunotcpV1Ma6ddWVy1Z0YvTrq65TpdF101tc9XQ09YNQw15OFKEKDvXSFHOU4rFKEKwZKUghQZKLBWDJQghQQosFYMkUBRDWAohxQlIZJoKqHKugsoHKvpzlKUNdPS65asouu0ra5as6Rrp19L6cvTTow6dtbXLW1Tp0vTOfpjE6eZhQIUZe84cCFBinFgwoMUlgxYMnFGVdEKLorKqEoyqJSlUVgyUUYsEJR1RMJR1RCZNYTC1dFlQl0dYC1dDV0C1dDW1Q9bQ1dDS1h1gedhSszD6dKHKzDFKFKzDFKKzKzVixmEJmZEqqzCNpazCLG1WGVlVmEZWZUXV1mEVmYRWZlG1WYRmZgZmZRmZgf/2Q==')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={bgStyle} className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">Register</h2>

        <Formik
          initialValues={{ name: '', email: '', password: '', role: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Full Name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Email Address"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                as="select"
                name="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
                <option value="Admin">Admin</option>
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Register
            </button>
          </Form>
        </Formik>

        <p className="text-center text-sm mt-4">
          Already registered?{' '}
          <Link to="/login" className="text-teal-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
