import { Box } from "@chakra-ui/layout";
import { QRCodeCanvas } from "qrcode.react";

const YourMenu = () => {
  return (
    <Box>
      <h1>Iam the menu page for guests</h1>
    </Box>
  );
};

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export default YourMenu;
