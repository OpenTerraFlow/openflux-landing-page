import Head from "next/head";
import { ReactElement } from "react";
import NavBar from "./NavBar";

type AppLayoutProps = {
  children: ReactElement;
  title?: string | undefined;
};

const AppLayout = (props: AppLayoutProps) => {
  const { title, children } = props;
  return (
    <div>
      <Head>{title ? title : "OpenFlux"}</Head>
      <NavBar />
      <main className="flex min-h-screen w-screen flex-col ">{children}</main>
    </div>
  );
};

export default AppLayout;
