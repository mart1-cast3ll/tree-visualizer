"use client"
import React, { useState } from 'react'
import { TreeNodeData } from './types'
import { Button } from '@/components/ui/button'

export interface TreeNodeProps {
  node: TreeNodeData
  depth?: number
}

export const TreeNode: React.FC<TreeNodeProps> = ({ node, depth = 0 }) => {
  const [open, setOpen] = useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <li className="list-none">
      <div className="flex items-center gap-2">
        {hasChildren && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Collapse node' : 'Expand node'}
          >
            {open ? '-' : '+'}
          </Button>
        )}
        <span>{node.name}</span>
      </div>
      {hasChildren && open && (
        <ul className="pl-4 border-l ml-3 mt-1 space-y-1">
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}
