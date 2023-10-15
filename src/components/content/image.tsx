import React from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";

type ContentImageProps = {
  caption?: React.ReactNode;
} & ImageProps;

const ContentImage = ({
  alt,
  className,
  caption,
  ...props
}: ContentImageProps) => (
  <div className="my-16">
    <Image
      className={classNames("rounded-2xl", caption ? "mb-1" : "", className)}
      alt={alt}
      {...props}
    />
    {caption}
  </div>
);

export default ContentImage;
