import { useTranslation } from "react-i18next";
import {
  Alert,
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

import { useUsersList } from "../../hooks";
import { PaginationComponent } from "../../components";

import "./UsersList.css";

const usersListFields = ["email", "fullName"];

export const UsersList = () => {
  const { t } = useTranslation();
  const {
    page,
    size,
    users,
    pagesCount,
    isLoading,
    errorMessage,
    handleGetUsers,
  } = useUsersList();

  return (
    <Box className="usersPageContainer">
      <Box className="usersContainer">
        <Typography variant="h3">{t("user.list")}</Typography>

        {isLoading && (
          <Box className="userStatusContainer">
            <CircularProgress />
          </Box>
        )}

        {errorMessage && (
          <Box className="usersStatusContainer">
            <Alert severity="error">{errorMessage}</Alert>
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
          size={size}
          pagesCount={pagesCount}
          onChange={handleGetUsers}
        />
      </Box>
    </Box>
  );
};
