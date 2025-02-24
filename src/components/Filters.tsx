
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export const Filters = ({ onFilterChange }: FiltersProps) => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  const mediaTypes = ["Book", "Article", "Journal", "Conference Paper"];
  const languages = ["English", "Spanish", "French", "German"];
  const locations = ["Europe", "North America", "Asia", "Africa"];
  const availability = ["Open Access", "Subscription", "Purchase Required", "Free"];

  const tags = [
    "Research",
    "Technology",
    "Science",
    "History",
    "Literature",
    "Engineering",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  return (
    <div className="w-64 bg-white p-6 border-r min-h-screen space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Date Range</h3>
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {startDate ? startDate.toLocaleDateString() : "Start Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {endDate ? endDate.toLocaleDateString() : "End Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {[
        { title: "Media Type", items: mediaTypes },
        { title: "Language", items: languages },
        { title: "Location", items: locations },
        { title: "Availability", items: availability },
      ].map((filter) => (
        <div key={filter.title} className="space-y-4">
          <h3 className="text-lg font-semibold">{filter.title}</h3>
          <div className="space-y-2">
            {filter.items.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={item} />
                <label htmlFor={item} className="text-sm">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-white transition-colors"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
