import React from "react";

export type Sections = {
  aboutMeRef: React.MutableRefObject<HTMLElement | undefined>;
  portfolioRef: React.MutableRefObject<HTMLElement | undefined>;
  experienceRef: React.MutableRefObject<HTMLElement | undefined>;
  contactRef: React.MutableRefObject<HTMLElement | undefined>;
};