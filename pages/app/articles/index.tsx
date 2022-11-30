import { LogoutButton } from "../../../components";
import NextLink from "next/link";
import { ContentLayout } from "../../../layouts";

const Articles = () => {
  // console.log( locale );
  return (
    <ContentLayout title="Articles" description="Página de articles">
      <LogoutButton />
      <NextLink href="/app/dashboard">dashboard</NextLink>
    </ContentLayout>
  );
};

export default Articles;
