import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguagesEnum } from "../../i18n/LanguagesEnum.ts";

import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <FormControl className="languageForm" variant="standard">
      <InputLabel id="language-select-label">{t("language")}</InputLabel>
      <Select
        value={i18n.language}
        onChange={(ev) => i18n.changeLanguage(ev.target.value as LanguagesEnum)}
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
