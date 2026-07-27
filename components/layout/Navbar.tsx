"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <div className="container-page relative flex h-18 items-center justify-between py-3">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-lg">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Vighnex
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
              onMouseLeave={() => item.megaMenu && setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="focus-ring flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                aria-haspopup={item.megaMenu ? "true" : undefined}
                aria-expanded={item.megaMenu ? activeMenu === item.label : undefined}
              >
                {item.label}
                {item.megaMenu && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      activeMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {item.megaMenu && activeMenu === item.label && (
                <MegaMenu groups={item.megaMenu} onNavigate={() => setActiveMenu(null)} />
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Get Free Consultation
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
