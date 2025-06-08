import { ThemeButton } from "@/components/ui/themes/theme-button";
import { SidebarButton } from "@/components/sidebar/sidebar-button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full p-4 bg-background text-muted-foreground z-10">
      <div className="flex flex-row justify-between text-lg font-semibold antialiased">
        <div className="flex flex-row items-center">
          <SidebarButton />
          <h1>
            <Link href="/" className="flex items-center">
              <Image
                className="dark:invert"
                src="/logo.svg"
                alt="Tree.visualizer logo"
                width={200}
                height={17}
                priority
              />
            </Link>
          </h1>
        </div>

        <ThemeButton />
      </div>
    </header>
  );
}
