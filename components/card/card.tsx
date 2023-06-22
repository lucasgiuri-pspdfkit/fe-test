import React from "react";
// Components
import Text, { availableTextTypes } from "../text/text";
import Image from "../image/image";
// Types
import type { Genres } from "../../types";

type Card = {
  name: string;
  musicGenres: Genres[];
};

/**
 * Card component.
 * Renders a card element.
 * @param {Card} props - The props for the Card component.
 */

const Card = ({ name, musicGenres }: Card) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-[31px]">
          <div className="flex justify-center items-center rounded-full w-[72px] h-[72px] bg-gray-200">
            <Image src="/icons/play.svg" alt="play" width={15} height={19} />
          </div>
          <div className="flex flex-col">
            <div className="hidden lg:flex">
              <div className="pr-4">
                <Text
                  type={availableTextTypes.p}
                  text="ARTIST"
                  isBold
                  isWhite
                />
              </div>
              {musicGenres.map((genre, i) => (
                <div key={genre.name} className="flex">
                  <Text
                    type={availableTextTypes.p}
                    text={genre.name.toUpperCase()}
                    isWhite
                  />
                  {i !== musicGenres.length - 1 && (
                    <div className="px-1.5">
                      <Text type={availableTextTypes.p} text="-" isWhite />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Text type={availableTextTypes.h1} text={name} isBold isWhite />
          </div>
        </div>
        <div className="hidden h-full lg:flex flex-col gap-y-[7px] pr-[137px]">
          <Image
            src="/icons/website.svg"
            alt="website"
            width={16}
            height={16}
          />
          <Image
            src="/icons/spotify.svg"
            alt="spotify"
            width={16}
            height={16}
          />
          <Image
            src="/icons/soundcloud.svg"
            alt="soundcloud"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
