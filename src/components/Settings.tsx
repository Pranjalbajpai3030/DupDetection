import React from 'react';
import { User, Lock, Bell, Database, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <SettingsSection
        icon={<User className="h-6 w-6" />}
        title="Profile Settings"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <button className="px-4 py-2 bg-mocha text-white rounded-md hover:bg-darkBrown transition-colors">
              Change Photo
            </button>
          </div>
          <InputField
            label="Full Name"
            type="text"
            defaultValue="John Doe"
          />
          <InputField
            label="Email Address"
            type="email"
            defaultValue="john@example.com"
          />
        </div>
      </SettingsSection>

      {/* Security Settings */}
      <SettingsSection
        icon={<Lock className="h-6 w-6" />}
        title="Security"
      >
        <div className="space-y-4">
          <InputField
            label="Current Password"
            type="password"
            placeholder="Enter current password"
          />
          <InputField
            label="New Password"
            type="password"
            placeholder="Enter new password"
          />
          <InputField
            label="Confirm New Password"
            type="password"
            placeholder="Confirm new password"
          />
          <ToggleField
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
          />
        </div>
      </SettingsSection>

      {/* Storage Settings */}
      <SettingsSection
        icon={<Database className="h-6 w-6" />}
        title="Storage"
      >
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Storage Used</span>
              <span className="text-sm text-gray-500">15.5 GB of 50 GB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-mocha h-2 rounded-full" style={{ width: '31%' }}></div>
            </div>
          </div>
          <button className="px-4 py-2 bg-mocha text-white rounded-md hover:bg-darkBrown transition-colors">
            Upgrade Storage
          </button>
        </div>
      </SettingsSection>

      {/* Notification Settings */}
      <SettingsSection
        icon={<Bell className="h-6 w-6" />}
        title="Notifications"
      >
        <div className="space-y-4">
          <ToggleField
            label="Email Notifications"
            description="Receive email notifications for important updates"
          />
          <ToggleField
            label="Upload Confirmations"
            description="Get notified when file uploads are complete"
          />
          <ToggleField
            label="Duplicate Alerts"
            description="Receive alerts when duplicates are detected"
          />
        </div>
      </SettingsSection>

      {/* Privacy Settings */}
      <SettingsSection
        icon={<Shield className="h-6 w-6" />}
        title="Privacy"
      >
        <div className="space-y-4">
          <ToggleField
            label="File Hash Sharing"
            description="Allow hash comparison with other users for better duplicate detection"
          />
          <ToggleField
            label="Usage Analytics"
            description="Help us improve by sharing anonymous usage data"
          />
        </div>
      </SettingsSection>
    </div>
  );
}

function SettingsSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 text-mocha mb-6">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function InputField({ label, type, defaultValue, placeholder }: { label: string; type: string; defaultValue?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-mocha focus:border-mocha"
      />
    </div>
  );
}

function ToggleField({ label, description }: { label: string; description: string }) {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-700">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-mocha' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}