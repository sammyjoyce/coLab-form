import { useState } from "react";

export default function ContactForm() {
  const [number, setNumber] = useState(1);
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="input-wrapper">
        <label htmlFor="yourname">Your Name</label>
        <input type="text" name="name" id="yourname" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="youremail">Your Email</label>
        <input type="email" name="email" id="youremail" />
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
      <div className="input-wrapper">
        <label htmlFor="attendees">Number of attendees</label>
        <p style={{ fontSize: "0.75em" }}>
          Due to covid-19, there is a currently a limit of three people per
          meeting room
        </p>
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
      <p>
        <button type="submit">Send</button>
      </p>
      <style jsx>{`
        label {
          font-size: 1.3em;
          text-align: center;
          color: #949493;
        }

        input,
        textarea {
          width: 100%;
          min-height: 2em;
          border: none;
          font-size: 1em;
          background-color: #f7f7f7;
          border-radius: 1em;
          padding: 1em;
          text-align: center;
        }

        input:focus,
        textarea:focus {
          outline: 1px dotted #d6d6d6;
        }

        button {
          padding: 0.5em 1em;
          background: black;
          color: white;
          font-size: 1.3rem;
          width: 100%;
          border-radius: 1em;
          border-color: #000;
        }
        input:matches([type="date"], [type="time"], [type="datetime-local"], [type="month"], [type="week"]) {
          text-align: center;
        }
        .input-wrapper {
          box-sizing: border-box;
          align-content: center;
          display: flex;
          flex-direction: column;
          margin: 2em 0;
        }

        @media (max-width: 600px) { form{
          margin: 3%;
        }}
      `}</style>
    </form>
  );
}
