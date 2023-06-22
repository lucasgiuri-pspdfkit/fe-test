import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Types
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { UserData } from "../../types";
// Store
import { StoreUsersContext } from "../../store/providers";
import { UPDATE_USER } from "../../store/actions";
// Components
import Input from "../../components/input/input";
import Text, { availableTextTypes } from "../../components/text/text";
import Textarea from "../../components/textarea/textarea";
import Button, {
  availableButtonTypes,
  availableVariants,
} from "../../components/button/button";
// Commons
import { PATHS, FILE_LANG_NAME, API_URL } from "../../commons/commons";

const Edit: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation(FILE_LANG_NAME);
  const { state, dispatch } = useContext(StoreUsersContext);

  // Deep clone in order to avoid mutation and have a temporary copy of the payload
  // this payload will be used to update the state after the user clicks on save btn
  const [payload, setPayload] = useState<UserData>(
    JSON.parse(JSON.stringify(state))
  );

  const handleChange = (id: string, newValue: string) => {
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
    dispatch({ type: UPDATE_USER, payload });
    router.push("/");
  };

  const music =
    payload && payload.musicGenres
      ? payload.musicGenres.map((genre) => genre.name).join(", ")
      : "";

  return (
    <form className="flex flex-col max-w-[1172px] lg:-mt-[54px] mb-0 mx-auto pt-[107px] pb-[66ox] px-10">
      <div className="flex flex-col gap-y-4 mb-[31px]">
        <Text type={availableTextTypes.label} text={t("biography")} />
        <Textarea
          placeholder={t("give-your-event-description-title")}
          onChange={(v) => handleChange("description", v)}
          value={payload.description}
        />
      </div>
      <div className="flex flex-col gap-y-4 mb-[31px]">
        <Text type={availableTextTypes.label} text={t("music")} />
        <Input
          placeholder={t("select-up-3-music-genres")}
          onChange={(v) => handleChange("music", v)}
          value={music}
        />
      </div>
      <div className="flex flex-col gap-y-4 mb-[31px]">
        <Text type={availableTextTypes.label} text={t("label")} />
        <Input
          placeholder={t("select-or-add-labels")}
          onChange={(v) => handleChange("label", v)}
          value={payload.recordLabel}
        />
      </div>
      <div className="flex flex-col gap-y-4 mb-[31px]">
        <Text type={availableTextTypes.label} text={t("website")} />
        <Input
          placeholder={t("insert-url-here")}
          onChange={(v) => handleChange("website", v)}
          value={payload.website}
        />
      </div>
      <div className="flex flex-col gap-y-4 mb-[187px]">
        <Text type={availableTextTypes.label} text={t("social")} />
        <div className="flex flex-col lg:flex-row items-center gap-y-[27px] gap-x-0 lg:gap-x-[27px] lg:gap-y-0">
          <Input
            label={t("spotify")}
            onChange={(v) => handleChange("spotify", v)}
            value={payload.social}
          />
          <Input
            label={t("mixcloud")}
            onChange={(v) => handleChange("mixcloud", v)}
            value={payload.social}
          />
          <Input
            label={t("soundcloud")}
            onChange={(v) => handleChange("soundcloud", v)}
            value={payload.social}
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
  );
};

export const getStaticProps: GetStaticProps<{ locale?: string }> = async ({
  locale = "en",
}) => {
  const user = await getData(`${API_URL}/artists/tini`);

  return {
    props: {
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