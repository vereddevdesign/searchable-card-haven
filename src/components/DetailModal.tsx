
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Book, ExternalLink, User, Globe } from "lucide-react";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
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
    description: string;
    tags: string[];
  };
}

export const DetailModal = ({ isOpen, onClose, result }: DetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold flex items-start justify-between gap-4">
            <span>{result.title}</span>
            <a
              href={result.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{result.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Book className="h-4 w-4" />
              <span>{result.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{result.author}</span>
            </div>
          </div>

          <div className="text-gray-700">{result.description}</div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="bg-primary">
                {result.type}
              </Badge>
              {result.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <div>Event Date: {result.eventDate}</div>
            <div>Published at: {result.platform}, {result.publishDate}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
