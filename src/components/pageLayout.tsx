import { Box } from "@chakra-ui/layout";
import { FC, ReactNode } from "react";
// import Sidebar from "./sidebar";
// import Navbar from "./navigation";

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" background="whiteAlpha.200">
      {children}
    </Box>
  );
};

export default PageLayout;
