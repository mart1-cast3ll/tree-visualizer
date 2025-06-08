"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getIconName, getIconPath } from "@/lib/icons";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export const TreeNode: React.FC<TreeNodeProps> = ({ node, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const iconName = getIconName(node.name, node.type, node.extension);
  const iconPath = getIconPath(iconName);

  return (
    <li className="list-none">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        ) : (
          <div className="w-6" />
        )}

        <div className="flex items-center gap-x-2">
          <Image
            className={
              ["file", "folder"].includes(iconName) ? "dark:invert" : ""
            }
            src={iconPath}
            alt={iconName || "file icon"}
            width={18}
            height={18}
            priority
          />

          <span className="text-md">{node.name}</span>
        </div>
      </div>

      {hasChildren && open && (
        <ul className="pl-6 border-l border-gray-200 ml-3 mt-1 space-y-1">
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};
