import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import useMeasure from "react-use-measure";
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import IconContainer from "./iconContainer";

const lozengeStyles =
  "text-sm rounded-full font-medium py-2 overflow-hidden flex justify-end items-center no-wrap";

const statusText = {
  ready: "Ready",
  loading: "Loading",
  success: "Success",
  error: "Error",
};

// Framer Motion doesn't support P3 colors, so we hardcode hex values here.
const statusStyles = {
  ready: {
    // Radix Blue 3
    backgroundColor: "#E6F4FE",
    // Radix Blue 11
    color: "#0D74CE",
  },
  loading: {
    // Radix Amber 3
    backgroundColor: "#FFF7C2",
    // Radix Amber 11
    color: "#AB6400",
  },
  success: {
    // Radix Green 3
    backgroundColor: "#E6F6EB",
    // Radix Green 11
    color: "#218358",
  },
  error: {
    // Radix Red 3
    backgroundColor: "#FEEBEC",
    // Radix Red 11
    color: "#CE2C31",
  },
};

const StatusLozenge = ({ state }: { state: StatusLozengeState }) => {
  const [ref, { width }] = useMeasure();
  return (
    <motion.div
      initial={{
        backgroundColor: statusStyles[state].backgroundColor,
        color: statusStyles[state].color,
      }}
      className={classNames(lozengeStyles)}
      animate={{
        backgroundColor: statusStyles[state].backgroundColor,
        color: statusStyles[state].color,
        width,
      }}
    >
      <div ref={ref} className="flex items-center whitespace-nowrap px-4">
        {state !== "ready" ? (
          <div className="relative mr-1 h-5 w-5">
            <AnimatePresence>
              {state === "success" ? (
                <IconContainer key="success">
                  <CheckCircleIcon className="h-5 w-5" />
                </IconContainer>
              ) : null}
              {state === "loading" ? (
                <IconContainer
                  key="loading"
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 900,
                  }}
                  transition={{
                    rotate: {
                      repeat: Infinity,
                      type: "spring",
                      damping: 90,
                      stiffness: 600,
                    },
                  }}
                >
                  <ArrowPathIcon />
                </IconContainer>
              ) : null}
              {state === "error" ? (
                <IconContainer key="error">
                  <ExclamationTriangleIcon className="-mb-0.5 h-5 w-5" />
                </IconContainer>
              ) : null}
            </AnimatePresence>
          </div>
        ) : null}
        {statusText[state]}
      </div>
    </motion.div>
  );
};
export default StatusLozenge;
