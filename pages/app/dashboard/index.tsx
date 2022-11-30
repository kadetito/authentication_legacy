import { LogoutButton } from "../../../components";

import NextLink from "next/link";
import { ContentLayout } from "../../../layouts";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <ContentLayout title="Dashboard" description="Este es el dashboard">
      <LogoutButton />
      <NextLink href="/app/articles">ar5ticles</NextLink>
      {user?.role === "admin" && (
        <>
          <h3>Esta frase solamente la ve el role Admin</h3>
        </>
      )}
    </ContentLayout>
  );
};

export default Dashboard;
