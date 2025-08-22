import BottomNav from '@/components/layout/bottom-nav';
import Header from '@/components/layout/header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8 pb-24">{children}</main>
      <BottomNav />
    </div>
  );
}
