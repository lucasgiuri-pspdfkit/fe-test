import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Types
import type { GetStaticProps, GetStaticPaths } from "next";
import type { UserData } from "../../types";
// Store
import { StoreUsersContext } from "../../store/providers";
import { ADD_USER, UPDATE_USER } from "../../store/actions";
// Components
import Input from "../../components/input/input";
import Text, { availableTextTypes } from "../../components/text/text";
import Textarea from "../../components/textarea/textarea";
import Button, {
  availableButtonTypes,
  availableVariants,
} from "../../components/button/button";
import Image, { availableRoundedSizes } from "../../components/image/image";
// Commons
import { PATHS, FILE_LANG_NAME, API_URL, getData } from "../../commons/commons";

const Edit = ({ data }: { data: UserData }) => {
  const router = useRouter();
  const { t } = useTranslation(FILE_LANG_NAME);
  const { state, dispatch } = useContext(StoreUsersContext);
  const newState = state.id ? state : data;

  // Deep clone in order to avoid mutation and have a temporary copy of the payload
  // this payload will be used to update the state after the user clicks on save btn
  const [payload, setPayload] = useState<UserData>(
    JSON.parse(JSON.stringify(newState))
  );

  const handleMusicGenresValidation = (value: string, label: string) => {
    const newValues = value.split(",").map((v) => v.trim());
    const result = newValues.map((name) => ({ name }));
    handleChange(label, result);
  };

  const handleChange = (id: string, newValue: string | { name: string }[]) => {
    setPayload((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };

  const handleDiscardChanges = () => {
    router.push("/");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD_USER, payload });
    router.push("/");
  };

  const music =
    payload && payload.musicGenres
      ? payload.musicGenres.map((genre) => genre.name).join(", ")
      : "";

  return (
    <div className="flex flex-col max-w-[1172px] mb-0 mx-auto pt-[80px] pb-[66ox] px-10">
      <div className="flex flex-col mb-[35px]">
        <div className="flex items-center gap-x-4">
          <Text type={availableTextTypes.h1} text={payload.name} />
          <Image src="/icons/edit.svg" width={26} height={26} alt="edit" />
        </div>
        <Text
          type={availableTextTypes.span}
          text={t("edit-your-artist-info-and-artwors-here")}
        />
      </div>
      <form>
        <div className="flex flex-col gap-y-4 mb-[44px]">
          <Text type={availableTextTypes.label} text={t("photos")} />
          <Image
            src={payload.coverUrl}
            roundedSize={availableRoundedSizes.md}
            width={604}
            height={340}
            alt={t("photos")}
          />
        </div>
        <div className="flex flex-col gap-y-4 mb-[31px]">
          <Text type={availableTextTypes.label} text={t("biography")} />
          <Textarea
            isRequired
            placeholder={t("give-your-event-description-title")}
            onChange={(v) => handleChange("description", v)}
            value={payload.description}
          />
        </div>
        <div className="flex flex-col gap-y-4 mb-[31px]">
          <div className="flex items-center gap-x-2">
            <Text type={availableTextTypes.label} text={t("music")} />
            <Text type={availableTextTypes.span} text={`(${t("optional")})`} />
          </div>
          <Input
            placeholder={t("select-up-3-music-genres")}
            onChange={(v) => handleMusicGenresValidation(v, "musicGenres")}
            value={music}
          />
        </div>
        <div className="flex flex-col gap-y-4 mb-[31px]">
          <div className="flex items-center gap-x-2">
            <Text type={availableTextTypes.label} text={t("label")} />
            <Text type={availableTextTypes.span} text={`(${t("optional")})`} />
          </div>
          <Input
            placeholder={t("select-or-add-labels")}
            onChange={(v) => handleChange("recordLabel", v)}
            value={payload.recordLabel}
          />
        </div>
        <div className="flex flex-col gap-y-4 mb-[31px]">
          <div className="flex items-center gap-x-2">
            <Text type={availableTextTypes.label} text={t("website")} />
            <Text type={availableTextTypes.span} text={`(${t("optional")})`} />
          </div>
          <Input
            placeholder={t("insert-url-here")}
            onChange={(v) => handleChange("website", v)}
            value={payload.website || ""}
          />
        </div>
        <div className="flex flex-col gap-y-4 mb-[187px]">
          <div className="flex items-center gap-x-2">
            <Text type={availableTextTypes.label} text={t("social")} />
            <Text type={availableTextTypes.span} text={`(${t("optional")})`} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-y-[27px] gap-x-0 lg:gap-x-[27px] lg:gap-y-0">
            <Input
              label={t("spotify")}
              onChange={(v) => handleChange("spotify", v)}
              value={payload.spotify || ""}
            />
            <Input
              label={t("mixcloud")}
              onChange={(v) => handleChange("mixcloud", v)}
              value={payload.mixcloud || ""}
            />
            <Input
              label={t("soundcloud")}
              onChange={(v) => handleChange("soundcloud", v)}
              value={payload.soundcloud || ""}
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center pb-[35px] gap-x-6">
          <Button
            type={availableButtonTypes.button}
            variant={availableVariants.secondary}
            onClick={handleDiscardChanges}
            text={t("discard")}
          />
          <Button
            type={availableButtonTypes.submit}
            variant={availableVariants.primary}
            onClick={handleSubmit}
            text={t("save")}
          />
        </div>
      </form>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ data: UserData }> = async ({
  locale = "en",
}) => {
  const user = await getData(`${API_URL}/artists/tini`);

  return {
    props: {
      data: user.data,
      ...(await serverSideTranslations(locale, [FILE_LANG_NAME])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PATHS.map((path) => ({
    params: {
      username: path,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Edit;
