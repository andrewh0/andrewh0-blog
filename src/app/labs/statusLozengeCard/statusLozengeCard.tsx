"use client";

import { useState } from "react";
import Notes from "./notes";
import Controls from "./controls";
import StatusLozenge from "./statusLozenge";

const LOADING_DURATION_MS = 1500;

const StatusLozengeCard = () => {
  const [status, setStatus] = useState<StatusLozengeState>("ready");
  const [successTimeout, setSuccessTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout | null>(null);

  const clearTimeouts = () => {
    if (successTimeout) {
      clearTimeout(successTimeout);
    }
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }
  };

  const handleSuccess = () => {
    clearTimeouts();
    setStatus("loading");
    setSuccessTimeout(
      setTimeout(() => {
        setStatus("success");
      }, LOADING_DURATION_MS),
    );
  };

  const handleError = () => {
    clearTimeouts();
    setStatus("loading");
    setErrorTimeout(
      setTimeout(() => {
        setStatus("error");
      }, LOADING_DURATION_MS),
    );
  };

  const handleReset = () => {
    clearTimeouts();
    setStatus("ready");
  };

  return (
    <div className="space-y-10 rounded-xl bg-gray-2 p-8 text-gray-12">
      <h2 className="text-lg font-bold">Status Lozenge</h2>
      <div className="flex flex-col items-center justify-center p-10">
        <StatusLozenge state={status} />
      </div>
      <Controls
        status={status}
        onReset={handleReset}
        onSuccess={handleSuccess}
        onError={handleError}
      />
      <Notes />
    </div>
  );
};

export default StatusLozengeCard;
