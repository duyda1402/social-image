import { Outlet } from "react-router-dom";
import HeaderComponent from "../header";
import { Box } from "@mantine/core";

const SearchLayout = () => {
  return (
    <>
      <HeaderComponent isSearch />
      <Box mt={100}>
        <Outlet />
      </Box>
    </>
  );
};

export default SearchLayout;
