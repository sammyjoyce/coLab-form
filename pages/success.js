import Head from 'next/head'

import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Booking Request Successful</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <Header text="Request Submitted" />
        <p>
          This booking request is not a guarantee of a booking. <br /> <br />
          Please wait for a confirmation email. If there is no availability
          during your requested time, you will be contacted to organise an
          alternative.
          <br />
          <br /> If there are any issues, contact the colab team via
          <a href="mailto:admin@thecolab.online"> email</a>.
        </p>
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
          max-width: 369px;
        }

        a {
          text-decoration: none;
        }

        @media (max-width: 600px) {
          main {
            margin: 3%;
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

        p {
          line-height: 150%;
        }
      `}</style>
    </div>
  );
}
