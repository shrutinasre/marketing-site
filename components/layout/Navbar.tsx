"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close the open mega menu on outside click and on Escape.
  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <div className="container-page relative flex h-18 items-center justify-between py-3">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-lg">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Vighnex
          </span>
        </Link>

        <nav ref={navRef} className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => {
            if (!item.megaMenu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="focus-ring rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = activeMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Clicking toggles the menu instead of navigating away, so the
                    dropdown doesn't get unmounted mid-open by a route change. */}
                <button
                  type="button"
                  onClick={() => setActiveMenu(isOpen ? null : item.label)}
                  className="focus-ring flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <MegaMenu
                    groups={item.megaMenu}
                    viewAllHref={item.href}
                    viewAllLabel={`View All ${item.label}`}
                    onNavigate={() => setActiveMenu(null)}
                  />
                )}
              </div>
            );
          })}
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
