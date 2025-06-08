export interface TreeNodeData {
  id: string;
  name: string;
  type: "file" | "directory";
  extension?: string;
  children?: TreeNodeData[];
  hidden?: boolean;
}
