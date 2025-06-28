import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} SecureLogin. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;