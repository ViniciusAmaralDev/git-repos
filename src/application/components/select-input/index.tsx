import React from "react";
import { Container, Dropdown } from "./styles";
import { useTranslation } from "react-i18next";

type Data = { label: string; value: string };

interface SelectInputProps {
  data: Data[];
  value: Data;
  onChange: (value: Data) => void;
}

export const SelectInput = ({ data, value, onChange }: SelectInputProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Dropdown
        data={data}
        value={value}
        placeholder={t("placeholder select input")}
        searchPlaceholder={t("search select input")}
        onChange={onChange}
      />
    </Container>
  );
};
