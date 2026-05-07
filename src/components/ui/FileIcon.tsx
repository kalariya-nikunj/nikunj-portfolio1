import { Folder, FileText, Video, ExternalLink } from "lucide-react";

const FileIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "folder": return <Folder size={80} className="text-[#2188ff] drop-shadow-[0_5px_15px_rgba(33,136,255,0.4)]" fill="currentColor" strokeWidth={0} />;
        case "video": return <Video size={60} className="text-purple-400" strokeWidth={1.5} />;
        case "link": return <ExternalLink size={60} className="text-blue-400" strokeWidth={1.5} />;
        case "pdf": return <FileText size={70} className="text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />;
        default: return <FileText size={60} className="text-gray-300" strokeWidth={1.5} />;
    }
};

export default FileIcon;