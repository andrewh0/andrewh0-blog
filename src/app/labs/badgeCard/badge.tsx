import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const MAX_COUNT = 9999;

const formatCount = (count: number) => {
  const formatter = new Intl.NumberFormat();
  if (count > MAX_COUNT) {
    return `${formatter.format(MAX_COUNT)}+`;
  }
  return formatter.format(count);
};

const Badge = ({ count }: { count: number }) => {
  let [ref, { width }] = useMeasure();
  return (
    <motion.div
      layout="size"
      initial={{ minWidth: width, opacity: 0 }}
      animate={{ minWidth: 20, width, opacity: 1 }}
      transition={{
        width: {
          type: "spring",
          damping: 18,
          stiffness: 200,
        },
        opacity: { duration: 0.15 },
      }}
      className="absolute -right-2.5 top-0.5 z-0 flex h-4 -translate-y-1/2 select-none items-center justify-start overflow-hidden rounded-full bg-red-9 py-2.5 shadow-sm drop-shadow-sm"
    >
      <span
        ref={ref}
        className="px-1.5 text-center text-xs font-bold tabular-nums text-white"
      >
        {formatCount(count)}
      </span>
    </motion.div>
  );
};

export default Badge;
