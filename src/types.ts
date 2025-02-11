export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  status: 'unique' | 'duplicate';
  hash?: string;
}

export interface StorageStats {
  totalFiles: number;
  uniqueFiles: number;
  duplicateFiles: number;
  storageUsed: number;
  storageLimit: number;
}