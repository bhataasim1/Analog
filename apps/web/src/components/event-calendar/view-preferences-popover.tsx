"use client";

import { RiFilter3Line } from "@remixicon/react";
import { useAtom } from "jotai";

import { viewPreferencesAtom, type ViewPreferences } from "@/atoms";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ViewPreferencesPopover() {
  const [preferences, setPreferences] = useAtom(viewPreferencesAtom);

  const handlePreferenceChange = (
    key: keyof ViewPreferences,
    value: boolean,
  ) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
  };

  return (
    <Popover>
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              aria-labelledby="view-preferences-button"
              aria-description="View current preferences"
              aria-label="View preferences"
              className="gap-1.5 max-[479px]:h-8"
            >
              <RiFilter3Line size={16} aria-hidden="true" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-[200px]" sideOffset={4}>
          View preferences
        </TooltipContent>
      </Tooltip>
      <PopoverContent align="end" className="w-64">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">View Preferences</h4>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-weekends" className="text-sm font-normal">
                Weekends
              </Label>
              <Switch
                id="show-weekends"
                checked={preferences.showWeekends}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("showWeekends", checked)
                }
                className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-past-events" className="text-sm font-normal">
                Past events
              </Label>
              <Switch
                id="show-past-events"
                checked={preferences.showPastEvents}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("showPastEvents", checked)
                }
                className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label
                htmlFor="show-declined-events"
                className="text-sm font-normal text-muted-foreground"
              >
                Declined events
              </Label>
              <Switch
                id="show-declined-events"
                checked={preferences.showDeclinedEvents}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("showDeclinedEvents", checked)
                }
                disabled
                className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label
                htmlFor="show-week-numbers"
                className="text-sm font-normal text-muted-foreground"
              >
                Week numbers
              </Label>
              <Switch
                id="show-week-numbers"
                checked={preferences.showWeekNumbers}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("showWeekNumbers", checked)
                }
                disabled
                className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
