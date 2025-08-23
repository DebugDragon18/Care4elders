import LoginForm from '@/components/auth/login-form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Image
        src="https://images.unsplash.com/photo-1531306341713-37b15d2a66a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-20"
        data-ai-hint="calm nature"
      />
      <div className="w-full max-w-md z-10">
        <header className="text-center mb-8 flex flex-col items-center">
          <div className="mb-4">
            <h1 className="text-5xl font-bold text-primary tracking-tight">
              Care4elders
            </h1>
          </div>
          <p className="text-muted-foreground text-lg mt-2">
            Your trusted companion for a simpler, safer life.
          </p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}
