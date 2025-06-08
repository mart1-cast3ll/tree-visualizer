import { Tree } from '@/components/tree/Tree'
import { sampleTree } from '@/lib/sampleTree'

export default function TreePage() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Tree Visualizer</h1>
      <Tree data={sampleTree} />
    </main>
  )
}
