import AuthRoute from "@/components/authRoute";
import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthRoute>
      <div className="font-nunito flex min-h-screen w-full flex-col md:flex-row">
        <Sidebar />
        <MobileHeader />
        <main className="flex-1 overflow-y-auto md:px-6">
          {children}
        </main>
      </div>
    </AuthRoute>
  );
}
