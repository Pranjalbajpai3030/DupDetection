import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FileCheck } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demodemo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials against a backend
    if (email === 'demo@example.com' && password === 'demodemo') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-offWhite flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <div className="flex justify-center">
            <FileCheck className="h-12 w-12 text-mocha" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-mocha">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-mocha hover:text-darkBrown">
              Sign up
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mocha focus:border-mocha"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mocha focus:border-mocha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-mocha focus:ring-mocha border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-mocha hover:text-darkBrown">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mocha hover:bg-darkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <p className="text-xs text-center text-gray-500">
            Demo credentials: demo@example.com / demodemo
          </p>
        </div>
      </div>
    </div>
  );
}