"use client";

import { Input } from "@/components/ui/input";
import { Tree } from "@/components/tree-path/Tree";
import { TreeNodeData } from "@/components/tree-path/types";

import { useState, useMemo } from "react";

interface FileExplorerProps {
  data: TreeNodeData[];
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    const searchLower = searchTerm.toLowerCase();

    const filterNodes = (nodes: TreeNodeData[]): TreeNodeData[] => {
      return nodes
        .map((node) => ({ ...node }))
        .filter((node) => {
          if (node.name.toLowerCase().includes(searchLower)) return true;

          if (node.children) {
            node.children = filterNodes(node.children);
            return node.children.length > 0;
          }

          return false;
        });
    };

    return filterNodes(data);
  }, [data, searchTerm]);

  return (
    <div className="h-full w-full p-8">
      <div className="mb-8">
        <Input
          placeholder="Search files ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <Tree data={filteredData} />
    </div>
  );
};
