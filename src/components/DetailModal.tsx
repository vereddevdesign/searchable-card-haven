
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Book, ExternalLink, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <DialogTitle className="text-2xl font-semibold">
            {result.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
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

          <div className="text-gray-700">{result.description}</div>

          <div className="flex flex-wrap gap-2">
            {result.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="text-sm text-gray-500 border-t pt-4 space-y-3">
            <div>Event Date: {result.eventDate}</div>
            <div>Published at: {result.platform}, {result.publishDate}</div>
          </div>

          <div className="flex justify-end mt-4">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a
                href={result.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Open Source
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
