import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'files');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');
  const { targetPath } = req.body as { targetPath: string };
  try {
    await fs.rm(path.join(ROOT, targetPath), { recursive: true, force: true });
    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Unable to delete' });
  }
}
