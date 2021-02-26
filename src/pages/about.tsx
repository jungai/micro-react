import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-lg text-red-400 underline">About Page {t("msg")}</h1>
    </div>
  );
}
