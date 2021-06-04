import { useState } from "react";

export default function ContactForm() {
  const [number, setNumber] = useState(1);
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label>{" "}
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="attendees">Number of attendees: </label>
        <p style={{ }}
        >Due to covid-19, there is a currently a limit of three people per meeting room</p>
        <input
          type="number"
          min="1"
          max="3"
          name="attendees"
          id="attendees"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <style jsx>{`
        label {
          font-size: 0.8rem;
        }

        input,
        textarea {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid #d6d6d6;
          font-size: 1.3rem;
        }

        input:focus,
        textarea:focus {
          outline: 1px dotted #d6d6d6;
        }

        button {
          padding: 20px;
          background: black;
          color: white;
          border-radius: 10px;
          font-size: 1.3rem;
        }
      `}</style>
    </form>
  );
}
