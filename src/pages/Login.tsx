import { Helmet } from 'react-helmet-async';

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to view your account" />
        <link rel="canonical" href="/login" />
        {/* <meta name="robots" content="noindex" /> */}
      </Helmet>
      <p>Login</p>
    </>
  );
}

export default Login;
