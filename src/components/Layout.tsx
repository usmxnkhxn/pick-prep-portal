
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  capperName: string;
  logoUrl?: string;
}

const Layout = ({ children, capperName, logoUrl }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar capperName={capperName} logoUrl={logoUrl} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
