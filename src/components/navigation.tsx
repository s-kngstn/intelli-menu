import { Box, Link } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";

type AppProps = {
  pageTitle: string;
};

const NavBar = ({ pageTitle }: AppProps) => {
  return (
    <Box width="100%" padding="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* * Page info */}
        <Box>{pageTitle}</Box>
        {/* Avatar */}
        <Link href="/user">
          <Avatar
            name="Sam Kingston"
            src="https://samkingston.xyz/static/media/logo-img.56026ee6.jpg"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
