export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} My Website. All rights reserved.</p>
        <nav>
          <a href="/privacy-policy" className="text-white mx-3 text-decoration-none hover-underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-white mx-3 text-decoration-none hover-underline">
            Terms
          </a>
          <a href="/contact" className="text-white mx-3 text-decoration-none hover-underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
