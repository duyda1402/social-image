import { Box } from "@mantine/core";
import HeaderComponent from "../header";
import { Outlet } from "react-router-dom";

const DetailCollectionLayout = () => {
  return (
    <>
      <HeaderComponent isSearch />
      <Box mt={100}>
        <Outlet />
      </Box>
    </>
  );
};

export default DetailCollectionLayout;
