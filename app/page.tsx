import StringArtButton from "@/components/ui/StringArtButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 font-sans dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
      {/* Decorative String Art Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="string-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#string-pattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shadow-lg">
            <svg 
              className="h-12 w-12 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
              />
            </svg>
          </div>
        </div>

        {/* Shop Name */}
        <h1 className="mb-4 bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          String Art Ghor
        </h1>

        {/* Subtitle */}
        <p className="mb-2 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
          Handcrafted String Art Masterpieces
        </p>
        
        <p className="mb-12 text-sm text-zinc-500 dark:text-zinc-500">
          Where threads weave stories and art comes alive
        </p>

        {/* Coming Soon Badge */}
        <div className="mb-8 inline-block rounded-full bg-white px-6 py-3 shadow-md dark:bg-zinc-800">
          <p className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
            Coming Soon
          </p>
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-md text-zinc-600 dark:text-zinc-400">
          We're crafting something special. Our collection of unique string art pieces will be available soon.
        </p>

        {/* Call to Action */}
        <StringArtButton>
          Notify Me When We Launch
        </StringArtButton>

        {/* Additional Info */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Handmade Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Custom Designs</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
}