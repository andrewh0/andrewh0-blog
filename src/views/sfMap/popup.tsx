import { AnchorHTMLAttributes } from "react";
import { Record } from "types/sfMap";

const LinkButton = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="inline-block flex-1 rounded bg-gray-6 px-4 py-2 text-center font-bold text-gray-12 hover:bg-gray-5"
    {...props}
  />
);

const Popup = ({ selectedPlace }: { selectedPlace: Record }) => (
  <div className="pointer-events-auto w-full rounded-2xl bg-gray-1 p-4 shadow sm:w-[320px]">
    <div className="mb-4">
      <p className="text-xl font-semibold leading-5 tracking-normal text-gray-12 sm:tracking-tight">
        {selectedPlace.fields.name}
        {selectedPlace.fields.starred ? (
          <>
            {" "}
            <span>⭐</span>
          </>
        ) : (
          ""
        )}
      </p>
      <p className="leading-6 text-gray-11">
        {selectedPlace.fields.type}
        {selectedPlace.fields.price ? ` · ${selectedPlace.fields.price}` : ""}
      </p>
    </div>
    <div>
      <p className="mb-1 block font-semibold leading-5 text-gray-12">
        Open in…
      </p>
      <div className="flex gap-2">
        <LinkButton
          href={`https://google.com/maps/search/?api=1&query=${selectedPlace.fields.name}, San Francisco`}
        >
          Google Maps
        </LinkButton>
        <LinkButton
          href={`https://maps.apple.com/?sll=${selectedPlace.fields.lat},${selectedPlace.fields.lon}&q=${selectedPlace.fields.name}`}
        >
          Apple Maps
        </LinkButton>
      </div>
    </div>
  </div>
);

export default Popup;
