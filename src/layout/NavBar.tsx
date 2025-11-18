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
    className="flex items-center gap-1 font-semibold text-sm font-medium text-gray-700 hover:text-blue-400 transition-colors cursor-pointer"
  >
    {children}
  </Link>
);

const NavBar = () => {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 xl-px-4 w-full overflow-hidden">
      <div className="container flex h-14 items-center justify-between px-6 max-w-7xl mx-auto">
        <Title level={1} className="text-blue-400 text-blue-300">
          OpenFlux
        </Title>
        {/*  <nav className="flex items-center gap-8 max-md:hidden">
          <Item>Features</Item>
          <Item>Use Cases</Item>
          <Item>Pricing</Item>
          <Item>Customers</Item>
        </nav> */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-lg">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
