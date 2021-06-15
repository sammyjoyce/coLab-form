import Head from "next/head";

import Nav from "@components/Nav";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactForm from "@components/ContactForm";
import Blurb from "@components/blurb";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>coLab 2908 Access</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Header text="coLab 2908 Access" />
        <Blurb />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
