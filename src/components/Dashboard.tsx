import React from 'react';
import { FileText, Video, Image, File, Eye, Trash2 } from 'lucide-react';
import type { FileItem, StorageStats } from '../types';

const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'Report.docx',
    type: 'doc',
    size: 2500000,
    uploadDate: '2025-02-10',
    status: 'unique'
  },
  {
    id: '2',
    name: 'Video.mp4',
    type: 'mp4',
    size: 15000000,
    uploadDate: '2025-02-08',
    status: 'duplicate'
  }
];

const mockStats: StorageStats = {
  totalFiles: 30,
  uniqueFiles: 25,
  duplicateFiles: 5,
  storageUsed: 1500000000,
  storageLimit: 5000000000
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Storage Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Files"
          value={mockStats.totalFiles}
          color="bg-[#9C6B53]"
        />
        <StatCard
          title="Unique Files"
          value={mockStats.uniqueFiles}
          color="bg-[#6B4F4F]"
        />
        <StatCard
          title="Duplicate Files"
          value={mockStats.duplicateFiles}
          color="bg-[#F5C6C6]"
          textColor="text-[#6B4F4F]"
        />
        <StatCard
          title="Storage Used"
          value={`${Math.round(mockStats.storageUsed / 1000000000 * 100) / 100}GB`}
          color="bg-[#9C6B53]"
        />
      </div>

      {/* Recent Files */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Recent Files</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockFiles.map((file) => (
                <tr key={file.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FileIcon type={file.type} />
                      <span className="ml-2">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 uppercase text-sm">{file.type}</td>
                  <td className="px-6 py-4">{file.uploadDate}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={file.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color, textColor = 'text-white' }) {
  return (
    <div className={`${color} rounded-lg p-4 shadow-sm`}>
      <h3 className={`text-sm font-medium ${textColor} opacity-80`}>{title}</h3>
      <p className={`text-2xl font-bold mt-1 ${textColor}`}>{value}</p>
    </div>
  );
}

function FileIcon({ type }: { type: string }) {
  switch (type.toLowerCase()) {
    case 'doc':
    case 'docx':
    case 'pdf':
      return <FileText className="text-blue-500" size={20} />;
    case 'mp4':
    case 'mov':
      return <Video className="text-purple-500" size={20} />;
    case 'jpg':
    case 'png':
      return <Image className="text-green-500" size={20} />;
    default:
      return <File className="text-gray-500" size={20} />;
  }
}

function StatusBadge({ status }: { status: 'unique' | 'duplicate' }) {
  const styles = status === 'unique'
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
      {status === 'unique' ? '✓ Unique' : '✗ Duplicate'}
    </span>
  );
}