import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import StyledNextLink from "@/common/components/styled-next-link";

const NotFound = () => {
  return (
    <>
      <Card>
        <CardHeader title="This page does not exist" />

        <CardContent>
          Go back to the <StyledNextLink href="/">home page</StyledNextLink>.
        </CardContent>
      </Card>
    </>
  );
};

export default NotFound;
