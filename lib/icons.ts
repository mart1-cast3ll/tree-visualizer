import { generateManifest } from "material-icon-theme";

const manifest = generateManifest({});

export function getFileIconName(
  filename: string,
  ext: string,
  isFolder = false
): string | undefined {
  if (isFolder && manifest.folderNames?.[filename]) {
    return manifest.folderNames[filename];
  }
  if (isFolder && manifest.folder) {
    return manifest.folder;
  }
  if (!isFolder && manifest.fileExtensions?.[ext]) {
    return manifest.fileExtensions[ext];
  }
  if (!isFolder && manifest.fileNames?.[filename]) {
    return manifest.fileNames[filename];
  }
  return manifest.file;
}

export function getIconSvgUrl(
  iconName: string,
  basePath: string = "/icons"
): string {
  const def = manifest.iconDefinitions?.[iconName];

  if (def?.iconPath) {
    return `${basePath}/${def.iconPath}`;
  }

  const isExtension = /^[a-zA-Z0-9]+$/.test(iconName);

  return isExtension ? `${basePath}/file.svg` : `${basePath}/folder.svg`;
}

export function getIconName(
  filename: string,
  type: "file" | "directory" | "folder",
  extension: string
) {
  return getFileIconName(filename, extension, type === "directory");
}

export function getIconPath(iconName: string, basePath = "/icons") {
  const def = manifest.iconDefinitions?.[iconName];
  const rawPath = def?.iconPath ?? "file.svg";
  return `${basePath}/${rawPath.replace("./../icons/", "")}`;
}
