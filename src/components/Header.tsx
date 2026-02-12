import { Link, useLocation } from "react-router-dom";
import { Book, Home, Search, Star, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Início", icon: Home },
  { path: "/books", label: "Livros", icon: Book },
  { path: "/search", label: "Busca", icon: Search },
  { path: "/favorites", label: "Favoritos", icon: Star },
  { path: "/devotional", label: "Devocional", icon: Heart },
];

export function Header() {
  const location = useLocation();

  return (
    <>
      {/* Desktop header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Book className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-gradient">Bíblia Online</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-xl safe-area-bottom">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
