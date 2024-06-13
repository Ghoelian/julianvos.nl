import type { Metadata } from "next";
import { ReactNode, StrictMode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import AppBar from "@/common/components/nav/app-bar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Footer from "@/common/components/footer/footer";
import Breadcrumbs from "@/common/components/breadcrumbs/breadcrumbs";

export const metadata: Metadata = {
  title: "/home/julianv",
  description: "/home/julianv",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body>
        <StrictMode>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <AppBar />

                  <Box>
                    <Toolbar />

                    <Box
                      sx={{
                        pt: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: 850,
                        }}
                      >
                        <Breadcrumbs />

                        <Box component="main" sx={{ p: 2 }}>
                          {children}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Footer />
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StrictMode>
      </body>
    </html>
  );
}
