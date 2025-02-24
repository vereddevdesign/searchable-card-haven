
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto animate-fade-in">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="search"
        placeholder="Search by title, author, or keywords..."
        className="pl-10 h-12 text-lg border-2 focus:border-primary transition-colors"
      />
    </div>
  );
};
