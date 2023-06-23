import axios, { AxiosResponse } from "axios";
// Types
import { EventData, ListItem } from "../types";

export const API_URL = "https://events.staging.xceed.me/v1";
export const PATHS = ["tini"];
export const FILE_LANG_NAME = "common";

export const getData = async (url: string) => {
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle the error appropriately, such as logging or displaying a friendly error message
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

export const convertEvents = (events: EventData[]): ListItem[] => {
  return events.map((event) => {
    const { id, name, venue, startingTime, endingTime } = event;

    return {
      id,
      title: name,
      location: venue.city.name,
      coverUrl: venue.coverUrl,
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
