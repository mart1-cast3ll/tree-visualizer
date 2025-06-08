import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'files');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');
  const { path: relPath, content } = req.body as { path: string; content: string };
  const filePath = path.join(ROOT, relPath);
  try {
    await fs.writeFile(filePath, content, 'utf8');
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Unable to save file' });
  }
}
