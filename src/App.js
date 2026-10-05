import React, { useState } from "react";
import Home from "./pages/Home";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import TemplateSelection from "./components/TemplateSelection";

function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },

    education: [
      {
        degree: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        percentage: "",
      },
    ],

    skills: {
      programming: "",
      frontend: "",
      backend: "",
      database: "",
      tools: "",
      other: "",
    },

    experience: [
      {
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    projects: [
      {
        name: "",
        technologies: "",
        description: "",
        github: "",
        live: "",
      },
    ],

    achievements: "",
    certifications: "",

    summary: "",

    additional: {
      languages: "",
      interests: "",
    },
  });

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const openTemplates = () => {
  setStep(9);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleTemplateSelect = (template) => {
  setSelectedTemplate(template);
};

const backToResume = () => {
  setStep(8);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const resetResume = () => {
  setStarted(false);
  setStep(1);
  setSelectedTemplate(null);
};

  if (!started) {
    return <Home onStart={() => setStarted(true)} />;
  }
  if (step === 9) {
  return (
    <TemplateSelection
      resumeData={resumeData}
      selectedTemplate={selectedTemplate}
      onSelect={handleTemplateSelect}
      onBack={backToResume}
    />
  );
}

  return (
    <div className="app-container">
      <header className="top-navbar">
        <div className="brand">
          <div className="brand-icon">AI</div>
          <div>
            <h2>AI Resume Builder</h2>
            <span>Build your professional resume</span>
          </div>
        </div>

        <button className="reset-button" onClick={resetResume}>
          Start Over
        </button>
      </header>

      <main className="builder-container">
        <div className="builder-left">
          <div className="progress-container">
            <div className="progress-top">
              <span>Resume Progress</span>
              <strong>{Math.round((step / 8) * 100)}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(step / 8) * 100}%` }}
              ></div>
            </div>

            <div className="step-text">
              Step {step} of 8
            </div>
          </div>

          <Form
  step={step}
  resumeData={resumeData}
  updateResumeData={updateResumeData}
  nextStep={nextStep}
  previousStep={previousStep}
  openTemplates={openTemplates}
   />

        </div>

        <div className="builder-right">
          <ResumePreview
  resumeData={resumeData}
  selectedTemplate={selectedTemplate}
/>
        </div>
      </main>
    </div>
  );
}

export default App;