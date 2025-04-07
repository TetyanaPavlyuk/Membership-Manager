import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { useAppDispatch } from "../store";
import { setUser, clearUser } from "../features";

export const useAuthToken = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkTokenExpire = () => {
      const access_token = localStorage.getItem("access_token");

      if (!access_token) {
        dispatch(clearUser());
        return;
      }

      try {
        const decodedToken = jwtDecode(access_token);
        const expiringTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        if (expiringTime < currentTime) {
          dispatch(clearUser());
        } else {
          dispatch(setUser(decodedToken));
        }
      } catch (error) {
        dispatch(clearUser());
      }
    };
    checkTokenExpire();
  }, [dispatch]);
};
