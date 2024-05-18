"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Notes from "./notes";
import Controls from "./controls";
import Badge from "./badge";

const BadgeCard = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="space-y-10 rounded-xl bg-gray-2 p-8 text-gray-12">
      <h2 className="text-lg font-bold">Notification Badge</h2>
      <div className="p-10">
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="relative h-16 w-16 rounded-xl bg-blue-7">
            <AnimatePresence>
              {count > 0 && <Badge count={count} />}
            </AnimatePresence>
          </div>
          <span className="text-center text-xs font-semibold text-gray-11">
            My App
          </span>
        </div>
      </div>
      <Controls count={count} onCountChange={setCount} />
      <Notes />
    </div>
  );
};
export default BadgeCard;
