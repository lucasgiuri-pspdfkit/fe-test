import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Components
import type { GetStaticProps } from "next";
// Helpers
import { FILE_LANG_NAME } from "../commons/commons";

const Custom404 = () => {
  const { t } = useTranslation(FILE_LANG_NAME);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">{t("page-not-found")}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [FILE_LANG_NAME])),
    },
  };
};

export default Custom404;
