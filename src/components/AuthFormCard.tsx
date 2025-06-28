import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Chrome, Github } from 'lucide-react';

interface AuthFormCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
  showSocialLogins?: boolean;
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  children,
  title,
  description,
  footerText,
  footerLinkText,
  footerLinkTo,
  showSocialLogins = true,
}) => {
  console.log('AuthFormCard loaded');

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
        {showSocialLogins && (
          <>
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => console.log('Google login clicked')}>
                <Chrome className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" onClick={() => console.log('GitHub login clicked')}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {footerText}{' '}
          <Link to={footerLinkTo} className="font-medium text-primary hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthFormCard;