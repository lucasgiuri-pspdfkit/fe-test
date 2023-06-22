import { getData, convertEvents } from "./commons";

const mockResponse = {
  data: [
    {
      id: "a92e77ac-d9fe-11ed-b9d3-0242ac11000e",
      name: "Sumdayz Festival 2023 - DAY 2",
      slug: "sumdayz-festival-2023-day-2-2",
      startingTime: 1695484800,
      endingTime: 1695517200,
      coverUrl:
        "https://images.xceed.me/events/banners/sumdayz-festival-2023-day-2-2-roma-xceed-f52f.jpg",
      venue: {
        id: "7ce99aaa-919c-11e9-846c-06b12363b88e",
        name: "Ippodromo Delle Capannelle",
        logoUrl:
          "https://images.xceed.me/clubs/logos/ippodromo-delle-capannelle-club-roma-xceed-logo-71d2.png",
        coverUrl:
          "https://images.xceed.me/clubs/covers/ippodromo-delle-capannelle-club-roma-xceed.png",
        coordinates: [Object],
        city: {
          name: "Rome",
        },
      },
    },
    {
      id: "2",
      name: "test Festival 2023 - DAY 2",
      slug: "test dayz-festival-2023-day-2-2",
      startingTime: 1695484800,
      endingTime: 1695517200,
      coverUrl:
        "https://images.xceed.me/events/banners/sumdayz-festival-2023-day-2-2-roma-xceed-f52f.jpg",
      venue: {
        id: "7ce99aaa-919c-11e9-846c-06b12363b88e",
        name: "Ippodromo Delle Capannelle",
        logoUrl:
          "https://images.xceed.me/clubs/logos/ippodromo-delle-capannelle-club-roma-xceed-logo-71d2.png",
        coverUrl:
          "https://images.xceed.me/clubs/covers/ippodromo-delle-capannelle-club-roma-xceed.png",
        coordinates: [Object],
        city: {
          name: "Rome",
        },
      },
    },
  ],
};

const convertedEvents = [
  {
    id: "a92e77ac-d9fe-11ed-b9d3-0242ac11000e",
    title: "Sumdayz Festival 2023 - DAY 2",
    location: "Rome",
    date: { start: 1695484800, end: 1695517200 },
    img: {
      src: "https://images.xceed.me/clubs/logos/ippodromo-delle-capannelle-club-roma-xceed-logo-71d2.png",
      alt: "Sumdayz Festival 2023 - DAY 2",
    },
  },
  {
    id: "a92e77ac-d9fe-11ed-b9d3-0242ac11000e",
    title: "Sumdayz Festival 2023 - DAY 2",
    location: "Rome",
    date: { start: 1695484800, end: 1695517200 },
    img: {
      src: "https://images.xceed.me/clubs/logos/ippodromo-delle-capannelle-club-roma-xceed-logo-71d2.png",
      alt: "Sumdayz Festival 2023 - DAY 2",
    },
  },
];

describe("getData", () => {
  // @ts-ignore
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  beforeEach(() => {
    // @ts-ignore
    fetch.mockClear();
  });

  it("should return data", async () => {
    const data = await getData("mockFetch");
    expect(data).toEqual(mockResponse);
  });
});

describe("convertEvents", () => {
  it("should return converted events", () => {
    const convertedEvents = convertEvents(mockResponse.data);
    expect(convertedEvents).toEqual(convertedEvents);
  });
});
