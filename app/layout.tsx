import { ThemeProvider } from "@/components/ui/themes/theme-provider";
import { geistSans, geistMono } from "@/components/ui/fonts/fonts";
import "@/app/globals.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Visualizer",
  description: "A simple tree visualizer for your file system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex",
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-col flex-1 h-screen">
                <Header />

                <main className="flex-1 overflow-auto p-4">{children}</main>

                <Footer />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
