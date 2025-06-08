import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/button';

export default function View() {
  const router = useRouter();
  const { path } = router.query as { path: string };
  const [content, setContent] = useState('');
  const [isCode, setIsCode] = useState(false);

  useEffect(() => {
    if (path) {
      fetch(`/api/file?path=${encodeURIComponent(path)}`)
        .then(res => res.json())
        .then(data => {
          setContent(data.content);
          setIsCode(data.isCode);
        });
    }
  }, [path]);

  const save = async () => {
    await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content })
    });
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Editing {path}</h1>
      <textarea
        className="w-full border h-96"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <Button onClick={save} className="mt-2">Save</Button>
    </main>
  );
}
