export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white text-center py-6 shadow-inner">
      <p className="text-lg font-medium tracking-wide">
        © {new Date().getFullYear()} Tasty Ten. All rights reserved.
      </p>

      <div className="mt-3 space-x-6">
        <a
          href="/about"
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="/terms"
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
