export type PlaceType =
  | "activity"
  | "bakery"
  | "bar"
  | "cafe"
  | "dessert"
  | "other"
  | "restaurant";

export type Record = {
  id: string;
  createdAt: string;
  fields: {
    name: string;
    starred: boolean;
    type: PlaceType;
    lat: number;
    lon: number;
    price?: string;
  };
};
