import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'files');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const relPath = (req.query.path as string) || '';
  const dirPath = path.join(ROOT, relPath);
  try {
    const dirents = await fs.readdir(dirPath, { withFileTypes: true });
    const entries = dirents.map((d) => ({
      name: d.name,
      path: path.join(relPath, d.name).replace(/\\/g, '/'),
      type: d.isDirectory() ? 'directory' as const : 'file' as const,
    }));
    res.status(200).json({ path: relPath, entries });
  } catch (err) {
    res.status(500).json({ error: 'Unable to read directory' });
  }
}
