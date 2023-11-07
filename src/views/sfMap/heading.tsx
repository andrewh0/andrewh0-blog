import Link from "next/link";
import { Record } from "types/sfMap";
import { Popup } from "views/sfMap";

const Heading = ({ selectedPlace }: { selectedPlace: Record | null }) => (
  <div className="pointer-events-none absolute top-0 z-10 flex h-full w-full flex-col justify-between p-3 sm:justify-start sm:p-8">
    <div>
      <h1 className="pointer-events-auto mb-1 block text-xl font-semibold leading-5 tracking-normal text-gray-12 sm:text-2xl sm:tracking-tight">
        San Francisco Food and Fun
      </h1>
      <p className="pointer-events-auto mb-4 text-base font-semibold leading-5 tracking-normal text-gray-11 sm:mb-8 sm:text-xl sm:tracking-tight">
        made by{" "}
        <Link href="/" className="text-gray-11 hover:underline">
          Andrew
        </Link>
      </p>
    </div>
    {selectedPlace && <Popup selectedPlace={selectedPlace} />}
  </div>
);

export default Heading;
