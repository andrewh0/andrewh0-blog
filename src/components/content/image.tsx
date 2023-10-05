import Image, { ImageProps } from "next/legacy/image";

const StyledImage = ({ alt, ...props }: ImageProps) => (
  <div className="my-16 flex">
    <Image className="rounded-2xl" alt={alt} {...props} />
  </div>
);

export default StyledImage;
