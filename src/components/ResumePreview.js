import html2canvas from "html2canvas";
import React from "react";
import html2pdf from "html2pdf.js";

function ResumePreview({ name, email, skills, photo, template, summary }) {

  const downloadImage = () => {
    const element = document.getElementById("resume");

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "resume.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const downloadPDF = () => {
    const element = document.getElementById("resume");
    html2pdf().from(element).save();
  };

  return (
    <div>

      <div id="resume">

 {template === "template1" && (
<div>
<h2>Resume Template 1</h2>

{photo && <img src={photo} alt="profile" width="100" />}

<p><strong>Name:</strong> {name}</p>
<p><strong>Email:</strong> {email}</p>
<p><strong>Skills:</strong> {skills}</p>
<p><strong>Summary:</strong> {summary}</p>


</div>
)}

{template === "template2" && (
<div style={{background:"#f0f0f0", padding:"10px"}}>
<h2 style={{color:"green"}}>Resume Template 2</h2>

{photo && <img src={photo} alt="profile" width="100" />}

<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Skills: {skills}</p>
<p>Summary: {summary}</p>

</div>
)}

      </div>

      <br />

      <button onClick={downloadPDF}>
        Download PDF
      </button>

      <button onClick={downloadImage}>
        Download Image
      </button>

    </div>
  );
}

export default ResumePreview;