import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'files');
const CODE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.py', '.java', '.c', '.cpp'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const relPath = req.query.path as string;
  if (!relPath) return res.status(400).end('Missing path');
  const filePath = path.join(ROOT, relPath);
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const isCode = CODE_EXTS.includes(path.extname(relPath));
    res.status(200).json({ content, isCode });
  } catch (err) {
    res.status(500).json({ error: 'Unable to read file' });
  }
}
