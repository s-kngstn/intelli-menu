import {
  ListItem,
  LinkBox,
  Link,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/layout";

const MenuItem = ({ name, route, icon }: any) => {
  return (
    <ListItem paddingX="10px" fontSize="16px" key={name}>
      <LinkBox>
        <Link href={route}>
          <LinkOverlay>
            <ListIcon as={icon} color="#EF4DDF" marginRight="10px" />
            {name}
          </LinkOverlay>
        </Link>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
