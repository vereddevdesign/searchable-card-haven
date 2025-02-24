
import { ExternalLink, Calendar, MapPin, Book, User, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResultCardProps {
  result: {
    title: string;
    location: string;
    eventDate: string;
    publishDate: string;
    author: string;
    language: string;
    type: string;
    platform: string;
    sourceUrl: string;
  };
  onClick: () => void;
}

export const ResultCard = ({ result, onClick }: ResultCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg border hover:border-primary cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg animate-slide-in space-y-4"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-900 flex-1">{result.title}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-600 bg-secondary px-2 py-1 rounded">
              <Globe className="h-4 w-4" />
              <span>{result.language.substring(0, 2).toUpperCase()}</span>
            </div>
            <a
              href={result.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-primary hover:bg-secondary rounded-full p-1 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{result.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{result.author}</span>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 border-t pt-4 mt-4">
        Published at: {result.platform}, {result.publishDate}
      </div>
    </div>
  );
};
