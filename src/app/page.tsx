import LoginForm from '@/components/auth/login-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary">ElderEase</h1>
          <p className="text-muted-foreground text-lg mt-2">
            Your trusted companion for a simpler, safer life.
          </p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}
