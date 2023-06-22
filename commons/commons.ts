// Types
import { EventData, ListItem } from "../types";

export const API_URL = "https://events.staging.xceed.me/v1";
export const PATHS = ["tini"];
export const FILE_LANG_NAME = "common";

export const getData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const convertEvents = (events: EventData[]): ListItem[] => {
  return events.map((event) => {
    const { id, name, venue, startingTime, endingTime } = event;

    return {
      id,
      title: name,
      location: venue.city.name,
      date: {
        start: startingTime,
        end: endingTime,
      },
      img: {
        src: venue.logoUrl,
        alt: name,
      },
    };
  });
};
