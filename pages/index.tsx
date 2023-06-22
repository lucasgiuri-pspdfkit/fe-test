import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Store
import { StoreUsersContext } from "../store/providers";
import { ADD_USER } from "../store/actions";
// Components
import type { GetStaticProps } from "next";
// Components
import Text, { availableTextTypes } from "../components/text/text";
import List, { availableListTypes } from "../components/list/list";
import Image, { availableRoundedSizes } from "../components/image/image";
import Card from "../components/card/card";
import Button, { availableVariants } from "../components/button/button";
// Commons
import {
  convertEvents,
  getData,
  FILE_LANG_NAME,
  API_URL,
} from "../commons/commons";
// Types
import type { UserData, ListItem } from "../types";

type PageProps = {
  data: UserData;
  events: ListItem[];
  pastEvents: ListItem[];
};

const Home = ({ data, events, pastEvents }: PageProps) => {
  const router = useRouter();
  const { t } = useTranslation(FILE_LANG_NAME);
  const { state, dispatch } = useContext(StoreUsersContext);
  const [isFollowed, setIsFollowed] = useState(false);

  const { id, name, description, coverUrl, recordLabel, musicGenres } = state;

  useEffect(() => {
    if (!id) {
      dispatch({ type: ADD_USER, payload: data });
    }
  }, [data, id, dispatch]);

  const handleEdit = () => {
    router.push("/edit/asd");
  };

  return (
    <>
      <div
        className="absolute top-0 bg-cover bg-center left-0 bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: `url("${coverUrl}?w=28&blur=auto&fm=auto&q=auto")`,
        }}
      />
      <div className="max-w-[1272px] flex flex-col lg:flex-row items-center gap-x-[61px] mt-10 lg:mt-[120px] mb-0 mx-auto relative z-20">
        <div className="flex lg:shrink-0">
          <Image
            src={coverUrl}
            alt={name}
            width={400}
            height={400}
            roundedSize={availableRoundedSizes["3xl"]}
          />
        </div>
        <div className="flex flex-col w-full px-10 lg:px-0">
          <div className="h-12" />
          <Card name={name} musicGenres={musicGenres} />
          <div className="fixed w-full left-0 bottom-0 bg-gray-500 pt-4 pb-4 flex justify-center items-center gap-x-10 lg:relative lg:justify-start lg:w-auto lg:pb-0 lg:pt-10 lg:gap-x-6 lg:bg-transparent">
            <Button
              onClick={() => setIsFollowed((prevState) => !prevState)}
              variant={availableVariants.tertiary}
              isSelected={isFollowed}
              text={t("follow")}
            />
            <Button onClick={handleEdit} variant={availableVariants.tertiary}>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/icons/edit.svg"
                  alt={t("edit")}
                  width={16}
                  height={16}
                />
                <Text
                  text={t("edit")}
                  type={availableTextTypes.p}
                  isWhite
                  isBold
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full relative bg-white rounded-2xl">
        <div className="max-w-[1172px] lg:-mt-[54px] mb-0 mx-auto pt-[107px] pb-[66ox] px-10">
          <div className="pb-9">
            <Text
              text={t("upcoming-gigs")}
              type={availableTextTypes.h3}
              isBold
            />
          </div>
          <List type={availableListTypes.column} items={events} />
          <div className="hidden lg:block mb-9">
            <Text
              text={t("see-more-upcoming-events")}
              type={availableTextTypes.span}
            />
          </div>
          <div className="py-9">
            <Text text={t("bio")} type={availableTextTypes.h3} isBold />
          </div>
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-14">
            <Text type={availableTextTypes.p} text={description} />
            <div className="flex flex-col basis-1/4 shrink-0  gap-y-5">
              <div className="flex flex-col gap-y-3.5">
                <Image
                  src="/icons/circle.svg"
                  alt={recordLabel}
                  width={16}
                  height={16}
                />
                <Text type={availableTextTypes.p} text={recordLabel} isBold />
              </div>
              <Text type={availableTextTypes.smallP} text={t("labels")} />
            </div>
          </div>
          <div className="pb-9 py-[103px]">
            <Text text={t("past-events")} type={availableTextTypes.h3} isBold />
          </div>
          <List type={availableListTypes.row} items={pastEvents} />
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps<{
  data: UserData;
  events: ListItem[];
  pastEvents: ListItem[];
}> = async ({ locale = "en" }) => {
  const user = await getData(`${API_URL}/artists/tini`);
  const events = await getData(
    `${API_URL}/events?orderBy=date&sort=ASC&offset=0&artists=tini&startTime=1686560994&limit=5`
  );
  const pastEvents = await getData(
    `${API_URL}/events?orderBy=date&sort=DESC&offset=0&artists=tini&endTime=1686560994&limit=2`
  );

  return {
    props: {
      data: user.data,
      events: convertEvents(events.data),
      pastEvents: convertEvents(pastEvents.data),
      ...(await serverSideTranslations(locale, [FILE_LANG_NAME])),
    },
  };
};

export default Home;
