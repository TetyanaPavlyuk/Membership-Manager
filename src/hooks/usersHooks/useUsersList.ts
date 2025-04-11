import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import { getUsersThunk } from "../../features";

export const useUsersList = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  const {
    users,
    prevPage,
    nextPage,
    pagesCount,
    usersCount,
    isLoading,
    errorMessage,
  } = useAppSelector((state) => state.users);

  const handleGetUsers = async (page: number, size: number) => {
    setPage(page);
    setSize(size);
    await dispatch(getUsersThunk({ page, size }));
  };

  useEffect(() => {
    handleGetUsers(page, size);
  }, [page, size]);

  return {
    page,
    setPage,
    size,
    setSize,
    users,
    prevPage,
    nextPage,
    pagesCount,
    usersCount,
    isLoading,
    errorMessage,
    handleGetUsers,
  };
};
