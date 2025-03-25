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
import { usersData } from "../../mocks";

import "./UsersList.css";

const usersListFields = ["id", "email", "fullName"];

export const UsersList = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(setUsers(usersData));
        dispatch(setLoading(false));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError(t("wrong")));
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

  return (
    <Box>
      <Typography variant="h3">{t("usersList")}</Typography>
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
                  {user.fullName ?? t("nA")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
