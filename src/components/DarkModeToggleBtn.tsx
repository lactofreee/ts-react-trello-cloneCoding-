import { useEffect } from "react";
import { themeChange } from "theme-change";

const DarkModeToggleBtn = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return <div></div>;
};

export default DarkModeToggleBtn;
