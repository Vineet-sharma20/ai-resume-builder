import React, { useState } from "react";

function Form({
  step,
  resumeData,
  updateResumeData,
  nextStep,
  previousStep,
  openTemplates,
}) {
  const [aiLoading, setAiLoading] = useState(false);

  const personal = resumeData.personal;
  const skills = resumeData.skills;
  const additional = resumeData.additional;

  const updatePersonal = (field, value) => {
    updateResumeData("personal", {
      ...personal,
      [field]: value,
    });
  };

  const updateSkills = (field, value) => {
    updateResumeData("skills", {
      ...skills,
      [field]: value,
    });
  };

  const updateAdditional = (field, value) => {
    updateResumeData("additional", {
      ...additional,
      [field]: value,
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...resumeData.education];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateResumeData("education", updated);
  };

  const addEducation = () => {
    updateResumeData("education", [
      ...resumeData.education,
      {
        degree: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        percentage: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const updated = resumeData.education.filter(
      (_, i) => i !== index
    );

    updateResumeData("education", updated);
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...resumeData.experience];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateResumeData("experience", updated);
  };

  const addExperience = () => {
    updateResumeData("experience", [
      ...resumeData.experience,
      {
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = resumeData.experience.filter(
      (_, i) => i !== index
    );

    updateResumeData("experience", updated);
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...resumeData.projects];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateResumeData("projects", updated);
  };

  const addProject = () => {
    updateResumeData("projects", [
      ...resumeData.projects,
      {
        name: "",
        technologies: "",
        description: "",
        github: "",
        live: "",
      },
    ]);
  };

  const removeProject = (index) => {
    const updated = resumeData.projects.filter(
      (_, i) => i !== index
    );

    updateResumeData("projects", updated);
  };

  // AI SUMMARY
  const generateAISummary = () => {
    setAiLoading(true);

    setTimeout(() => {
      const skillList = [
        skills.programming,
        skills.frontend,
        skills.backend,
        skills.database,
        skills.tools,
        skills.other,
      ]
        .filter(Boolean)
        .join(", ");

      const education = resumeData.education.find(
        (edu) => edu.degree || edu.institution
      );

      const experience = resumeData.experience.filter(
        (exp) => exp.company || exp.position
      );

      const projects = resumeData.projects.filter(
        (project) => project.name || project.description
      );

      let summary = "";

      if (personal.title) {
        summary += `Motivated ${personal.title}`;
      } else {
        summary += "Motivated Computer Science professional";
      }

      if (education?.degree) {
        summary += ` with a ${education.degree}`;
      }

      if (education?.institution) {
        summary += ` from ${education.institution}`;
      }

      summary += ". ";

      if (skillList) {
        summary += `Skilled in ${skillList}. `;
      }

      if (experience.length > 0) {
        const experienceText = experience
          .slice(0, 2)
          .map((exp) => {
            if (exp.position && exp.company) {
              return `${exp.position} at ${exp.company}`;
            }

            return exp.position || exp.company;
          })
          .join(" and ");

        summary += `Experienced in ${experienceText}. `;
      }

      if (projects.length > 0) {
        summary += `Hands-on experience in developing ${
          projects.length
        } ${
          projects.length === 1 ? "project" : "projects"
        }`;

        const projectNames = projects
          .slice(0, 2)
          .map((project) => project.name)
          .filter(Boolean);

        if (projectNames.length > 0) {
          summary += ` including ${projectNames.join(" and ")}`;
        }

        summary += ". ";
      }

      summary +=
        "Strong problem-solving and analytical skills with a passion for learning new technologies and building practical solutions. Seeking an opportunity to contribute technical skills and grow in a professional environment.";

      updateResumeData("summary", summary);

      setAiLoading(false);
    }, 900);
  };

  const renderStep = () => {
    switch (step) {
      // STEP 1
      case 1:
        return (
          <>
            <div className="form-heading">
              <span>01</span>

              <div>
                <h1>Personal Information</h1>
                <p>
                  Let's start with some basic information about you.
                </p>
              </div>
            </div>

            <div className="form-grid">

              <div className="input-group full">
                <label>Full Name *</label>

                <input
                  type="text"
                  placeholder="e.g. Vineet Sharma"
                  value={personal.fullName}
                  onChange={(e) =>
                    updatePersonal(
                      "fullName",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Professional Title</label>

                <input
                  type="text"
                  placeholder="e.g. Software Developer"
                  value={personal.title}
                  onChange={(e) =>
                    updatePersonal(
                      "title",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group">
                <label>Email *</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={personal.email}
                  onChange={(e) =>
                    updatePersonal(
                      "email",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group">
                <label>Phone</label>

                <input
                  type="text"
                  placeholder="+91 9876543210"
                  value={personal.phone}
                  onChange={(e) =>
                    updatePersonal(
                      "phone",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Location</label>

                <input
                  type="text"
                  placeholder="City, State, Country"
                  value={personal.location}
                  onChange={(e) =>
                    updatePersonal(
                      "location",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group">
                <label>LinkedIn</label>

                <input
                  type="text"
                  placeholder="linkedin.com/in/yourname"
                  value={personal.linkedin}
                  onChange={(e) =>
                    updatePersonal(
                      "linkedin",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group">
                <label>GitHub</label>

                <input
                  type="text"
                  placeholder="github.com/username"
                  value={personal.github}
                  onChange={(e) =>
                    updatePersonal(
                      "github",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Portfolio Website</label>

                <input
                  type="text"
                  placeholder="https://yourportfolio.com"
                  value={personal.portfolio}
                  onChange={(e) =>
                    updatePersonal(
                      "portfolio",
                      e.target.value
                    )
                  }
                />
              </div>

            </div>
          </>
        );

      // STEP 2
      case 2:
        return (
          <>
            <div className="form-heading">
              <span>02</span>

              <div>
                <h1>Education</h1>
                <p>
                  Add your educational qualifications.
                </p>
              </div>
            </div>

            {resumeData.education.map((edu, index) => (
              <div
                className="repeat-card"
                key={index}
              >
                <div className="repeat-card-header">
                  <h3>Education {index + 1}</h3>

                  {resumeData.education.length > 1 && (
                    <button
                      className="delete-button"
                      onClick={() =>
                        removeEducation(index)
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-grid">

                  <div className="input-group full">
                    <label>Degree</label>

                    <input
                      type="text"
                      placeholder="B.Tech Computer Science"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "degree",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group full">
                    <label>Institution</label>

                    <input
                      type="text"
                      placeholder="College / University"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "institution",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Location</label>

                    <input
                      type="text"
                      placeholder="Mathura"
                      value={edu.location}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "location",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Percentage / CGPA</label>

                    <input
                      type="text"
                      placeholder="8.2 CGPA"
                      value={edu.percentage}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "percentage",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Start Year</label>

                    <input
                      type="text"
                      placeholder="2023"
                      value={edu.startYear}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "startYear",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>End Year</label>

                    <input
                      type="text"
                      placeholder="2027"
                      value={edu.endYear}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "endYear",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>
              </div>
            ))}

            <button
              className="add-button"
              onClick={addEducation}
            >
              + Add Another Education
            </button>
          </>
        );

      // STEP 3
      case 3:
        return (
          <>
            <div className="form-heading">
              <span>03</span>

              <div>
                <h1>Skills</h1>
                <p>
                  Add the technical skills you want recruiters
                  to see.
                </p>
              </div>
            </div>

            <div className="form-grid">

              <div className="input-group full">
                <label>Programming Languages</label>

                <input
                  type="text"
                  placeholder="Java, Python, C, C++"
                  value={skills.programming}
                  onChange={(e) =>
                    updateSkills(
                      "programming",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Frontend Technologies</label>

                <input
                  type="text"
                  placeholder="HTML, CSS, JavaScript, React.js"
                  value={skills.frontend}
                  onChange={(e) =>
                    updateSkills(
                      "frontend",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Backend Technologies</label>

                <input
                  type="text"
                  placeholder="Node.js, Express.js, Flask"
                  value={skills.backend}
                  onChange={(e) =>
                    updateSkills(
                      "backend",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Database</label>

                <input
                  type="text"
                  placeholder="MySQL, MongoDB, PostgreSQL"
                  value={skills.database}
                  onChange={(e) =>
                    updateSkills(
                      "database",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Tools & Platforms</label>

                <input
                  type="text"
                  placeholder="Git, GitHub, VS Code, Postman"
                  value={skills.tools}
                  onChange={(e) =>
                    updateSkills(
                      "tools",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Other Skills</label>

                <textarea
                  placeholder="Problem Solving, Data Structures, DBMS..."
                  value={skills.other}
                  onChange={(e) =>
                    updateSkills(
                      "other",
                      e.target.value
                    )
                  }
                ></textarea>
              </div>

            </div>
          </>
        );

      // STEP 4
      case 4:
        return (
          <>
            <div className="form-heading">
              <span>04</span>

              <div>
                <h1>Experience & Internship</h1>
                <p>
                  Add your work experience, internships or
                  training.
                </p>
              </div>
            </div>

            {resumeData.experience.map((exp, index) => (
              <div
                className="repeat-card"
                key={index}
              >
                <div className="repeat-card-header">
                  <h3>Experience {index + 1}</h3>

                  {resumeData.experience.length > 1 && (
                    <button
                      className="delete-button"
                      onClick={() =>
                        removeExperience(index)
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-grid">

                  <div className="input-group">
                    <label>Company</label>

                    <input
                      type="text"
                      placeholder="Company Name"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Position / Role</label>

                    <input
                      type="text"
                      placeholder="Frontend Developer Intern"
                      value={exp.position}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "position",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Location</label>

                    <input
                      type="text"
                      placeholder="Noida / Remote"
                      value={exp.location}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "location",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Start Date</label>

                    <input
                      type="text"
                      placeholder="June 2026"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "startDate",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>End Date</label>

                    <input
                      type="text"
                      placeholder="August 2026"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "endDate",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group full">
                    <label>
                      Responsibilities & Achievements
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Describe your responsibilities, work and achievements..."
                      value={exp.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    ></textarea>
                  </div>

                </div>
              </div>
            ))}

            <button
              className="add-button"
              onClick={addExperience}
            >
              + Add Another Experience
            </button>
          </>
        );

      // STEP 5
      case 5:
        return (
          <>
            <div className="form-heading">
              <span>05</span>

              <div>
                <h1>Projects</h1>
                <p>
                  Show recruiters what you have built.
                </p>
              </div>
            </div>

            {resumeData.projects.map((project, index) => (
              <div
                className="repeat-card"
                key={index}
              >
                <div className="repeat-card-header">
                  <h3>Project {index + 1}</h3>

                  {resumeData.projects.length > 1 && (
                    <button
                      className="delete-button"
                      onClick={() =>
                        removeProject(index)
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-grid">

                  <div className="input-group full">
                    <label>Project Name</label>

                    <input
                      type="text"
                      placeholder="AI Resume Builder"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group full">
                    <label>Technologies Used</label>

                    <input
                      type="text"
                      placeholder="React.js, JavaScript, Node.js, MongoDB"
                      value={project.technologies}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "technologies",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group full">
                    <label>Project Description</label>

                    <textarea
                      rows="5"
                      placeholder="Describe your project, features and your contribution..."
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    ></textarea>
                  </div>

                  <div className="input-group">
                    <label>GitHub URL</label>

                    <input
                      type="text"
                      placeholder="https://github.com/username/project"
                      value={project.github}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "github",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Live Demo URL</label>

                    <input
                      type="text"
                      placeholder="https://your-project.com"
                      value={project.live}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "live",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>
              </div>
            ))}

            <button
              className="add-button"
              onClick={addProject}
            >
              + Add Another Project
            </button>
          </>
        );

      // STEP 6
      case 6:
        return (
          <>
            <div className="form-heading">
              <span>06</span>

              <div>
                <h1>Achievements & Certifications</h1>
                <p>
                  Show your achievements and certificates.
                </p>
              </div>
            </div>

            <div className="input-group full">
              <label>Achievements</label>

              <textarea
                rows="7"
                placeholder={`Example:
• Solved 150+ problems on LeetCode
• Participated in coding competitions
• Secured position in college hackathon`}
                value={resumeData.achievements}
                onChange={(e) =>
                  updateResumeData(
                    "achievements",
                    e.target.value
                  )
                }
              ></textarea>
            </div>

            <div className="input-group full">
              <label>Certifications</label>

              <textarea
                rows="7"
                placeholder={`Example:
• Python Certification - Infosys
• NPTEL Certification
• Web Development Certification`}
                value={resumeData.certifications}
                onChange={(e) =>
                  updateResumeData(
                    "certifications",
                    e.target.value
                  )
                }
              ></textarea>
            </div>
          </>
        );

      // STEP 7
      case 7:
        return (
          <>
            <div className="form-heading">
              <span>07</span>

              <div>
                <h1>Professional Summary</h1>
                <p>
                  Tell recruiters about yourself in a few lines.
                </p>
              </div>
            </div>

            <div className="input-group full">
              <label>Professional Summary</label>

              <textarea
                rows="9"
                placeholder="Write a short professional summary..."
                value={resumeData.summary}
                onChange={(e) =>
                  updateResumeData(
                    "summary",
                    e.target.value
                  )
                }
              ></textarea>

              <button
                type="button"
                className="ai-button"
                onClick={generateAISummary}
                disabled={aiLoading}
              >
                {aiLoading
                  ? "✨ Generating..."
                  : "✨ Generate with AI"}
              </button>
            </div>
          </>
        );

      // STEP 8
      case 8:
        return (
          <>
            <div className="form-heading">
              <span>08</span>

              <div>
                <h1>Additional Information</h1>
                <p>
                  Add languages, interests and other useful
                  information.
                </p>
              </div>
            </div>

            <div className="form-grid">

              <div className="input-group full">
                <label>Languages</label>

                <input
                  type="text"
                  placeholder="English, Hindi"
                  value={additional.languages}
                  onChange={(e) =>
                    updateAdditional(
                      "languages",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="input-group full">
                <label>Interests</label>

                <input
                  type="text"
                  placeholder="Coding, Chess, Reading"
                  value={additional.interests}
                  onChange={(e) =>
                    updateAdditional(
                      "interests",
                      e.target.value
                    )
                  }
                />
              </div>

            </div>

            <div className="completion-card">
              <div className="completion-icon">
                🎉
              </div>

              <h2>Information Completed!</h2>

              <p>
                Great! Your basic resume information is ready.
                You can now choose a professional resume
                template.
              </p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-card">

      {renderStep()}

      <div className="form-navigation">

        <button
          className="secondary-button"
          onClick={previousStep}
          disabled={step === 1}
        >
          ← Previous
        </button>

        {step < 8 ? (
          <button
            className="primary-button small"
            onClick={nextStep}
          >
            Save & Continue →
          </button>
        ) : (
          <button
            className="primary-button small"
            onClick={openTemplates}
          >
            Choose Template →
          </button>
        )}

      </div>

    </div>
  );
}

export default Form;