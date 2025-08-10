"use client";

import { Button } from "@mui/material";
import React from "react";

const Authorize = () => {
  const handleAuthorize = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const response = await fetch("./tidal-shuffler/api/authorize");
    const loginDetails = await response.json();

    sessionStorage.setItem(
      "oauthCodeChallenge",
      loginDetails.oauthCodeChallenge,
    );

    window.open(loginDetails.loginUrl, "_self");
  };

  return (
    <>
      <Button onClick={handleAuthorize}>Authorize with Tidal</Button>
    </>
  );
};

export default Authorize;
