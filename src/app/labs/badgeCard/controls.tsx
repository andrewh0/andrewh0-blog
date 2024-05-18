import Button from "components/button";
import Text from "components/content/text";

const Controls = ({
  onCountChange,
  count,
}: {
  onCountChange: (count: number) => void;
  count: number;
}) => {
  return (
    <div>
      <h3 className="text-md mb-2 font-bold">Controls</h3>
      <div className="flex space-x-5">
        <div className="space-x-1">
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
        <div className="space-x-1">
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
