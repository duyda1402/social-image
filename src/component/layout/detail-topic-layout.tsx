import { Box } from "@mantine/core";
import HeaderComponent from "../header";
import { Outlet } from "react-router-dom";

const DetailTopicLayout = () => {
  return (
    <>
      <HeaderComponent isSearch />
      <Box mt={100}>
        <Outlet />
      </Box>
    </>
  );
};

export default DetailTopicLayout;
