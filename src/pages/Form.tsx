import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import TextField from "../components/TextField";

type Inputs = {
  firstName: string;
  lastName?: string;
};

const FormPage: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<Inputs>();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-page">
      <Helmet>
        <title>Form Page</title>
      </Helmet>
      <main className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            label="กรอกชื่อ"
            name="firstName"
            register={() => register({ required: true })}
            error={errors}
          />
          <TextField
            type="text"
            label="นามสกุล"
            name="lastName"
            register={() => register()}
            error={errors}
          />

          <input type="submit" value={t("submit")} />
        </form>
      </main>
    </div>
  );
};

export default FormPage;
