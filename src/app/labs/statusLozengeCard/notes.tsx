const Notes = () => {
  return (
    <div>
      <h3 className="text-md mb-2 font-bold">Details</h3>
      <ul className="ml-4 list-disc space-y-1">
        <li>
          Icons are subtly animated in and out. Since their width is fixed,
          their transitions overlap.
        </li>
        <li>
          Text is justified left to give the appearance of sliding in with the
          icon.
        </li>
        <li>
          Framer Motion does not support transitions between P3 colors, so RGB
          values are used.
        </li>
      </ul>
    </div>
  );
};

export default Notes;
