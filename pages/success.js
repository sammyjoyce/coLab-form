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
          This booking request is not a guarentee of a booking. <br />
          <br />
          Please wait for a confirmation email. If there is not availability
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
          max-width: 600px;
        }

        a {
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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
