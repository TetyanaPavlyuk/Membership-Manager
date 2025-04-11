import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { useAppDispatch } from "../../store";
import { getMeThunk, loginThunk } from "../../features";
import { RoutesEnum } from "../../enum";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginThunk({ email, password }));
    if (loginThunk.fulfilled.match(result)) {
      await dispatch(getMeThunk());
      navigate(RoutesEnum.ME);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
