import { useAppDispatch, useAppSelector } from "../../store";
import { getMeThunk } from "../../features";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, errorMessage } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token && !user) {
      dispatch(getMeThunk());
    }
  }, [dispatch, user]);

  return {
    user,
    isLoading,
    errorMessage,
  };
};
