import { LogoutButton } from "../../../components";
import NextLink from "next/link";
import { ContentLayout } from "../../../layouts";

const Articles = () => {
  // console.log( locale );
  return (
    <ContentLayout>
      <LogoutButton />
      <NextLink href="/app/dashboard">dashboard</NextLink>
    </ContentLayout>
  );
};

export default Articles;
