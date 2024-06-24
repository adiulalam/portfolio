import { Link } from "react-scroll";
import { ListItem, ListItemText } from "@mui/material";

type NavMenuLinkProps = {
  to: string;
  title: string;
  onClickHandler: () => void;
};

export const NavMenuLink = ({
  to,
  title,
  onClickHandler,
}: NavMenuLinkProps) => {
  return (
    <Link to={to} smooth={true} duration={1000}>
      <ListItem
        sx={{
          textAlign: "center",
        }}
        onClick={onClickHandler}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontSize: "1.3em", fontWeight: 100 }}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
            cursor: "pointer",
          }}
        />
      </ListItem>
    </Link>
  );
};
