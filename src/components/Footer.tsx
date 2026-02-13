export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-burgundy rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-white">
              PinPal
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray/30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray">
            &copy; {new Date().getFullYear()} PinPal. All rights reserved.
          </p>
          <p className="text-gray">
            Bowling league management made simple.
          </p>
        </div>
      </div>
    </footer>
  );
}
