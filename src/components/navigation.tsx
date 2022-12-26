import { Flex, Text } from "theme-ui";
import NavLink from "components/navLink";

const Navigation = () => (
  <Flex
    as="nav"
    sx={{
      justifyContent: "space-between",
      flexWrap: "wrap",
      color: "text",
    }}
    mt={[5, 6]}
    mb={5}
  >
    <Text
      sx={{
        fontSize: 3,
        fontWeight: 500,
        letterSpacing: "-0.03em",
      }}
    >
      Andrew Ho
    </Text>
    <Flex
      sx={{
        color: "text",
        alignItems: "center",
      }}
    >
      <NavLink href="/about" mr={3}>
        About
      </NavLink>
      {/* <NavLink
        href="/notes"
        mr={3}
      >
        Notes
      </NavLink> */}
      <NavLink href="/projects">Projects</NavLink>
    </Flex>
  </Flex>
);

export default Navigation;
