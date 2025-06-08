import { Settings, ChevronRight, House } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuSections = [
  {
    type: "static",
    title: "Menu",
    trigger: true,
    icon: House,
  },
  {
    type: "static",
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {menuSections.map((section) => {
          if (section.type === "static") {
            if (section.title === "Menu") {
              //Menu Header
              return (
                <SidebarGroup key={section.title}>
                  <SidebarGroupLabel className="flex flex-row justify-between items-center">
                    <SidebarTrigger />
                    <Button variant="ghost" asChild>
                      <Link href="/">
                        <section.icon />
                      </Link>
                    </Button>
                  </SidebarGroupLabel>
                </SidebarGroup>
              );
            }

            // Menu Item
            return (
              <SidebarMenu key={section.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={section.url ?? "/#"}>
                      {section.icon && (
                        <section.icon className="mx-2 h-4 w-4" />
                      )}
                      <span>{section.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            );
          }

          // Collapsible Menu Item
          if (section.type === "collapsible") {
            return (
              <Collapsible
                key={section.title}
                defaultOpen
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel
                    asChild
                    className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <CollapsibleTrigger>
                      {section.icon && (
                        <section.icon className="mr-2 h-4 w-4" />
                      )}
                      {section.title}
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>

                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items?.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton className="pl-9" asChild>
                              <Link href={item.url ?? "/#"}>{item.title}</Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            );
          }

          return null;
        })}
      </SidebarContent>
    </Sidebar>
  );
}
