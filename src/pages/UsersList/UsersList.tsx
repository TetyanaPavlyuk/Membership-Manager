import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUsers, setLoading, setError } from "../../features";

import "./UsersList.css";

export const UsersList = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    list: users,
    loading,
    error,
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(setLoading(true));
        const users_data = [
          // Temporary: just for testing
          {
            id: 1,
            email: "test1@mail.com",
            hashed_password: "skfjlflkj",
            is_active: true,
            is_superuser: false,
            full_name: "Some Name",
          },
          {
            id: 2,
            email: "test2@mail.com",
            hashed_password: "skfjlflkj",
            is_active: true,
            is_superuser: false,
            full_name: null,
          },
        ];
        dispatch(setUsers(users_data));
        dispatch(setLoading(false));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError("Something went wrong"));
        }
      }
    };
    fetchUsers();
  }, [dispatch]);

  if (loading) {
    return (
      <Box className="statusContainer">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box className="statusContainer">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  const usersListFields = ["id", "email", "full_name"];

  return (
    <Box>
      <Typography variant="h3">{t("users_list")}</Typography>
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
              <TableRow key={user.id}>
                <TableCell align="center" className="usersTableBodyCell">
                  {user.id}
                </TableCell>
                <TableCell className="usersTableBodyCell">
                  {user.email}
                </TableCell>
                <TableCell className="usersTableBodyCell">
                  {user.full_name ?? t("n_a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
