import Head from 'next/head'
import Link from "next/link";

import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactForm from '@components/ContactForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>coLab Booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScIHhz1SVqtFuYjuBAyAYKTvgS2fa-7uoECTiUkLs5-0ceShA/viewform">
            <button>Coffee Order</button>
          </a>
          <Link href="/room">
            <button>Meeting Room Booking</button>
          </Link>
          <Link href="/2908">
            <button>2908 Access</button>
          </Link>
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

      <style jsx global>{`
        @import url("https://use.typekit.net/uuv2vhl.css");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: jaf-domus, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-weight: 300;
        }

        * {
          box-sizing: border-box;
        }

        .title {
          font-size: 1.6em;
        }
      `}</style>
    </div>
  );
}
