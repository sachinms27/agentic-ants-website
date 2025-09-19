import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useClickOutside } from "../hooks/useClickOutside";
import { siteContent } from "../data/content";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { RefObject, useRef, useState } from "react";


export function Navbar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const mobileMenuRef = useClickOutside<HTMLDivElement>(() => {
    if (open) setOpen(false);
  });

  const { scrollY } = useScroll({
    target: ref as RefObject<HTMLDivElement>,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header
      ref={ref}
      className="fixed w-full max-w-7xl mx-auto top-0 inset-x-0 z-50 px-4 sm:px-6"
    >
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          width: visible ? "78%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        style={{
          minWidth: "320px",
        }}
        className={`hidden lg:flex bg-transparent self-start items-center justify-between py-4 rounded-lg relative z-[50] mx-auto w-full backdrop-blur ${
          visible
            ? "bg-background/80 py-3 border border-border shadow-lg"
            : ""
        }`}
      >
        <div className="flex items-center justify-between w-full px-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src={siteContent.brand.logo}
              alt="Agentic Ants Logo"
              width={48}
              height={48}
              className="object-contain rounded-md"
            />
            <span className="font-bold text-lg text-foreground">
              {siteContent.brand.name}
            </span>
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium">
            <AnimatePresence>
              {siteContent.navigation.items.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.3,
                    }}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault();
                          const target = document.querySelector(
                            item.href,
                          );
                          if (target) {
                            target.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-all duration-500 rounded-md px-4 py-2 font-medium relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.div>
                ),
              )}
            </AnimatePresence>
          </div>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center gap-x-4"
          >
            <ThemeToggle />
            <div className="hidden sm:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                asChild
              >
                <a
                  href={siteContent.navigation.auth.signIn.href}
                >
                  {siteContent.navigation.auth.signIn.label}
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-200"
                asChild
              >
                <a href={siteContent.navigation.auth.demo.href}>
                  {siteContent.navigation.auth.demo.label}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-3 md:py-4 z-50 ${
          visible
            ? "bg-background/90 w-11/12 border border-border backdrop-blur-md mx-auto rounded-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-6">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src={siteContent.brand.logo}
              alt="Agentic Ants Logo"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="font-bold text-base sm:text-lg text-foreground">
              {siteContent.brand.name}
            </span>
          </motion.div>

          {/* Mobile Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center gap-2"
          >
            {/* Theme Toggle - visible on mobile */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="text-foreground p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md rounded-b-2xl shadow-xl border border-border border-t-0 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 sm:py-6 space-y-2">
                {/* Navigation Items */}
                {siteContent.navigation.items.map(
                  (navItem, idx) => (
                    <motion.div
                      key={`link=${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 * (idx + 1),
                        duration: 0.3,
                      }}
                      className="w-full"
                    >
                      <a
                        href={navItem.href}
                        onClick={(e) => {
                          if (navItem.href.startsWith("#")) {
                            e.preventDefault();
                            const target =
                              document.querySelector(
                                navItem.href,
                              );
                            if (target) {
                              target.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }
                          setOpen(false);
                        }}
                        className="text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 block font-medium text-sm sm:text-base"
                      >
                        {navItem.label}
                      </a>
                    </motion.div>
                  ),
                )}

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-full pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-border space-y-2 sm:space-y-3"
                >
                  {/* Sign In Button */}
                  <Button
                    onClick={() => setOpen(false)}
                    variant="outline"
                    size="sm"
                    className="w-full border-border text-foreground hover:bg-accent justify-center py-2.5 text-sm"
                    asChild
                  >
                    <a
                      href={
                        siteContent.navigation.auth.signIn.href
                      }
                    >
                      {siteContent.navigation.auth.signIn.label}
                    </a>
                  </Button>

                  {/* Request Demo Button */}
                  <Button
                    onClick={() => setOpen(false)}
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center py-2.5 text-sm"
                    asChild
                  >
                    <a
                      href={
                        siteContent.navigation.auth.demo.href
                      }
                    >
                      {siteContent.navigation.auth.demo.label}
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}