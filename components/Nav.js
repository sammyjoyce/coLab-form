import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <div className="wrapper">
        <Link href="/">
          <img
            src="./logo.svg"
            style={{ width: "200px", height: "auto", padding: "0.5em" }}
          />
        </Link>
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #f5f5f7;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 1.3rem;
          text-align: center;
        }
      `}</style>
    </nav>
  );
}
