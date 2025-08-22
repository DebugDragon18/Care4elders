'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle authentication here.
    // For this demo, we'll just redirect to the dashboard.
    router.push('/dashboard');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl">Welcome Back</CardTitle>
        <CardDescription className="text-md">
          Please enter your details to log in.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email or Mobile Number
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="h-14 text-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-lg">
              Password
            </Label>
            <Input id="password" type="password" required className="h-14 text-lg" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full h-14 text-lg">
            Log In
          </Button>
          <Button variant="outline" className="w-full h-14 text-lg">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
