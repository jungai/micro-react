import React from "react";
import { UseFormMethods } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface TextFieldProps {
  label?: string;
  name: string;
  defaultValue?: string;
  type: string;
  error?: Record<string, unknown>;
  register: UseFormMethods["register"];
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type,
  register,
  defaultValue,
  error,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      {label && <label htmlFor={name}>{t(name)} : </label>}
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        ref={register()}
      />
      {error?.[name] && <p>{`${t(name)} is required`}</p>}
    </div>
  );
};

export default TextField;
