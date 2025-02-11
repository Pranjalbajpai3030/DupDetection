import React from 'react';
import { FileText, Video, Image, File, Download, Trash2 } from 'lucide-react';
import type { FileItem } from '../types';

const mockHistory: FileItem[] = [
  {
    id: '1',
    name: 'Report-Q4-2024.docx',
    type: 'docx',
    size: 2500000,
    uploadDate: '2025-02-15',
    status: 'unique',
    hash: 'a1b2c3d4'
  },
  {
    id: '2',
    name: 'Presentation.mp4',
    type: 'mp4',
    size: 15000000,
    uploadDate: '2025-02-14',
    status: 'duplicate',
    hash: 'e5f6g7h8'
  },
  {
    id: '3',
    name: 'Profile-Picture.jpg',
    type: 'jpg',
    size: 1200000,
    uploadDate: '2025-02-13',
    status: 'unique',
    hash: 'i9j0k1l2'
  },
  {
    id: '4',
    name: 'Backup.zip',
    type: 'zip',
    size: 50000000,
    uploadDate: '2025-02-12',
    status: 'duplicate',
    hash: 'm3n4o5p6'
  }
];

export function History() {
  const [filter, setFilter] = React.useState<'all' | 'unique' | 'duplicate'>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredHistory = mockHistory.filter(file => {
    const matchesFilter = filter === 'all' || file.status === filter;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All Files
            </FilterButton>
            <FilterButton
              active={filter === 'unique'}
              onClick={() => setFilter('unique')}
            >
              Unique
            </FilterButton>
            <FilterButton
              active={filter === 'duplicate'}
              onClick={() => setFilter('duplicate')}
            >
              Duplicates
            </FilterButton>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mocha focus:border-mocha"
            />
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hash</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredHistory.map((file) => (
                <tr key={file.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FileIcon type={file.type} />
                      <span className="ml-2">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {file.uploadDate}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={file.status} />
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">
                    {file.hash}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-mocha transition-colors">
                        <Download size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
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

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'bg-mocha text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
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