"use client";

import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { Menu, Phone, Home, Briefcase, Mail, Info, Shield, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Cart } from "./Cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems, openCart } = useCart();

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/privacy", label: "Privacy Policy", icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
            <span className="text-lg font-bold text-white">R</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            String Art Ghor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Phone Number, Cart & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Desktop Phone */}
          <Button
            variant="outline"
            asChild
            className="hidden md:flex"
          >
            <a href="https://wa.me/8801939213220" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              +8801939213220
            </a>
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={openCart}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItems.length}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
                      <span className="text-sm font-bold text-white">R</span>
                    </div>
                    <span className="text-lg font-bold">String Art Ghor</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className="justify-start text-base"
                    onClick={() => setOpen(false)}
                  >
                    <Link href={link.href}>
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.label}
                    </Link>
                  </Button>
                ))}

                <div className="my-4 border-t" />

                <Button
                  variant="default"
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600"
                >
                  <a href="tel:+8801700000000">
                    <Phone className="mr-2 h-4 w-4" />
                    +880 1700-000000
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <Cart />
    </header>
  );
}