import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/core/Title";

type ItemProps = {
  children: React.ReactNode | React.ReactNode[];
  href?: string;
};

const Item = ({ children, href }: ItemProps) => (
  <Link
    href={href ?? "#"}
    className="flex items-center gap-1 font-semibold text-md font-medium text-gray-700 hover:text-blue-400 transition-colors cursor-pointer"
  >
    {children}
  </Link>
);

const NavBar = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 xl-px-4 w-full overflow-hidden">
      <div className="container flex h-14 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <Title level={1} className="font-semibold text-2xl text-neutral-900">
            OpenFlux
          </Title>
        </div>
        <nav className="flex items-center gap-8 max-md:hidden">
          <Item href="#features">Features</Item>
          <Item href="#use-cases">Use Cases</Item>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#waitlist">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white  font-bold px-6 rounded-lg">
              Join the Beta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
