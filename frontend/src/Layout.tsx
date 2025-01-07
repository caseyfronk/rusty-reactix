import {
  BarChart,
  Code,
  Home,
  Info,
  LayoutDashboard,
  LucideProps,
  MessageCircleWarning,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/misc/ThemeToggle";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";

export function Layout() {
  return (
    <div>
      <header className="sticky top-0 z-50 h-14 w-full border-b bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-screen-2xl gap-2 p-2">
          <Button size="icon" variant="outline" asChild>
            <Link to="/">
              <Home />
            </Link>
          </Button>
          <span className="flex-1" />
          <ThemeToggle />
          <Button variant="outline">Sign in</Button>
          <Button variant="outline">Sign out</Button>
        </nav>
      </header>
      <div className="mx-auto flex max-w-screen-2xl">
        <Aside />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
      </div>
      <footer className="bg-secondary">
        <div className="mx-auto flex max-w-screen-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nam magni, molestiae libero, dolorum natus eligendi dolores cupiditate
          repudiandae, impedit quia maiores dolore saepe at doloribus autem
          dolor ducimus. Ad voluptas quasi exercitationem ipsum iusto rem
          praesentium magnam vitae, aspernatur id. Deleniti commodi odit earum
          aut voluptatem eligendi vitae illum!
        </div>
      </footer>
    </div>
  );
}

function Aside() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] w-48 flex-col gap-2 overflow-auto border-r py-2 pl-2 md:flex">
      <AsideLink to="/" label="Dashboard" Icon={LayoutDashboard} />
      <AsideLink to="/charts" label="Charts" Icon={BarChart} />
      <AsideLink to="/about" label="About" Icon={Info} />
      <AsideLink to="/example" label="Example" Icon={Code} />
      <AsideLink
        to="/unmatched-Route"
        label="Unmatched Route"
        Icon={MessageCircleWarning}
      />
    </aside>
  );
}

type AsideLinkProps = {
  to: string;
  label: string;
  Icon: ComponentType<LucideProps>;
};

function AsideLink({ to, label, Icon }: AsideLinkProps) {
  let location = useLocation();

  const isCurrentPath = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 rounded-l-md border-r-2 border-transparent p-2 text-sm text-muted-foreground hover:bg-accent",
        isCurrentPath && "border-primary bg-accent text-accent-foreground",
      )}
    >
      <Icon className="size-4" />
      <span className="flex-1 truncate">{label}</span>
      <span className="rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
        17
      </span>
    </Link>
  );
}
