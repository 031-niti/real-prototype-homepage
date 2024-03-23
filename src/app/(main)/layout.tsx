import MainNavbar from "@/components/main/MainNavbar";
import Footer from "@/components/main/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      <MainNavbar />
      {children}
      <Footer />
    </div>
  );
}
