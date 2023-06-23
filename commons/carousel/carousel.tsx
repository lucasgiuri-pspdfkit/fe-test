import React, { useState } from "react";
// Components
import Image, { availableRoundedSizes } from "../../components/image/image";
import Text, { availableTextTypes } from "../../components/text/text";
// Types
import type { ListItem } from "../../types";
import Button from "../../components/button/button";

type CarouselProps = {
  items: ListItem[];
  onClick: (id: string) => void;
};

/**
 * Carousel component.
 * @param {CarouselProps} props - The props for the Carousel component.
 */

const Carousel = ({ items, onClick }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 2);
  };

  return (
    <div className="relative h-full flex items-center">
      <ul className="flex w-full">
        {items
          .slice(currentIndex, currentIndex + 2)
          .map(({ id, img, title, location }) => {
            const { src, alt, width, height } = img;

            return (
              <li
                key={id}
                onClick={() => onClick(id)}
                className="w-full cursor-pointer pt-0 pb-0 shadow-md-bottom rounded-2xl"
              >
                <div className="flex items-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    roundedSize={availableRoundedSizes["2xl"]}
                  />
                  <div className="pl-[21px]">
                    <Text isBold type={availableTextTypes.h4} text={title} />
                    <Text type={availableTextTypes.p} text={location} />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      {currentIndex + 2 < items.length && (
        <Button onClick={handleClickNext}>
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow right"
            width={20}
            height={20}
          />
        </Button>
      )}
    </div>
  );
};

export default Carousel;
