"use client";

import { redirect, useSearchParams } from "next/navigation";
import { Typography } from "@mui/material";

const TidalCallback = () => {
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (error === null) {
    const savedState = localStorage.getItem("tidalOauthState");

    if (state !== savedState || code === null) {
      // localStorage.clear();
      redirect("/tools/tidal-shuffler");
    } else {
      localStorage.setItem("tidalOauthCode", code);
    }
  }

  return (
    <>
      {error && (
        <>
          {
            <>
              <Typography variant="h3">{error}</Typography>
              <Typography variant="body1">{errorDescription}</Typography>
            </>
          }
        </>
      )}
    </>
  );
};

export default TidalCallback;
