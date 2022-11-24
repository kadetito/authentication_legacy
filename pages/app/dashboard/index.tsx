import { LogoutButton } from "../../../components";
import NextLink from "next/link";
import { ContentLayout } from "../../../layouts";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <ContentLayout
      title="page.home.head.title"
      description="page.home.head.meta.description"
    >
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
