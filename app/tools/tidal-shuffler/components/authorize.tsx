"use client";

import { Button } from "@mui/material";
import React from "react";
import { LoginDetails } from "@/common/types/api/responses/login-details";

const Authorize = () => {
  const handleAuthorize = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const response = await fetch("./tidal-shuffler/api/authorize");
    const loginDetails: LoginDetails = await response.json();

    localStorage.setItem(
      "tidalOauthCodeChallenge",
      loginDetails.oauthCodeChallenge,
    );

    localStorage.setItem("tidalOauthState", loginDetails.state);

    window.open(loginDetails.loginUrl, "_self");
  };

  return (
    <>
      <Button onClick={handleAuthorize}>Authorize with Tidal</Button>
    </>
  );
};

export default Authorize;
