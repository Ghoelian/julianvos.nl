"use client";

import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { pages } from "@/common/pages";
import Link from "next/link";
import { Page } from "@/common/types/page";
import theme from "@/common/theme";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const [breadcrumbs, setBreadcrumbs] = useState<Page[]>([pages[0]]);

  useEffect(() => {
    const page = pages.find((value) => value.path === pathname);

    if (page === undefined || page.path === "/") {
      setBreadcrumbs([pages[0]]);

      return;
    }

    setBreadcrumbs([pages[0], page]);
  }, [pathname]);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {breadcrumbs.map((breadcrumb, idx) => (
          <Fragment key={`breadcrumb-${idx}`}>
            {idx < breadcrumbs.length - 1 ? (
              <>
                <Typography
                  href={breadcrumb.path}
                  component={Link}
                  sx={{
                    color: theme.palette.secondary.main,
                    "&:hover": {
                      color: theme.palette.secondary.light,
                    },
                  }}
                >
                  {breadcrumb.breadcrumb ?? breadcrumb.path}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  key={`breadcrumb-${idx}`}
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  {breadcrumb.breadcrumb ?? breadcrumb.path}
                </Typography>
              </>
            )}
          </Fragment>
        ))}

        <Typography sx={{ color: theme.palette.secondary.main, pl: 1 }}>
          $
        </Typography>
      </Box>
    </>
  );
};

export default Breadcrumbs;
