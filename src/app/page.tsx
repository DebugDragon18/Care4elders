import LoginForm from '@/components/auth/login-form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-md">
        <header className="text-center mb-8 flex flex-col items-center">
          <Image 
            src="/logo.png"
            alt="Care4Elders Logo"
            width={250}
            height={100}
            className='mb-4 h-auto'
          />
          <p className="text-muted-foreground text-lg mt-2">
            Your trusted companion for a simpler, safer life.
          </p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}
