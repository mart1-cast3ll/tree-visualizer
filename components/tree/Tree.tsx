"use client"
import React from 'react'
import { TreeNodeData } from './types'
import { TreeNode } from './TreeNode'

export interface TreeProps {
  data: TreeNodeData[]
}

export const Tree: React.FC<TreeProps> = ({ data }) => (
  <ul className="space-y-1">
    {data.map((node) => (
      <TreeNode key={node.id} node={node} />
    ))}
  </ul>
)
