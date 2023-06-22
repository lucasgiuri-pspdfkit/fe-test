import React from "react";
// Components
import Text, { availableTextTypes } from "../text/text";
import Image from "../image/image";
// Types
import type { ListItem } from "../../types";

export const availableListTypes = {
  row: "row",
  column: "column",
} as const;

type AvailableListTypes = typeof availableListTypes;

type ListProps = {
  type: keyof AvailableListTypes;
  items: ListItem[];
};

/**
 * List component.
 * Renders a list of items with their information.
 * @param {ListProps} props - The props for the List component.
 */
const List = ({ type, items }: ListProps) => {
  return (
    <ul
      className={`w-full h-80 lg:h-full flex ${
        type === availableListTypes.row
          ? "flex-row overflow-x-auto"
          : "flex-col overflow-y-auto lg:overflow-y-hidden"
      }`}
    >
      {items.map(({ id, img, title, location }: ListItem) => {
        const { src, alt, width, height } = img;
        return (
          <li
            key={id}
            className={`${
              type === availableListTypes.row ? "w-[468px] shrink-0" : "w-full"
            } py-3`}
          >
            <div className="flex items-center">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                roundedSize="2xl"
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
  );
};

export default List;
