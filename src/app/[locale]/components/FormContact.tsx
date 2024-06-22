// En tu archivo FormContact.js
"use client";

const FormContact = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("/api/send/route", {
            method: "POST",
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        Send me an email
      </button>
    </div>
  );
};

export default FormContact;
