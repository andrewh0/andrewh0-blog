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
      initial={{ opacity: 0 }}
      animate={{ width, opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      // TODO: Why does `min-w-5` not work here?
      className="absolute -right-2.5 top-0.5 z-0 flex h-4 min-w-[20px] -translate-y-1/2 select-none items-center justify-center overflow-hidden rounded-full bg-red-9 py-2.5 shadow drop-shadow"
    >
      <span
        ref={ref}
        className="text-white px-1.5 text-center text-xs font-bold tabular-nums"
      >
        {formatCount(count)}
      </span>
    </motion.div>
  );
};

export default Badge;
