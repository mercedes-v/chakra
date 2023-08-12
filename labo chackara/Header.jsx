import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import Image from "Imagen>/Mis imágenes/ciclismo.jpg"


function Header() {
  return (
    <Box
      h="39vh"
      bg="gray"
      bgImage={`url(${Image})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgb(0 0 0 / 50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading variant="banner">DOMINA EL TERRENO </Heading>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="38px"
          mt="28px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg">
            VER DETALLES 
          </Button>
          <Button variant="outline" size="lg">
            VER VIDEO
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
export default Header;
