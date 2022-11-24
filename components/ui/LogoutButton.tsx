import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/auth";

import { useRouter } from "next/router";

export const LogoutButton = () => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  const navigateTo = (url: string) => {
    router.push(url);
  };
  return (
    <>
      {isLoggedIn ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}>
          Login
        </Button>
      )}
    </>
  );
};
