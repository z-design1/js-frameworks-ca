import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/contact">
          <a className="nav-link">Contact</a>
        </Link>
        <Link href="/login">
          <a className="nav-link">Log in</a>
        </Link>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
