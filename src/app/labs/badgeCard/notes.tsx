const Notes = () => {
  return (
    <div>
      <h3 className="text-md mb-2 font-bold">Details</h3>
      <ul className="ml-4 list-disc space-y-1">
        <li>Notification badges are pills, not circles!</li>
        <li>
          The badge is not vertically centered on the top edge of the parent
          element. It&apos;s positioned slightly below.
        </li>
        <li>
          The right edge of the badge extends past the right edge of the parent
          element by a fixed amount.
        </li>
        <li>There&apos;s a drop shadow on the badge.</li>
        <li>The use of tabular numbers prevents unnecessary layout shift.</li>
        <li>
          Numbers are left-aligned to make it look like they&apos;re being
          pushed in from the right.
        </li>
        <li>
          There&apos;s a subtle spring animation on the width of the badge.
        </li>
        <li>
          There&apos;s a subtle fade in animation when the badge appears. But
          when it&apos;s cleared, the badge is immediately removed.
        </li>
      </ul>
    </div>
  );
};

export default Notes;
