import Button from "components/button";

const Controls = ({
  onReset,
  onSuccess,
  onError,
  status,
}: {
  onReset: () => void;
  onSuccess: () => void;
  onError: () => void;
  status: StatusLozengeState;
}) => {
  return (
    <div>
      <h3 className="text-md mb-3 font-bold">Controls</h3>
      <div className="flex flex-col gap-y-1 sm:flex-row sm:gap-x-1 sm:gap-y-0">
        <Button
          variant="success"
          disabled={status === "success" || status === "loading"}
          size="sm"
          onClick={onSuccess}
        >
          Success
        </Button>
        <Button
          variant="danger"
          disabled={status === "error" || status === "loading"}
          size="sm"
          onClick={onError}
        >
          Error
        </Button>
        <Button size="sm" disabled={status === "ready"} onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Controls;
