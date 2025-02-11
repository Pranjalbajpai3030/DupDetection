import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Upload } from './components/Upload';
import { History } from './components/History';
import { Settings } from './components/Settings';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/upload" element={
          <Layout>
            <Upload />
          </Layout>
        } />
        <Route path="/history" element={
          <Layout>
            <History />
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <Settings />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;