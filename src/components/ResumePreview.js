import React from "react";

function ResumePreview({ resumeData, selectedTemplate }) {
  const downloadPDF = () => {
  const printStyle = document.createElement("style");

  printStyle.id = "resume-print-style";

  printStyle.innerHTML = `
    @page {
      size: A4;
      margin: 0;
    }

    @media print {
      body * {
        visibility: hidden !important;
      }

      .preview-wrapper,
      .preview-wrapper * {
        visibility: visible !important;
      }

      .preview-wrapper {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        background: white !important;
      }

      .preview-header {
        display: none !important;
      }

      .preview-wrapper > div:last-child {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 auto !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }
    }
  `;

  document.head.appendChild(printStyle);

  window.print();

  setTimeout(() => {
    const style = document.getElementById(
      "resume-print-style"
    );

    if (style) {
      style.remove();
    }
  }, 1000);
};
  const personal = resumeData.personal || {};
  const education = resumeData.education || [];
  const skills = resumeData.skills || {};
  const experience = resumeData.experience || [];
  const projects = resumeData.projects || [];

  const templateType = selectedTemplate?.type || "classic";
  const accent = selectedTemplate?.color || "#2563eb";

  const isDark = templateType === "dark";
  const isDeveloper =
    templateType === "developer" ||
    templateType === "github" ||
    templateType === "tech";

  const isMinimal =
    templateType === "minimal" ||
    templateType === "ats" ||
    templateType === "classic";

  const isStudent =
    templateType === "student" ||
    templateType === "fresher";

  const isExecutive =
    templateType === "executive" ||
    templateType === "corporate";

  const isCreative =
    templateType === "creative" ||
    templateType === "bold";

  const paperStyle = {
    width: "100%",
    minHeight: "1050px",
    background: isDark ? "#111827" : "#ffffff",
    color: isDark ? "#f9fafb" : "#1f2937",
    padding: isCreative ? "38px" : "45px",
    boxShadow: "0 10px 30px rgba(16,24,40,0.12)",
    borderTop: `6px solid ${accent}`,
    fontFamily:
      templateType === "serif"
        ? "Georgia, serif"
        : "Arial, Helvetica, sans-serif",
  };

  const headerStyle = {
    textAlign:
      isDeveloper || isMinimal || isStudent ? "left" : "center",
    paddingBottom: "18px",
    borderBottom: `2px solid ${accent}`,
  };

  const nameStyle = {
    fontSize: isCreative ? "30px" : "28px",
    fontWeight: "800",
    marginBottom: "5px",
    color: isDark ? "#ffffff" : "#172033",
    letterSpacing: isExecutive ? "2px" : "1px",
    textTransform: isMinimal ? "uppercase" : "none",
  };

  const titleStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: accent,
    marginBottom: "12px",
  };

  const contactStyle = {
    display: "flex",
    justifyContent:
      isDeveloper || isMinimal || isStudent ? "flex-start" : "center",
    flexWrap: "wrap",
    gap: "7px",
    fontSize: "9px",
    color: isDark ? "#d1d5db" : "#475467",
  };

  const sectionTitleStyle = {
    fontSize: "11px",
    letterSpacing: "1px",
    color: accent,
    borderBottom: `1px solid ${
      isDark ? "#374151" : "#d8dee9"
    }`,
    paddingBottom: "5px",
    marginBottom: "10px",
    textTransform: "uppercase",
    fontWeight: "800",
  };

  const paragraphStyle = {
    fontSize: "10px",
    lineHeight: "1.6",
    whiteSpace: "pre-line",
    color: isDark ? "#d1d5db" : "#475467",
  };

  const itemStyle = {
    marginBottom: "15px",
  };

  const itemTitleStyle = {
    fontSize: "11px",
    fontWeight: "700",
    marginBottom: "3px",
  };

  const smallStyle = {
    fontSize: "9px",
    color: isDark ? "#9ca3af" : "#667085",
  };

  const skillBoxStyle = {
    display: "inline-block",
    padding: "4px 8px",
    margin: "3px",
    background: isDark ? "#1f2937" : `${accent}12`,
    color: accent,
    borderRadius: isDeveloper ? "2px" : "5px",
    fontSize: "9px",
    border: `1px solid ${accent}35`,
  };

  const allSkills = [
    skills.programming,
    skills.frontend,
    skills.backend,
    skills.database,
    skills.tools,
    skills.other,
  ].filter(Boolean);

  return (
    <div className="preview-wrapper">

      {/* Preview Header */}
      <div className="preview-header">
        <div>
          <span>LIVE PREVIEW</span>
          <h2>
            {selectedTemplate
              ? selectedTemplate.name
              : "Resume Preview"}
          </h2>
        </div>

<button
  className="preview-download"
  onClick={downloadPDF}
>
  Download PDF
</button>
      </div>

      {/* Resume */}
      <div style={paperStyle}>

        {/* HEADER */}
        <div style={headerStyle}>

          <h1 style={nameStyle}>
            {personal.fullName || "Your Name"}
          </h1>

          <h2 style={titleStyle}>
            {personal.title || "Software Developer"}
          </h2>

          <div style={contactStyle}>
            {personal.email && (
              <span>{personal.email}</span>
            )}

            {personal.phone && (
              <span>{personal.phone}</span>
            )}

            {personal.location && (
              <span>{personal.location}</span>
            )}
          </div>

          <div
            style={{
              ...contactStyle,
              marginTop: "5px",
            }}
          >
            {personal.linkedin && (
              <span>{personal.linkedin}</span>
            )}

            {personal.github && (
              <span>{personal.github}</span>
            )}

            {personal.portfolio && (
              <span>{personal.portfolio}</span>
            )}
          </div>
        </div>

        {/* SUMMARY */}
        {resumeData.summary && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Professional Summary
            </h3>

            <p style={paragraphStyle}>
              {resumeData.summary}
            </p>
          </section>
        )}

        {/* SKILLS */}
        {allSkills.length > 0 && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Skills
            </h3>

            <div>
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  style={skillBoxStyle}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {experience.some(
          (exp) =>
            exp.company ||
            exp.position ||
            exp.description
        ) && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Experience
            </h3>

            {experience.map((exp, index) => {
              if (
                !exp.company &&
                !exp.position &&
                !exp.description
              ) {
                return null;
              }

              return (
                <div
                  className="resume-item"
                  style={itemStyle}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <h4 style={itemTitleStyle}>
                        {exp.position || "Position"}
                      </h4>

                      <strong
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {exp.company}
                      </strong>
                    </div>

                    <span style={smallStyle}>
                      {exp.startDate}
                      {exp.startDate &&
                        exp.endDate &&
                        " - "}
                      {exp.endDate}
                    </span>
                  </div>

                  {exp.location && (
                    <div
                      style={{
                        ...smallStyle,
                        marginTop: "3px",
                      }}
                    >
                      {exp.location}
                    </div>
                  )}

                  {exp.description && (
                    <p
                      style={{
                        ...paragraphStyle,
                        marginTop: "5px",
                      }}
                    >
                      {exp.description}
                    </p>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* PROJECTS */}
        {projects.some(
          (project) =>
            project.name ||
            project.description
        ) && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Projects
            </h3>

            {projects.map((project, index) => {
              if (
                !project.name &&
                !project.description
              ) {
                return null;
              }

              return (
                <div
                  key={index}
                  style={itemStyle}
                >
                  <h4 style={itemTitleStyle}>
                    {project.name ||
                      "Project Name"}
                  </h4>

                  {project.technologies && (
                    <div
                      style={{
                        color: accent,
                        fontSize: "9px",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      {project.technologies}
                    </div>
                  )}

                  {project.description && (
                    <p style={paragraphStyle}>
                      {project.description}
                    </p>
                  )}

                  {(project.github ||
                    project.live) && (
                    <div
                      style={{
                        marginTop: "5px",
                        fontSize: "9px",
                        color: accent,
                      }}
                    >
                      {project.github &&
                        `GitHub: ${project.github}`}

                      {project.github &&
                        project.live &&
                        "  |  "}

                      {project.live &&
                        `Live: ${project.live}`}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* EDUCATION */}
        {education.some(
          (edu) =>
            edu.degree ||
            edu.institution
        ) && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Education
            </h3>

            {education.map((edu, index) => {
              if (
                !edu.degree &&
                !edu.institution
              ) {
                return null;
              }

              return (
                <div
                  key={index}
                  style={itemStyle}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <h4
                        style={itemTitleStyle}
                      >
                        {edu.degree ||
                          "Degree"}
                      </h4>

                      <strong
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {edu.institution}
                      </strong>
                    </div>

                    <span style={smallStyle}>
                      {edu.startYear}
                      {edu.startYear &&
                        edu.endYear &&
                        " - "}
                      {edu.endYear}
                    </span>
                  </div>

                  {edu.location && (
                    <div
                      style={{
                        ...smallStyle,
                        marginTop: "3px",
                      }}
                    >
                      {edu.location}
                    </div>
                  )}

                  {edu.percentage && (
                    <div
                      style={{
                        fontSize: "9px",
                        color: accent,
                        marginTop: "3px",
                      }}
                    >
                      Score: {edu.percentage}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* ACHIEVEMENTS */}
        {resumeData.achievements && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Achievements
            </h3>

            <p style={paragraphStyle}>
              {resumeData.achievements}
            </p>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {resumeData.certifications && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Certifications
            </h3>

            <p style={paragraphStyle}>
              {resumeData.certifications}
            </p>
          </section>
        )}

        {/* ADDITIONAL */}
        {(resumeData.additional?.languages ||
          resumeData.additional?.interests) && (
          <section className="resume-section">
            <h3 style={sectionTitleStyle}>
              Additional Information
            </h3>

            {resumeData.additional?.languages && (
              <p style={paragraphStyle}>
                <strong>Languages:</strong>{" "}
                {resumeData.additional.languages}
              </p>
            )}

            {resumeData.additional?.interests && (
              <p style={paragraphStyle}>
                <strong>Interests:</strong>{" "}
                {resumeData.additional.interests}
              </p>
            )}
          </section>
        )}

      </div>
    </div>
  );
}

export default ResumePreview;