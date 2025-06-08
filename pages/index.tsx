import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

interface Entry {
  name: string;
  path: string;
  type: 'file' | 'directory';
}

export default function Home() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');

  const load = async (path: string = '') => {
    const res = await fetch(`/api/list?path=${encodeURIComponent(path)}`);
    if (res.ok) {
      const data = await res.json();
      setEntries(data.entries);
      setCurrentPath(data.path);
    }
  };

  useEffect(() => { load(''); }, []);

  const upDir = () => {
    const parts = currentPath.split('/').filter(Boolean);
    parts.pop();
    load(parts.join('/'));
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">File Explorer</h1>
      {currentPath && <Button onClick={upDir} className="mb-2">Up</Button>}
      <ul>
        {entries.map(e => (
          <li key={e.path} className="my-1">
            {e.type === 'directory' ? (
              <Button onClick={() => load(e.path)} className="text-blue-600 underline bg-transparent hover:bg-transparent p-0">
                {e.name}/
              </Button>
            ) : (
              <Link href={`/view?path=${encodeURIComponent(e.path)}`}>{e.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
