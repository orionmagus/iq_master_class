"use client";
import { AuthRoutes, loginScopes } from "@/app/services/msalConfig";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Link from "next/link";
import React, { useState } from "react";

export const LoginCell = () => {
  const { instance, accounts } = useMsal();
  const [loading, setLoading] = useState(false);

  const Login = async () => {
    setLoading(true);
    localStorage.clear();
    sessionStorage.clear();
    await instance.loginRedirect(loginScopes);
    setLoading(false);
    instance.setActiveAccount(instance.getAllAccounts()[0]);
  };

  const Logout = async () => {
    setLoading(true);
    sessionStorage.clear();
    for (const account of accounts) {
      await instance.logout({
        account,
        postLogoutRedirectUri: AuthRoutes.logout,
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-login">
      <div className="card-login">
        <h1 className="title-login">
          Welcome to <span className="text-yellow-400"> <Link href="/hangman" >Hangman</Link> </span>
        </h1>
        <p className="subtitle-login">
          Test your wits and guess the word before it&apos;s too late!
        </p>
        <div>
          <AuthenticatedTemplate>
            <button
              onClick={Logout}
              disabled={loading}
              className={`button-base button-logout ${
                loading ? "button-disabled" : ""
              }`}
            >
              {loading ? "..." : "Logout"}
            </button>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <button
              onClick={Login}
              disabled={loading}
              className={`button-base button-login ${
                loading ? "button-disabled" : ""
              }`}
            >
              {loading ? "..." : "Login"}
            </button>
          </UnauthenticatedTemplate>
        </div>
        <div className="mt-8">
          <p className="footer-text">
            🔑 Login to track progress and challenge friends!
          </p>
          <p className="footer-text">
            🎯 Each guess brings you closer to winning
          </p>
        </div>
      </div>
    </div>
  );
};