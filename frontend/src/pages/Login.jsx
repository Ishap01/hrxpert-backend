
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  });

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', values);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      alert("Login successful");

      if (user.role === 'HR') navigate('/hr-dashboard');
      else if (user.role === 'Admin') navigate('/admin-dashboard');
      else navigate('/employee-dashboard');
    } catch (err) {
      if (err.response?.data?.error) {
        setFieldError('email', err.response.data.error);
      } else {
        alert("Server error");
      }
    }
    setSubmitting(false);
  };

  const bgStyle = {
    //backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
      backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsdFRkrKystLSstKy0tLS0rLSstLSstKy0rKy0tLSsrKystKys3LS0tLSsrLTctLTcrKy0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBgX/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8A+fFiQo+q/B1YUGFBkoQwoIUOBCiI6cny5w+UajpHTlzhxmukrpHSOfLpGXSHDgQ4jZQoMKClCgwkVYUGLAKFBiwUigxYBLBUUlFYCs0YFZGBWZgeBixIUeh4qsIYQyUKDCglKFBixGXSHy5w+UaldOXTlzh8s10jpy6cucPlHSOnJwIcRqHCgQojRxYMKClFiRUCiwYQqqigqioEuiuiksFgJkjArNrKPBQoKx2eSlCGErJRUixGaUKDCisnCgQ4g6Q45R05StyusdI5cunNYrrK6Q4EKI3HSFAhQU4UCFKjRrBUXSUSiCxUWKKoqKTJKoKo6ugqjqgrCoPBwoix2eUoQxRkoUGLBmnCgQoMnCgQoI6SnzXKV0lStSusrpy4810lZrpK68045ynKjpK6SlHOU5Ua04UCFBTiwJSlFOKEpSoulFFQ0ootouko6waSjraBNo62qaWsmoGvDlBhR1eZYQwhmrCgwoM0oUGLBmmsGLFZdJSlCFyhrrKfNcofNRuV2lOVy5pysukrrKUc5TlRuV0lXQlKVGtOUtCVZRTiwV0UtUZV0C1YEXRdLV0dbQLW0dbQLV0NbQLWHWDXioUGFHRxWEMKDJQoEKDNKEMVWacWCsGacKUCgy6SnHKFBddY6SuMpyo1K7SnK4SukqY3PTrKUrlKUqOkrrF1zlKVGtdJV0JVgunq6Eq6i6esOqBNoqC6wtqhNqJoFrDrA8bCgQo2wcWDClGKUWCUGSipFGaUKDFVkoUGKJTijFgyZSgsoOspyuMpSjUrtzXSVw5pys43K7SlK5SlKjpK6yrK5ylKjUpwtBdGtJRUNJtHVFJG1gZUYGZkB46LBKNslCgxRmkUGLBmmsGFBmlCAoMlFFYqHFlFYMkUoqIWlAlXQdJSlc4UouuspyuMpyo3K6ylK5SlKmNz06ylK5SlKjUpyroaujWujaGroaesOrqLq6o62qKyawPHQoEpRpacKDFgzTiwYozShQYoySwZSGaSwYUEJYMUZpQgKKiwhWCFC0FghylK5lBddJ0crjKU6RqV21Z05c0p0NSunotcpV1Ma6ddWVy1Z0YvTrq65TpdF101tc9XQ09YNQw15OFKEKDvXSFHOU4rFKEKwZKUghQZKLBWDJQghQQosFYMkUBRDWAohxQlIZJoKqHKugsoHKvpzlKUNdPS65asouu0ra5as6Rrp19L6cvTTow6dtbXLW1Tp0vTOfpjE6eZhQIUZe84cCFBinFgwoMUlgxYMnFGVdEKLorKqEoyqJSlUVgyUUYsEJR1RMJR1RCZNYTC1dFlQl0dYC1dDV0C1dDW1Q9bQ1dDS1h1gedhSszD6dKHKzDFKFKzDFKKzKzVixmEJmZEqqzCNpazCLG1WGVlVmEZWZUXV1mEVmYRWZlG1WYRmZgZmZRmZgf/2Q==')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={bgStyle} className="flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-teal-700 mb-6">Welcome Back</h2>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  {isSubmitting ? 'Logging in...' : 'Log in'}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Not registered?{' '}
          <Link to="/register" className="text-teal-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
