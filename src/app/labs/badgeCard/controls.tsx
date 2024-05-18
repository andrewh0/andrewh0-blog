import Button from "components/button";

const Controls = ({
  onCountChange,
  count,
}: {
  onCountChange: (count: number) => void;
  count: number;
}) => {
  return (
    <div>
      <h3 className="text-md mb-3 font-bold">Controls</h3>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0">
        <div className="space-y-1 sm:space-x-1 sm:space-y-0">
          <Button
            size="sm"
            onClick={() => {
              onCountChange(Math.max(count - 1, 0));
            }}
            disabled={count === 0}
          >
            -1
          </Button>
          <Button
            size="sm"
            onClick={() => {
              onCountChange(Math.max(count - 1000, 0));
            }}
            disabled={count === 0}
          >
            -1,000
          </Button>
        </div>
        <div className="space-y-1 sm:space-x-1 sm:space-y-0">
          <Button
            size="sm"
            onClick={() => {
              onCountChange(Math.min(count + 1));
            }}
          >
            +1
          </Button>
          <Button
            size="sm"
            onClick={() => {
              onCountChange(Math.min(count + 1000));
            }}
          >
            +1,000
          </Button>
        </div>
        <Button
          size="sm"
          onClick={() => onCountChange(0)}
          disabled={count === 0}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Controls;
