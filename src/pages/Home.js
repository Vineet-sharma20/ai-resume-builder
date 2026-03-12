import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import ResumePreview from "../components/ResumePreview";

function Home() {

  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [skills, setSkills] = useState(() => localStorage.getItem("skills") || "");
  const [summary, setSummary] = useState("");
  

  const [photo, setPhoto] = useState("");
  const [template, setTemplate] = useState("template1");

  const resetResume = () => {
  setName("");
  setEmail("");
  setSkills("");
  setPhoto("");
  setSummary("");

  localStorage.clear();
};

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("skills", skills);
  }, [name, email, skills]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-2 text-blue-600">
        AI Resume Builder
      </h1>

      <p className="mb-8 text-gray-600">
        Create your professional resume easily
      </p>

      <div className="mb-4">

        <button
          onClick={() => setTemplate("template1")}
          className="mr-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Template 1
        </button>

        <button
          onClick={() => setTemplate("template2")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Template 2
        </button>
        <button
onClick={resetResume}
className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
>
Reset Resume
</button>

      </div>

      <div className="grid grid-cols-2 gap-10 w-full max-w-4xl">

        <div className="bg-white p-6 rounded-lg shadow">
          <Form
            setName={setName}
            setEmail={setEmail}
            setSkills={setSkills}
            setPhoto={setPhoto}
            setSummary={setSummary}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <ResumePreview
            name={name}
            email={email}
            skills={skills}
            photo={photo}
            template={template}
            summary={summary}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;