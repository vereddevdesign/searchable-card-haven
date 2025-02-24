
import React from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
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
  const [eventStartDate, setEventStartDate] = React.useState<Date>();
  const [eventEndDate, setEventEndDate] = React.useState<Date>();
  const [publishStartDate, setPublishStartDate] = React.useState<Date>();
  const [publishEndDate, setPublishEndDate] = React.useState<Date>();
  const [collapsedSections, setCollapsedSections] = React.useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const types = ["Official Statement", "News Article", "Press Release", "Report"];
  const platforms = ["NYT", "Reuters", "AP", "BBC", "CNN"];
  const languages = ["English", "French", "German"];
  const locations = ["Europe", "North America", "Asia", "Africa", "South America", "Oceania"];

  const tags = [
    "Politics",
    "Economy",
    "Environment",
    "Technology",
    "Health",
    "Education",
    "Security",
    "Human Rights",
    "Trade",
    "Culture",
  ];

  const FilterSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => toggleSection(title)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {collapsedSections[title] ? 
          <ChevronDown className="h-4 w-4 text-gray-500" /> : 
          <ChevronUp className="h-4 w-4 text-gray-500" />
        }
      </div>
      {!collapsedSections[title] && children}
    </div>
  );

  return (
    <div className="w-64 bg-white p-6 border-r min-h-screen space-y-6 animate-fade-in">
      <FilterSection title="Event Date Range">
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {eventStartDate ? eventStartDate.toLocaleDateString() : "Start Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={eventStartDate}
                onSelect={setEventStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {eventEndDate ? eventEndDate.toLocaleDateString() : "End Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={eventEndDate}
                onSelect={setEventEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </FilterSection>

      <FilterSection title="Publication Date Range">
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {publishStartDate ? publishStartDate.toLocaleDateString() : "Start Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={publishStartDate}
                onSelect={setPublishStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {publishEndDate ? publishEndDate.toLocaleDateString() : "End Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <CalendarComponent
                mode="single"
                selected={publishEndDate}
                onSelect={setPublishEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </FilterSection>

      {[
        { title: "Type", items: types },
        { title: "Platform", items: platforms },
        { title: "Location", items: locations },
        { title: "Language", items: languages },
      ].map((filter) => (
        <FilterSection key={filter.title} title={filter.title}>
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
        </FilterSection>
      ))}

      <FilterSection title="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-white transition-colors bg-secondary"
            >
              {tag}
            </Button>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};
