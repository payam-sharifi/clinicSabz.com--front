import { useEffect } from "react";
import { memo } from "react";
const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/admin";
  });

  return <></>;
};
export default memo(Logout);
