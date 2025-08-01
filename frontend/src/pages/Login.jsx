
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        alert("Login successful");

        const role = response.data.user.role;
        if (role === 'HR') navigate('/admin-dashboard');
        else if (role === 'Admin') navigate('/admin-dashboard');
        else navigate('/employee-dashboard');
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("Server Error");
      }
    }
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

        {error && (
          <p className="text-sm text-red-600 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Log in
            </button>
          </div>
        </form>

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
