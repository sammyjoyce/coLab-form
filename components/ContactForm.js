import { useState } from "react";

export default function ContactForm() {
  const [number, setNumber] = useState(1);
  return (
    <form
      name="meeting-room-booking"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="meeting-room-booking" />
      <div className="input-wrapper">
        <label htmlFor="yourname">Your Name</label>
        <input type="text" name="name" id="yourname" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="youremail">Your Email</label>
        <input type="email" name="email" id="youremail" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="attendees">Number of Attendees</label>

        <input
          type="number"
          min="1"
          max="3"
          name="attendees"
          id="attendees"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="thedate">Date</label>
        <input type="date" name="date" id="thedate" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="starttime">Start</label>
        <input type="time" name="start" id="starttime" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="endtime">End</label>
        <input type="time" name="end" id="endtime" />
      </div>
      <p className="note">
        Due to covid-19, there is a currently a limit of three people per
        meeting room.
      </p>
      <button type="submit">Send</button>
      <style jsx>{`
        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1em;
        }
        label {
          font-size: 1.3em;
          text-align: center;
          color: #949493;
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
        }
      `}</style>
    </form>
  );
}
