
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
  const [eventStartDate, setEventStartDate] = React.useState<Date>();
  const [eventEndDate, setEventEndDate] = React.useState<Date>();
  const [publishStartDate, setPublishStartDate] = React.useState<Date>();
  const [publishEndDate, setPublishEndDate] = React.useState<Date>();

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

  return (
    <div className="w-64 bg-white p-6 border-r min-h-screen space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Event Date Range</h3>
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
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Publication Date Range</h3>
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
      </div>

      {[
        { title: "Type", items: types },
        { title: "Platform", items: platforms },
        { title: "Location", items: locations },
        { title: "Language", items: languages },
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
