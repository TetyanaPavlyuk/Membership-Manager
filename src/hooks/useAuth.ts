import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";
import { getMeThunk } from "../features";
import { useLogout } from "./";
import { RoutesEnum } from "../enum";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, authInitialize } = useAppSelector(
    (state) => state.auth,
  );
  const logout = useLogout();
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      if (token && !user && !isLoading) {
        const result = await dispatch(getMeThunk());
        if (getMeThunk.rejected.match(result)) {
          toast.error(result.payload);
          logout();
        }
      } else if (!token) {
        navigate(RoutesEnum.LOGIN);
      }
    };
    getUser();
  }, [token, user, dispatch, logout]);

  return {
    user,
    isLoading,
    authInitialize,
  };
};
