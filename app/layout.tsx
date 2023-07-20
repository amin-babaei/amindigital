import '../styles/globals.css'
import '../styles/theme.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Providers from "./Providers";
import MainLayout from '../layouts/MainLayout';

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  icons: {
      icon:'/favicon.ico',
  },
  manifest: "/manifest.json",
};  
export default async function RootLayout({ children }:RootLayoutProps) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
          <Providers>
            <MainLayout>
              <>
                {children}
              </>
            </MainLayout>
          </Providers>
      </body>
    </html>
  );
}