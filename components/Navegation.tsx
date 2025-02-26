"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, Frame, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/app/contexts/ThemeContext";
import { User } from "@supabase/supabase-js";
import { signOutAction } from "@/app/actions";

const Navigation = ({ user }: { user: User | null }) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Caja", href: "/protected/caja" },
    { name: "Servicios", href: "/protected/servicios" },
    { name: "Ventas", href: "/protected/ventas" },
    { name: "Empleados", href: "/protected/empleados" },
    { name: "Insumos", href: "/protected/insumos" },
    { name: "Compras", href: "/protected/compras" },
    { name: "Gráficos", href: "/protected/graficos" },
  ];

  return (
    <nav className="bg-background text-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/protected" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">PelucApp</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="px-4 py-2">
                <Button
                  type="submit"
                  variant="ghost"
                  onClick={signOutAction}
                  size="sm"
                  className="w-full justify-start"
                >
                  <LogOut size={16} className="mr-2" />
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                  <SheetDescription>
                    Navegue por las diferentes secciones de la aplicación.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {user ? (
                    <div>
                      <Button
                        type="submit"
                        variant="ghost"
                        onClick={signOutAction}
                        size="sm"
                        className="w-full justify-start"
                      >
                        <LogOut size={16} className="mr-2" />
                        Cerrar sesión
                      </Button>
                    </div>
                  ) : (
                    <></>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-foreground justify-start"
                  >
                    {theme === "light" ? (
                      <Moon size={16} className="mr-2" />
                    ) : (
                      <Sun size={16} className="mr-2" />
                    )}
                    Cambiar tema
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
