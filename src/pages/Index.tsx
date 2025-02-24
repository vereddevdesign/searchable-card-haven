
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { ResultCard } from "@/components/ResultCard";
import { DetailModal } from "@/components/DetailModal";
import { Button } from "@/components/ui/button";
import { Download, SortAsc, SortDesc } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for demonstration
const mockResults = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement",
    location: "Paris, France",
    eventDate: "2024-03-15",
    publishDate: "March 16, 2024",
    author: "Marie Durant",
    language: "English",
    type: "Official Statement",
    platform: "Reuters",
    sourceUrl: "#",
    description: "World leaders have reached a groundbreaking agreement at the Global Climate Summit, setting ambitious targets for carbon emission reductions by 2030.",
    tags: ["Climate", "Politics", "Environment", "International Relations"],
  },
  {
    id: 2,
    title: "Tech Giants Announce Joint AI Ethics Initiative",
    location: "Silicon Valley, USA",
    eventDate: "2024-02-28",
    publishDate: "March 1, 2024",
    author: "Michael Chen",
    language: "English",
    type: "Press Release",
    platform: "NYT",
    sourceUrl: "#",
    description: "Leading technology companies have joined forces to establish a comprehensive framework for ethical AI development and implementation.",
    tags: ["Technology", "AI", "Ethics", "Business"],
  },
];

const Index = () => {
  const [selectedResult, setSelectedResult] = useState<any>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const { toast } = useToast();

  const sortedResults = [...mockResults].sort((a, b) => {
    const dateA = new Date(a.eventDate).getTime();
    const dateB = new Date(b.eventDate).getTime();
    return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    toast({
      title: "Download Started",
      description: "Your download will begin shortly.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="flex">
        <Filters onFilterChange={() => {}} />
        <div className="flex-1 p-8 space-y-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <SearchBar />
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="bg-white hover:bg-secondary"
              >
                {sortDirection === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                <span className="ml-2">{sortDirection === 'asc' ? 'Oldest First' : 'Newest First'}</span>
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {sortedResults.map((result) => (
              <ResultCard
                key={result.id}
                result={result}
                onClick={() => setSelectedResult(result)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedResult && (
        <DetailModal
          isOpen={!!selectedResult}
          onClose={() => setSelectedResult(null)}
          result={selectedResult}
        />
      )}
    </div>
  );
};

export default Index;
