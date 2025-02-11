import React from 'react';
import { Menu, Upload, Clock, Settings, LogOut, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would also clear auth tokens, cookies, etc.
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#FAF3F0] flex">
      {/* Sidebar */}
      <aside className={`bg-[#9C6B53] text-white w-64 min-h-screen flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">DeDup</h1>
        </div>
        
        <nav className="mt-8">
          <NavItem icon={<Home size={20} />} label="Dashboard" to="/dashboard" />
          <NavItem icon={<Upload size={20} />} label="Upload File" to="/upload" />
          <NavItem icon={<Clock size={20} />} label="History" to="/history" />
          <NavItem icon={<Settings size={20} />} label="Settings" to="/settings" />
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-white hover:bg-[#6B4F4F] transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button 
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) {
  return (
    <Link 
      to={to}
      className="flex items-center px-6 py-3 text-white hover:bg-[#6B4F4F] transition-colors"
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}