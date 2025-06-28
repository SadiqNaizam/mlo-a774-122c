import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/components/ui/use-toast";

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Forgot password form submitted:', values);
    
    // Simulate an API call to send the reset link
    toast({
      title: "Reset Link Sent",
      description: `If an account exists for ${values.email}, a password reset link has been sent.`,
    });

    // Redirect the user to the login page after showing the confirmation
    setTimeout(() => {
      navigate('/'); // Navigate to the login page, path from App.tsx
    }, 2500);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No problem. Enter your email address below and we'll send you a link to reset it."
          footerText="Remember your password?"
          footerLinkText="Login"
          footerLinkTo="/" // Path from App.tsx
          showSocialLogins={false} // Social logins are not needed here
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;