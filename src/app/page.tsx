import LoginForm from '@/components/auth/login-form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
        data-ai-hint="calm nature"
      />
      <div className="w-full max-w-md z-10">
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
