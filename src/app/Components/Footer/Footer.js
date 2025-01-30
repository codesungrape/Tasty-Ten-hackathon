export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p className="m-0">
        © {new Date().getFullYear()} Reci-yo. All rights reserved.
      </p>
      <div className="mt-2">
        <a href="/about" className="text-green-500 mx-2">
          About
        </a>
        <a href="/contact" className="text-green-500 mx-2">
          Contact
        </a>
        <a href="/terms" className="text-green-500 mx-2">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
