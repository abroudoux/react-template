import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/lib/router";
import { ThemeProvider } from "@/config/theme-provider";

import { Toaster } from "@/lib/components/ui/toaster";

import "@/style/index.css";
import "@/style/layouts.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider>
);
