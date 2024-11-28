import { BrowserCacheLocation, Configuration, LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
    names: {
        signUpSignIn: "<flow>",
        editProfile: "<authen_flow>"
    },
    authorities: {
        signUpSignIn: {
            authority: "<idp>"
        },
        editProfile: {
            authority: "<idp>"
        }
    },
    authorityDomain: "<idp_domain>",
    scopes: ["openid","offline_access","email"],
};

export const MsalConfig: Configuration = {
    auth: {
        clientId: "<client_id>",
          authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        cloudDiscoveryMetadata: "",
        redirectUri: "http://localhost:3000/",
        postLogoutRedirectUri: "http://localhost:3000/",
        navigateToLoginRequestUrl: true,
        clientCapabilities: ["CP1"],
    },
    cache: {
        cacheLocation: BrowserCacheLocation.SessionStorage,
        temporaryCacheLocation: BrowserCacheLocation.SessionStorage,
        storeAuthStateInCookie: false,
        secureCookies: false,
        claimsBasedCachingEnabled: true,

    },
    system: {
        loggerOptions: {
            loggerCallback: (
                level: LogLevel,
                message: string,
                containsPii: boolean
            ): void =>
            {
                if (containsPii)
                {
                    return;
                }
                switch (level)
                {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
            piiLoggingEnabled: false,
        },
        windowHashTimeout: 60000,
        iframeHashTimeout: 6000,
        loadFrameTimeout: 0,
        asyncPopups: false,
    },
    telemetry: {
        application: {
            appName: "Cloud App",
            appVersion: "1.0.0",
        },
    },
};

export const AuthRoutes = 
{
    home: "/",
    logout: "http://localhost:3000/"
}

export const loginScopes = {scopes:["openid","offline_access","email"]}