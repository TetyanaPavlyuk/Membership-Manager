import { ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import "./PaginationComponent.css";

interface PaginationProps {
  page: number;
  limit: number;
  pagesCount: number;
  onChange: (page: number, limit: number) => void;
}

export const PaginationComponent = ({
  page,
  limit,
  pagesCount,
  onChange,
}: PaginationProps) => {
  const { t } = useTranslation();

  const handlePrev = () => {
    if (page > 1) {
      onChange(page - 1, limit);
    }
  };

  const handleNext = () => {
    if (page < pagesCount) {
      onChange(page + 1, limit);
    }
  };

  const handleChangePage = (e: ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    if (1 <= newPage && newPage <= pagesCount) {
      onChange(newPage, limit);
    }
  };

  const handleChangeLimit = (e: ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(e.target.value);
    if (1 <= newLimit) {
      onChange(page, newLimit);
    }
  };

  return (
    <Box className="paginationBox">
      <Box className="pagesNumberBox">
        <Button
          className="prevButton"
          variant="outlined"
          onClick={handlePrev}
          disabled={page <= 1}
        >
          ◀
        </Button>

        <Typography>{t("page")}: </Typography>
        <TextField
          className="inputField"
          type="number"
          value={page}
          onChange={handleChangePage}
        />
        <Typography>
          {t("from")} {pagesCount}
        </Typography>

        <Button
          className="nextButton"
          variant="outlined"
          onClick={handleNext}
          disabled={page >= pagesCount}
        >
          ▶
        </Button>
      </Box>
      <Box className="pagesCountBox">
        <Typography>{t("countPerPage")}: </Typography>
        <TextField
          className="inputField"
          type="number"
          value={limit}
          onChange={handleChangeLimit}
        />
      </Box>
    </Box>
  );
};
