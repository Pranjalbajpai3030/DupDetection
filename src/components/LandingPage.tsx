import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Upload, Shield, Zap } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-offWhite">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-mocha" />
              <span className="ml-2 text-xl font-bold text-mocha">DeDup</span>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <Link 
                to="/login" 
                className="text-mocha hover:text-darkBrown transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-blush text-darkBrown hover:bg-opacity-90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-mocha sm:text-5xl md:text-6xl">
            Smart De-Duplication,
            <span className="block text-darkBrown">Secure Storage!</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Effortlessly manage storage by eliminating duplicate files using advanced hashing algorithms.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mocha hover:bg-darkBrown md:py-4 md:text-lg md:px-10"
            >
              Try Now
            </Link>
            <Link
              to="#how-it-works"
              className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-mocha text-mocha bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 sm:mt-0 sm:ml-3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-mocha">How It Works</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Step
                icon={<Upload className="h-8 w-8" />}
                title="Upload Any File"
                description="Support for docs, videos, images, and more"
              />
              <Step
                icon={<Shield className="h-8 w-8" />}
                title="Secure Hashing"
                description="Your files are chunked and securely hashed"
              />
              <Step
                icon={<FileCheck className="h-8 w-8" />}
                title="Check Duplicates"
                description="We identify and manage duplicate files"
              />
              <Step
                icon={<Zap className="h-8 w-8" />}
                title="Access Anytime"
                description="Your files are always available"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-16 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-mocha">Why Choose Us?</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <Feature
                title="Secure File Hashing"
                description="Your data privacy is our top priority. All files are securely hashed."
              />
              <Feature
                title="Fast Deduplication"
                description="Advanced algorithms ensure quick duplicate detection."
              />
              <Feature
                title="User-Specific Storage"
                description="Each user gets their own secure storage space."
              />
              <Feature
                title="Multiple Formats"
                description="Support for documents, images, videos, and more."
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-mocha">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to Optimize Your Storage?
            </h2>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mocha bg-blush hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center space-x-6">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
          </nav>
          <p className="mt-8 text-center text-gray-400">
            © 2025 DeDup. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-mocha transition-colors"
    >
      {children}
    </a>
  );
}

function Step({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-mocha">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-darkBrown">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-mocha">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-mocha transition-colors"
    >
      {children}
    </a>
  );
}