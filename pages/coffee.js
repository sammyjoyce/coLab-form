import Head from "next/head";
import Link from "next/link";
import { toaster } from "evergreen-ui";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

export default function coffee() {
  return (
    <div className="container">
      <Head>
        <title>coLab Coffee Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div>
          <button
            onClick={() =>
              toaster.success(
                // "If you had to ask...",
                <img src="https://media.giphy.com/media/26xBsuyfTVScq7UxW/source.gif" />
              )
            }
          >
            Have I had too much coffee?
          </button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScIHhz1SVqtFuYjuBAyAYKTvgS2fa-7uoECTiUkLs5-0ceShA/viewform">
            <button>Just let me order</button>
          </a>
        </div>
      </main>

      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        button {
          padding: 0.5em 1em;
          background: black;
          color: white;
          font-size: 1.3rem;
          width: 100%;
          border-radius: 1em;
          border-color: #000;
          margin-top: 1em;
          grid-column: 1 / span 2;
        }

        button:hover {
          cursor: pointer;
        }
        main {
          padding: 1em 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 600px;
        }
        @media (max-width: 600px) {
          .container {
            margin: 3%;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
