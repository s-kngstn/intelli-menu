import { Box, Text, Flex, Heading } from "@chakra-ui/layout";
import { QRCodeCanvas } from "qrcode.react";
import { useUser } from "../../lib/hooks";
import SidebarWithHeader from "../../src/components/nav-sidebar/sidebarWithNav";

const QrPage = () => {
  const { user } = useUser();
  return (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex
          py={2}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Heading color="blackAlpha.900" paddingBottom="1rem">
            Here is your QR Code for Menu Name Here via Props
          </Heading>
          <Text>
            Please right-click to save your QR image, and then add it to your
            physical menu for guests to scan
          </Text>
          <Box
            marginTop="5rem"
            border="4px"
            borderRadius="2xl"
            borderColor="#065666"
            borderStyle="solid"
            padding={4}
          >
            <QRCodeCanvas
              size={300}
              value="https://www.samkingston.xyz"
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={false}
              imageSettings={{
                src: "https://i.ibb.co/FXncfpp/inteli-logo-qr.png",
                x: undefined,
                y: undefined,
                height: 20,
                width: 100,
                excavate: true,
              }}
            />
          </Box>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

/// GET SERVER SIDE PROPS FOR THE MENU SO YOU CAN LINK THE ID TO THE PAGE
// GET CONTEXT AND USE THE ID TO CHANGE TO GUEST MENU PAGE VIA QR CODE

export default QrPage;
