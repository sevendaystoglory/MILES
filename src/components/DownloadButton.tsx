import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="download-button group"
    >
      <span className="flex items-center gap-2">
        Download Extension
        <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
      </span>
    </button>
  );
};

export default DownloadButton;