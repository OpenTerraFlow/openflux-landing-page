// pages/404.tsx

import Link from "next/link";
import type { NextPageWithLayout } from "./_app";
import { Button } from "@/components/ui/button";

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F17] text-white px-6">
      <div className="relative">
        <div className="absolute inset-0 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <h1 className="relative text-7xl font-extrabold tracking-tight">404</h1>
      </div>

      <p className="mt-6 text-lg text-gray-300 max-w-md text-center">
        The page you’re looking for doesn’t exist or was moved.
      </p>

      <p className="mt-8 font-bold text-white z-5">
        <Link
          href="/"
          className="mt-10 rounded-xl font-semibold text-blue-400 hover:text-blue-500 text-2xl"
        >
          OpenFlux
        </Link>
      </p>
    </div>
  );
};

NotFoundPage.getLayout = function getLayout(page) {
  return page;
};

export default NotFoundPage;
