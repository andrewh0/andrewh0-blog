import { HTMLMotionProps, motion } from "framer-motion";

const IconContainer = (props: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{
      scale: 0,
      opacity: 0,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    exit={{
      scale: 0,
      opacity: 0,
    }}
    className="absolute right-0 top-0 h-5 w-5"
    {...props}
  />
);

export default IconContainer;
