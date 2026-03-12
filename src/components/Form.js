import React from "react";

function Form({ setName, setEmail, setSkills, setPhoto, setSummary }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

const generateSummary = () => {

  const nameInput = document.querySelector('input[placeholder="Enter your name"]');
  const skillsInput = document.querySelector('input[placeholder="Enter your skills"]');

  const name = nameInput ? nameInput.value : "";
  const skills = skillsInput ? skillsInput.value : "";

  setSummary(
`I am a Passionate software developer with strong skills in ${skills}. Experienced in building modern and scalable web applications using latest technologies and best development practices. Enjoy solving real-world problems through clean and efficient code while continuously learning new tools and frameworks. Strong problem-solving mindset with the ability to work effectively both independently and in collaborative team environments.`
  );
};

  return (
    <div>
      <h2>Enter Your Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter your skills"
          onChange={(e) => setSkills(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
        />

        <br /><br />

        <button
          type="button"
          onClick={() => setSkills("HTML, CSS, JavaScript, React, Git")}
        >
          Suggest Skills
        </button>

        <br /><br />

        <button type="submit">Generate Resume</button>

      </form>

      <br />

      <button type="button" onClick={generateSummary}>
        Generate AI Summary
      </button>

    </div>
  );
}

export default Form;