"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarButton() {
  const { state, open } = useSidebar();

  const isSidebarActive = state === "expanded" || open;

  return !isSidebarActive ? <SidebarTrigger /> : null;
}
