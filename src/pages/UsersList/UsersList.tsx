import { useTranslation } from "react-i18next";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { PaginationComponent } from "../../components";
import { useAppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { getUsersThunk } from "../../features";
import { UserShort } from "../../types";

import "./UsersList.css";

const usersListFields = ["email", "fullName"];

export const UsersList = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserShort[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(0);

  const handleGetUsers = async (page: number, limit: number) => {
    setIsLoading(true);
    const result = await dispatch(getUsersThunk({ page, limit }));

    if (getUsersThunk.fulfilled.match(result)) {
      const { users, pages_count } = result.payload;
      setUsers(users);
      setPagesCount(pages_count);
      setIsLoading(false);
    }

    if (getUsersThunk.rejected.match(result)) {
      setUsers([]);
      setIsLoading(false);
      toast.error(result.payload);
    }
  };

  const handlePaginationChange = (newPage: number, newLimit: number) => {
    setSearchParams({ page: String(newPage), limit: String(newLimit) });
  };

  useEffect(() => {
    handleGetUsers(page, limit);
  }, [page, limit]);

  return (
    <Box className="usersPageContainer">
      <Box className="usersContainer">
        <Typography variant="h3">{t("user.list")}</Typography>

        {isLoading && (
          <Box className="userStatusContainer">
            <CircularProgress />
          </Box>
        )}

        <TableContainer className="usersTableContainer">
          <Table>
            <TableHead className="usersTableHead">
              <TableRow>
                {usersListFields.map((field) => (
                  <TableCell
                    key={field}
                    align="center"
                    className="usersTableHeadCell"
                  >
                    {t(field)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="usersTableBody">
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="usersTableBodyCell">
                    {user.email}
                  </TableCell>
                  <TableCell className="usersTableBodyCell">
                    {user.full_name ?? t("nA")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className="paginationContainer">
        <PaginationComponent
          page={page}
          limit={limit}
          pagesCount={pagesCount}
          onChange={handlePaginationChange}
        />
      </Box>
    </Box>
  );
};
