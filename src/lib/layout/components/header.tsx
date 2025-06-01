'use client';
import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div
          className="mr-auto cursor-pointer text-2xl text-black transition-opacity hover:opacity-80 dark:text-white"
          onClick={handleLogoClick}
        >
          LOGO
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};
