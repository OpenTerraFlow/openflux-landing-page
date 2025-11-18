import Page from "@/components/core/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenFlux",
  description: "This is the app landing page",
};

export default function Home() {
  return (
    <Page>
      <div className="flex justify-center items-center">Hello World !</div>
    </Page>
  );
}
