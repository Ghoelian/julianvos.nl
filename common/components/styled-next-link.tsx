import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link, LinkProps, LinkTypeMap } from "@mui/material";

const StyledNextLink = (props: LinkProps & NextLinkProps) => {
  return <Link component={NextLink} {...props} />;
};

export default StyledNextLink;
