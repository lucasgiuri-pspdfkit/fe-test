import Image from "next/image";
import React from "react";

export const availableRoundedSizes = {
  md: "md",
  full: "full",
  none: "none",
  "2xl": "2xl",
  "3xl": "3xl",
} as const;

type AvailableRoundedSizeTypes = typeof availableRoundedSizes;

type ImageComponentProps = {
  src: string;
  roundedSize?: keyof AvailableRoundedSizeTypes;
  width?: number;
  height?: number;
  alt: string;
};

/**
 * ImageComponent component.
 * @param {ImageComponentProps} props - The props for the ImageComponent component.
 */

const ImageComponent = ({
  src,
  alt,
  roundedSize = "none",
  width,
  height,
}: ImageComponentProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 80}
      height={height || 80}
      className={`rounded-${roundedSize} overflow-hidden`}
    />
  );
};

export default ImageComponent;
