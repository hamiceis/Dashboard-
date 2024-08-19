'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {LogOut ,Home, Menu, Package, Package2, Settings, ShoppingBag, Users2, LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator";

const links = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: ShoppingBag,
    label: "Pedidos",
    href: "/orders",
  },
  {
    icon: Package2,
    label: "Produtos",
    href: "/products",
  },
  {
    icon: Users2,
    label: "Clientes",
    href: "/customers",
  },
  {
    icon: Settings,
    label: "Configurações",
    href: "/settings",
  }
]

export function SideBar() {
  const pathName = usePathname()

  return (
    <div className="flex flex-col w-full bg-muted/40">
      <aside className="hidden fixed sm:flex inset-y-0 left-0 z-10 w-14 bg-black">
        <nav className="flex flex-col items-center gap-4 px-3 py-3">
          <TooltipProvider>
            <Link
              href="#"
              className="flex size-8 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Package className="size-4 text-red-500" />
              <span className="sr-only">dashboard avatar</span>
            </Link>

            <Separator className="w-full bg-zinc-500" />

          
              {links.map(({ label, icon: Icon, href }) => (
                <Tooltip>
                  <TooltipTrigger key={label} asChild>
                    <Link
                      href={href}
                      className="flex size-8 shrink-0 items-center justify-center bg-primary rounded-full group"
                    >
                      <Icon className={cn("size-4 group-hover:text-primary-foreground transition-colors",
                        pathName === href ? "text-primary-foreground" : "text-muted-foreground"
                      )} />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {label}
                  </TooltipContent>
                </Tooltip>
              ))}

              <div className="mt-auto">
              <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                    size="icon"
                    variant="invisible"
                    className="rounded-full group"
                    >
                    <LogOutIcon className="text-muted-foreground group-hover:text-red-500 size-4"/>

                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    Sair
                  </TooltipContent>
                </Tooltip>
              </div>
            
          </TooltipProvider>
        </nav>
      </aside>

      <div className="flex flex-col">
        <header className="px-4 py-1.5 sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Abrir e fechar botão menu</span>
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" >
              <nav className="w-full flex flex-col gap-5">
                <Link
                  href="#"
                  className="size-10 flex items-center justify-center bg-black rounded-full"
                  prefetch={false}
                >
                  <Package className="size-5 text-red-500 transition-all" />
                  <span className="sr-only">Logo do projeto</span>
                </Link>
                <Separator className="w-full text-zinc-700" />

                {links.map(({ label, icon: Icon, href }) => (
                  <SheetClose key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 ml-2 group"
                      prefetch={false}
                    >
                      <Icon className="size-5 transition-all group-hover:text-muted-foreground" />
                      <span className="font-bold text-zinc-800 group-hover:text-muted-foreground">{label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>

  )
}