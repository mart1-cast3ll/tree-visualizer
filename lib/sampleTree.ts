import { TreeNodeData } from '@/components/tree/types'

export const sampleTree: TreeNodeData[] = [
  {
    id: '1',
    name: 'Root',
    children: [
      {
        id: '1-1',
        name: 'Child 1',
        children: [
          { id: '1-1-1', name: 'Grandchild 1' },
          { id: '1-1-2', name: 'Grandchild 2' },
        ],
      },
      {
        id: '1-2',
        name: 'Child 2',
      },
    ],
  },
]
