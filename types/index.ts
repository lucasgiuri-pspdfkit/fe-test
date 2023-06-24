export type ListItem = {
  id: string;
  coverUrl?: string;
  date: {
    start: number;
    end: number;
  };
  img: { src: string; alt: string; width?: number; height?: number };
  title: string;
  location: string;
};

export type Genres = {
  name: string;
};

export type TrackData = {
  name: string;
  url: string;
};

export type UserData = {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverUrl: string;
  recordLabel: string;
  website?: string;
  soundcloud?: string;
  mixcloud?: string;
  spotify?: string;
  musicGenres?: Genres[] | [];
  tracks?: TrackData[] | [];
};

export type EventData = {
  id: string;
  name: string;
  slug: string;
  startingTime: number;
  endingTime: number;
  venue: {
    id: string;
    name: string;
    slug: string;
    logoUrl: string;
    coverUrl: string;
    coordinates: [latitude: number, longitude: number];
    city: {
      id: string;
      name: string;
    };
  };
};
