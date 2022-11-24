import { LogoutButton } from "../../../components";
import NextLink from "next/link";
import { ContentLayout } from "../../../layouts";

const Articles = () => {
  // console.log( locale );
  return (
    <ContentLayout
      title="page.home.head.title"
      description="page.home.head.meta.description"
    >
      <LogoutButton />
      <NextLink href="/app/dashboard">dashboard</NextLink>
    </ContentLayout>
  );
};

export default Articles;
