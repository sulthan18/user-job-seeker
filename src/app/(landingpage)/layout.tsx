import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";
import I18NextProvider from "@/providers/I18NextProvider";

const epilogue = Epilogue({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        <I18NextProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </I18NextProvider>
      </body>
    </html>
  );
}