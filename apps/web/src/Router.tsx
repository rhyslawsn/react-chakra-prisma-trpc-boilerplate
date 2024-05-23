import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

interface Props {
  children?: ReactElement;
}

const AuthGuard = ({ children }: Props) => {
  return children;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
