
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
  {
    id: 3,
    title: "European Union Unveils New Digital Privacy Framework",
    location: "Brussels, Belgium",
    eventDate: "2024-03-10",
    publishDate: "March 11, 2024",
    author: "Sophie Dubois",
    language: "English",
    type: "Official Statement",
    platform: "Reuters",
    sourceUrl: "#",
    description: "The EU Commission has announced comprehensive new guidelines for data protection and digital privacy across member states.",
    tags: ["Technology", "Privacy", "EU", "Regulation"],
  },
  {
    id: 4,
    title: "Major Breakthrough in Renewable Energy Storage",
    location: "Berlin, Germany",
    eventDate: "2024-03-05",
    publishDate: "March 6, 2024",
    author: "Klaus Weber",
    language: "German",
    type: "News Article",
    platform: "AP",
    sourceUrl: "#",
    description: "Scientists announce revolutionary new battery technology that could transform renewable energy storage capabilities.",
    tags: ["Science", "Technology", "Energy", "Environment"],
  },
  {
    id: 5,
    title: "Global Trade Summit Addresses Supply Chain Resilience",
    location: "Singapore",
    eventDate: "2024-03-12",
    publishDate: "March 13, 2024",
    author: "Li Wei",
    language: "English",
    type: "Press Release",
    platform: "BBC",
    sourceUrl: "#",
    description: "International business leaders and policymakers gather to discuss strategies for strengthening global supply chains.",
    tags: ["Economics", "Trade", "Business", "International Relations"],
  },
  {
    id: 6,
    title: "New Educational Initiative Launches Across Asia Pacific",
    location: "Tokyo, Japan",
    eventDate: "2024-03-08",
    publishDate: "March 9, 2024",
    author: "Tanaka Yuki",
    language: "English",
    type: "News Article",
    platform: "AP",
    sourceUrl: "#",
    description: "Regional cooperation program aims to enhance digital literacy and STEM education across Asia Pacific nations.",
    tags: ["Education", "Technology", "Asia", "Development"],
  }
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
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              Showing {sortedResults.length} results
            </p>
            <div className="grid gap-6">
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
