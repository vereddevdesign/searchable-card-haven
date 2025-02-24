
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { ResultCard } from "@/components/ResultCard";
import { DetailModal } from "@/components/DetailModal";

// Mock data for demonstration
const mockResults = [
  {
    id: 1,
    title: "Machine Learning Applications in Modern Healthcare",
    location: "North America",
    date: "2024-03-15",
    author: "Dr. Sarah Johnson",
    language: "English",
    type: "Research Paper",
    sourceUrl: "#",
    description: "A comprehensive study on the applications of machine learning in modern healthcare systems, focusing on diagnostic accuracy and treatment optimization.",
    tags: ["Healthcare", "Machine Learning", "AI", "Medical Research"],
  },
  {
    id: 2,
    title: "Sustainable Urban Development: A Global Perspective",
    location: "Europe",
    date: "2024-02-28",
    author: "Prof. Michael Chen",
    language: "English",
    type: "Journal Article",
    sourceUrl: "#",
    description: "An analysis of sustainable urban development practices across different global regions, with case studies from major metropolitan areas.",
    tags: ["Urban Planning", "Sustainability", "Environment", "Development"],
  },
  // Add more mock results as needed
];

const Index = () => {
  const [selectedResult, setSelectedResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="flex">
        <Filters onFilterChange={() => {}} />
        <div className="flex-1 p-8 space-y-8">
          <SearchBar />
          <div className="grid gap-6 max-w-4xl mx-auto">
            {mockResults.map((result) => (
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
