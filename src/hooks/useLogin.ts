import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "../store";
import { loginThunk } from "../features";
import { RoutesEnum } from "../enum";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const result = await dispatch(loginThunk({ email, password }));
    if (loginThunk.fulfilled.match(result)) {
      navigate(RoutesEnum.ME);
    }
    if (loginThunk.rejected.match(result)) {
      toast.error(result.payload);
    }
  };
  return { login };
};
