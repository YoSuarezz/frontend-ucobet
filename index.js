<Auth0Provider
  domain="dev-g3qtue2ymqd1uqxf.us.auth0.com"
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://dev-g3qtue2ymqd1uqxf.us.auth0.com/api/v2/",
    scope: "openid profile email",
    response_type: "code"
  }}
  useRefreshTokens={true}
  cacheLocation="localstorage"
>
  <App />
</Auth0Provider> 