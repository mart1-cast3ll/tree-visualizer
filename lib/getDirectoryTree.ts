import * as fsPromises from "fs/promises";
import path from "path";
import { TreeNodeData } from "@/components/tree-path/types";

const IGNORE_PATTERNS = [
  ".",
  "..",
  ".env",
  ".git",
  ".next",
  ".DS_Store",
  "node_modules",
  "package-lock.json",
];

async function buildNode(dirPath: string): Promise<TreeNodeData> {
  const name = path.basename(dirPath);
  const id = dirPath;

  if (name.startsWith(".") || IGNORE_PATTERNS.includes(name)) {
    return {
      id,
      name,
      type: "file",
      extension: path.extname(name).slice(1),
      hidden: true,
    };
  }

  let stats;
  try {
    stats = await fsPromises.stat(dirPath); // ✅ detectar errores de acceso aquí
  } catch (err) {
    console.warn(`No se puede acceder a: ${dirPath}`, err);
    return {
      id,
      name,
      type: "file",
      extension: path.extname(name).slice(1),
      hidden: true,
    };
  }

  if (stats.isDirectory()) {
    let entries: string[] = [];

    try {
      entries = await fsPromises.readdir(dirPath);
    } catch (readErr) {
      console.warn(`No se puede leer el directorio: ${dirPath}`, readErr);
      return {
        id,
        name,
        type: "directory",
        hidden: true,
      };
    }

    entries = entries.filter(
      (entry) => !entry.startsWith(".") && !IGNORE_PATTERNS.includes(entry)
    );

    const children = await Promise.all(
      entries.map((entry) => buildNode(path.join(dirPath, entry)))
    );

    return {
      id,
      name,
      type: "directory",
      children: children.filter((child) => !child.hidden),
    };
  } else {
    return {
      id,
      name,
      type: "file",
      extension: path.extname(name).slice(1).toLowerCase(),
    };
  }
}

export async function getDirectoryTree(
  root: string = process.cwd()
): Promise<TreeNodeData> {
  return buildNode(root);
}
