"use client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import React from "react";
import { MsalConfig } from "../services/msalConfig";

const msalInstance = new PublicClientApplication(MsalConfig);
type MSALProviderType = {
  children: React.ReactNode;
};

/**
 * @param {Readonly<MSALProviderType>} props
 * @param {React.ReactNode} props.children - Relevant components in which the context values are needed
 * @description - Provides the account information instance for the logged in Pax
 * @returns {JSX.Element} MSALProvider
 */
export default function MSALProvider({ children }: Readonly<MSALProviderType>) {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
