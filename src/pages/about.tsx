import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className="text-lg text-red-400 underline">About Page {t("msg")}</h1>
    </div>
  );
}
