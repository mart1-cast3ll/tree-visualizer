import { FileExplorer } from "@/components/tree-path/FileExplorer";
import { getDirectoryTree } from "@/lib/getDirectoryTree";
import path from "path";
import os from "os";

export default async function Home() {
  const userHome = os.homedir();
  const documentsPath = path.join(userHome, "Documents");
  const root = await getDirectoryTree(documentsPath);

  return (
    <div className="grid grid-cols-1 h-full w-full">
      <div className="bg-secondary m-2 rounded-md flex items-center justify-center">
        <FileExplorer data={[root]} />
      </div>
    </div>
  );
}
