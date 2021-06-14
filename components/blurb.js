import Link from "next/link";
import useLocalStorage from "../utils/use-local-storage";

export default function Blurb() {
  const [hide, hideSetter] = useLocalStorage("hide", "false");
  const onClick = () => hideSetter(false);
  return (
    <main>
      <p>
        Access to 2908 is available for coLab portfolio companies, EIR's and
        Mentor's.
        <br></br>
        <br></br>
        There is a key located to the left of the door when facing the building.
        Use the code below to access. Please ensure that you do not let anyone
        outside of your immediate team have access to this code.
        <br></br>
        <br></br>Ensure to secure the building when you leave.
      </p>
      {hide ? (
        <a onClick={onClick}>
          <button>Show Code</button>
        </a>
      ) : null}
      {hide ? null : <label>1478</label>}

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1em;
        }
        label {
          font-size: 3em;
          text-align: center;
          color: #000;
        }

        input,
        textarea {
          width: 100%;
          min-height: 50px;
          max-height: 50px;
          border: none;
          font-size: 1em;
          background-color: #f7f7f7;
          border-radius: 1em;
          padding: 1em;
          text-align: center;
        }

        input:focus,
        textarea:focus {
          background-color: #dedede;
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
        input:matches([type="date"], [type="time"], [type="datetime-local"], [type="month"], [type="week"]) {
          text-align: center;
          -webkit-appearance: textfield;
          -moz-appearance: textfield;
          min-height: 50px;
          max-height: 50px;
          display: block;
        }

        input::-webkit-date-and-time-value {
          min-height: 50px;
          max-height: 50px;
        }

        .input-wrapper {
          box-sizing: border-box;
          align-content: center;
          display: flex;
          flex-direction: column;
        }

        .note {
          font-size: 0.75em;
          grid-column: 1 / span 2;
        }

        .full {
          grid-column: 1 / span 2;
        }

        @media (max-width: 600px) {
          form {
            margin: 3%;
            grid-template-columns: 1fr;
          }
          .input-wrapper:first-of-type {
            margin-top: 0;
          }
          button {
            grid-column: 1 / span 1;
          }
          .note {
            font-size: 0.75em;
            grid-column: 1 / span 1;
          }

          .full {
            grid-column: 1 / span 1;
          }
        }
      `}</style>
    </main>
  );
}
