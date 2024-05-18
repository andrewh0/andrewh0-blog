const Notes = () => {
  return (
    <div>
      <h3 className="text-md mb-2 font-bold">Details</h3>
      <ul className="ml-4 list-disc space-y-1">
        <li>Notification badges are pills, not circles!</li>
        <li>
          Notification badges are not vertically centered on the top border of
          the parent element.
        </li>
        <li>
          The right edge of the badge extends past the right edge of the parent
          element by a fixed amount.
        </li>
        <li>There&apos;s a drop shadow on the badge.</li>
        <li>The use of tabular numbers prevents unnecessary layout shift.</li>
      </ul>
    </div>
  );
};

export default Notes;
