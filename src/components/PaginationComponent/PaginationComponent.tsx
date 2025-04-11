import { ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";

import "./PaginationComponent.css";

interface PaginationProps {
  page: number;
  size: number;
  pagesCount: number;
  onChange: (page: number, size: number) => void;
}

export const PaginationComponent = ({
  page,
  size,
  pagesCount,
  onChange,
}: PaginationProps) => {
  const handlePrev = () => {
    if (page > 1) {
      onChange(page - 1, size);
    }
  };

  const handleNext = () => {
    if (page < pagesCount) {
      onChange(page + 1, size);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    if (1 <= newPage && newPage <= pagesCount) {
      onChange(newPage, size);
    }
  };

  return (
    <Box className="paginationBox">
      <Button
        className="prevButton"
        variant="outlined"
        onClick={handlePrev}
        disabled={page <= 1}
      >
        ◀
      </Button>
      <TextField
        className="inputField"
        type="number"
        value={page}
        onChange={handleChange}
      />
      <Button
        className="nextButton"
        variant="outlined"
        onClick={handleNext}
        disabled={page >= pagesCount}
      >
        ▶
      </Button>
    </Box>
  );
};
