import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="antialiased overflow-x-hidden overflow-y-auto bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
