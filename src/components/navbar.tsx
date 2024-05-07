"use client";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="text-white shadow-lg border border-t-0 border-l-0 border-r-0 border-b-gray-600">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <Link className="text-xl font-bold" href="/">
              TailorHub Restaurants
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className="relative top-1 font-medium hover:text-gray-200"
              href="/restaurants"
            >
              Restaurants
            </Link>

            
            <SignedOut> {/* Si el usuario no ha iniciado sesión, muestra el enlace Sign In */}
              <Link
                className="bg-gray-100 hover:bg-gray-300 text-black px-4 py-1 rounded-lg border border-black mt-4 max-w-[9rem]"
                href="/sign-in"
              >
                Sign In
              </Link>
            </SignedOut>
            <SignedIn> {/* Si el usuario ha iniciado sesión, muestra el botón de usuario */}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
}
