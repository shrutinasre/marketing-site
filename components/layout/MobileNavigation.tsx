"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/nav";
import { Button } from "@/components/ui/Button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="focus-ring rounded-lg p-2 text-white"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 bg-navy-950"
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-white/5 py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.megaMenu && setOpen(false)}
                      className="focus-ring block flex-1 py-2 text-base font-medium text-white/90"
                    >
                      {item.label}
                    </Link>
                    {item.megaMenu && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() =>
                          setExpanded((cur) => (cur === item.label ? null : item.label))
                        }
                        className="focus-ring p-2 text-white/70"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.megaMenu && expanded === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.megaMenu.map((group) => (
                          <div key={group.heading} className="mb-3">
                            <p className="mb-1 text-xs font-semibold uppercase text-white/40">
                              {group.heading}
                            </p>
                            {group.items.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="focus-ring block py-1.5 text-sm text-white/80"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Button href="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
                Get Free Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
