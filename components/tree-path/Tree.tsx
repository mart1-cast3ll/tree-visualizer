"use client";

import React from "react";
import { TreeNode } from "@/components/tree-path/TreeNode";
import { TreeNodeData } from "@/components/tree-path/types";

export interface TreeProps {
  data: TreeNodeData[];
  onFolderClick?: (path: string) => void;
}

export const Tree: React.FC<TreeProps> = ({ data, onFolderClick }) => (
  <ul className="space-y-1">
    {data.map((node) => (
      <TreeNode key={node.id} node={node} onFolderClick={onFolderClick} />
    ))}
  </ul>
);
