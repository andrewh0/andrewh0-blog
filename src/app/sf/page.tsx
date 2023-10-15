import { Metadata } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { Record } from "types/sfMap";
import SanFranciscoMap from "./map";

const AIRTABLE_SF_BASE = process.env.AIRTABLE_SF_BASE;
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_SF_BASE}/places?view=app`;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

async function listPlaces(offset?: string) {
  const res = await fetch(
    offset ? `${AIRTABLE_API_URL}&offset=${offset}` : AIRTABLE_API_URL,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    },
  );
  const { records, offset: nextOffset } = await res.json();
  return { records, nextOffset };
}

const getPlaces = async () => {
  let locations: Record[] = [];
  let offset;

  do {
    const { records, nextOffset }: { records: Record[]; nextOffset?: string } =
      await listPlaces(offset);
    locations = locations.concat(records);
    offset = nextOffset;
  } while (offset);

  return locations;
};

const SfMapPage = async () => {
  const data = await getPlaces();

  return (
    <div className="h-full">
      <SanFranciscoMap data={data} />
    </div>
  );
};

export const metadata: Metadata = {
  title: "San Francisco · Andrew Ho",
};

export default SfMapPage;
