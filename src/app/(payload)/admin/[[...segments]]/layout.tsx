import type { ServerFunctionClient } from "payload";
import config from "@payloadcms/next/config";
import { RootLayout } from "@payloadcms/next/layouts";
import React from "react";
import { importMap } from "./importMap";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) =>
  RootLayout({ children, config, importMap });

export default Layout;
