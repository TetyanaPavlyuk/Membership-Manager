import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { LanguagesEnum } from "../../enum";

import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage as LanguagesEnum);
    }
  }, [i18n]);

  const handleLanguageChange = (ev: SelectChangeEvent) => {
    const selectedLanguage = ev.target.value as LanguagesEnum;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <FormControl className="languageForm" variant="standard">
      <InputLabel id="language-select-label">{t("language")}</InputLabel>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        name="language"
        labelId="language-select-label"
      >
        {Object.values(LanguagesEnum).map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
