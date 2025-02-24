
import { ExternalLink, Calendar, MapPin, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResultCardProps {
  result: {
    title: string;
    location: string;
    date: string;
    author: string;
    language: string;
    type: string;
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
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-900 flex-1">{result.title}</h2>
        <a
          href={result.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-primary hover:text-secondary transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{result.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{result.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Book className="h-4 w-4" />
          <span>{result.type}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{result.author}</Badge>
        <Badge variant="outline">{result.language}</Badge>
      </div>
    </div>
  );
};
