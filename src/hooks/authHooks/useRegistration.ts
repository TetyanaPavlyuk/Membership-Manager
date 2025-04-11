import { FormEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import { registrationThunk } from "../../features";
import { User } from "../../types";

export const useRegistration = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const { isLoading, errorMessage } = useAppSelector((state) => state.auth);

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    const response = await dispatch(
      registrationThunk({ email, password, fullName }),
    );
    if (registrationThunk.fulfilled.match(response) && response.payload) {
      setUser(response.payload);
    }
    if (registrationThunk.rejected.match(response)) {
      setUser(null);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    user,
    setUser,
    isLoading,
    errorMessage,
    handleRegistration,
  };
};
