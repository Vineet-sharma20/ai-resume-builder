import React, { useState } from "react";

function TemplateSelection({
  resumeData,
  selectedTemplate,
  onSelect,
  onBack,
}) {
  const [category, setCategory] = useState("All");

  const templates = [
    // ATS
    {
      id: 1,
      name: "ATS Classic",
      category: "ATS",
      type: "ats",
      color: "#2563eb",
      description: "Clean single-column ATS-friendly resume.",
    },
    {
      id: 2,
      name: "ATS Professional",
      category: "ATS",
      type: "ats",
      color: "#0f766e",
      description: "Professional layout with restrained colors.",
    },
    {
      id: 3,
      name: "Harvard Clean",
      category: "ATS",
      type: "classic",
      color: "#111827",
      description: "Traditional academic and professional style.",
    },
    {
      id: 4,
      name: "Compact ATS",
      category: "ATS",
      type: "minimal",
      color: "#475569",
      description: "Compact layout for one-page resumes.",
    },
    {
      id: 5,
      name: "Corporate Pro",
      category: "ATS",
      type: "corporate",
      color: "#1e3a8a",
      description: "Corporate design for job applications.",
    },

    // MODERN
    {
      id: 6,
      name: "Modern Blue",
      category: "Modern",
      type: "modern",
      color: "#2563eb",
      description: "Modern professional blue accent design.",
    },
    {
      id: 7,
      name: "Modern Teal",
      category: "Modern",
      type: "teal",
      color: "#0f766e",
      description: "Fresh teal accent with modern typography.",
    },
    {
      id: 8,
      name: "Minimalist",
      category: "Modern",
      type: "minimal",
      color: "#111827",
      description: "Simple, elegant and distraction-free.",
    },
    {
      id: 9,
      name: "Elegant Serif",
      category: "Modern",
      type: "serif",
      color: "#7c3aed",
      description: "Elegant typography with a premium feel.",
    },
    {
      id: 10,
      name: "Bold Accent",
      category: "Modern",
      type: "bold",
      color: "#dc2626",
      description: "Strong accent design for confident profiles.",
    },

    // DEVELOPER
    {
      id: 11,
      name: "Developer Pro",
      category: "Developer",
      type: "developer",
      color: "#16a34a",
      description: "Technical layout for software developers.",
    },
    {
      id: 12,
      name: "Developer Dark",
      category: "Developer",
      type: "dark",
      color: "#22c55e",
      description: "Dark developer-inspired professional resume.",
    },
    {
      id: 13,
      name: "GitHub Style",
      category: "Developer",
      type: "github",
      color: "#24292f",
      description: "Developer design inspired by GitHub.",
    },
    {
      id: 14,
      name: "Tech Minimal",
      category: "Developer",
      type: "tech",
      color: "#0891b2",
      description: "Minimal technical resume for engineers.",
    },

    // STUDENT
    {
      id: 15,
      name: "Fresher Focus",
      category: "Student",
      type: "fresher",
      color: "#2563eb",
      description: "Designed for freshers and recent graduates.",
    },
    {
      id: 16,
      name: "Student Projects",
      category: "Student",
      type: "student",
      color: "#9333ea",
      description: "Project-focused design for students.",
    },
    {
      id: 17,
      name: "Graduate Clean",
      category: "Student",
      type: "graduate",
      color: "#0f766e",
      description: "Clean graduate resume with education focus.",
    },

    // EXECUTIVE
    {
      id: 18,
      name: "Executive Navy",
      category: "Executive",
      type: "executive",
      color: "#1e3a8a",
      description: "Premium executive-style professional resume.",
    },
    {
      id: 19,
      name: "Consulting Pro",
      category: "Executive",
      type: "corporate",
      color: "#334155",
      description: "Structured consulting and business layout.",
    },

    // CREATIVE
    {
      id: 20,
      name: "Creative Portfolio",
      category: "Creative",
      type: "creative",
      color: "#db2777",
      description: "Creative layout for designers and portfolios.",
    },
  ];

  const categories = [
    "All",
    "ATS",
    "Modern",
    "Developer",
    "Student",
    "Executive",
    "Creative",
  ];

  const filteredTemplates =
    category === "All"
      ? templates
      : templates.filter(
          (template) => template.category === category
        );

  const selectTemplate = (template) => {
    onSelect(template);
  };

  const getPreviewStyle = (template) => {
    const dark = template.type === "dark";

    return {
      background: dark ? "#111827" : "#ffffff",
      color: dark ? "#f9fafb" : "#172033",
      borderTop: `5px solid ${template.color}`,
    };
  };

  const getHeaderStyle = (template) => {
    const centered =
      template.type === "creative" ||
      template.type === "executive" ||
      template.type === "serif" ||
      template.type === "bold";

    return {
      textAlign: centered ? "center" : "left",
      borderBottom: `1px solid ${template.color}`,
      paddingBottom: "9px",
    };
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#172033",
              fontSize: "30px",
            }}
          >
            Choose Your Resume Template
          </h1>

          <p
            style={{
              margin: "7px 0 0",
              color: "#667085",
            }}
          >
            Select a professional design for your resume.
          </p>
        </div>

        <button
          onClick={onBack}
          style={{
            border: "1px solid #d0d5dd",
            background: "#ffffff",
            color: "#344054",
            padding: "11px 18px",
            borderRadius: "9px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back to Resume
        </button>
      </div>

      {/* Categories */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 25px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((item) => {
          const active = category === item;

          return (
            <button
              key={item}
              onClick={() => setCategory(item)}
              style={{
                border: active
                  ? "1px solid #2563eb"
                  : "1px solid #d0d5dd",
                background: active ? "#2563eb" : "#ffffff",
                color: active ? "#ffffff" : "#344054",
                padding: "9px 17px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Template Grid */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "22px",
        }}
      >
        {filteredTemplates.map((template) => {
          const isSelected =
            selectedTemplate?.id === template.id;

          return (
            <div
              key={template.id}
              style={{
                background: "#ffffff",
                border: isSelected
                  ? `3px solid ${template.color}`
                  : "1px solid #e4e7ec",
                borderRadius: "14px",
                padding: "15px",
                boxShadow: isSelected
                  ? "0 8px 25px rgba(37,99,235,0.15)"
                  : "0 4px 15px rgba(16,24,40,0.06)",
              }}
            >
              {/* Mini Resume */}

              <div
                style={{
                  height: "310px",
                  overflow: "hidden",
                  borderRadius: "7px",
                  padding: "22px",
                  boxSizing: "border-box",
                  ...getPreviewStyle(template),
                }}
              >
                <div style={getHeaderStyle(template)}>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "800",
                      letterSpacing:
                        template.type === "developer"
                          ? "0px"
                          : "1px",
                    }}
                  >
                    {resumeData?.personal?.fullName ||
                      "VINEET SHARMA"}
                  </div>

                  <div
                    style={{
                      fontSize: "8px",
                      marginTop: "4px",
                      color: template.color,
                      fontWeight: "700",
                    }}
                  >
                    {resumeData?.personal?.title ||
                      "SOFTWARE DEVELOPER"}
                  </div>

                  <div
                    style={{
                      fontSize: "6px",
                      marginTop: "6px",
                      opacity: 0.75,
                    }}
                  >
                    engineer@example.com • +91 9876543210
                  </div>
                </div>

                {/* Summary */}

                <div style={{ marginTop: "14px" }}>
                  <div
                    style={{
                      fontSize: "8px",
                      fontWeight: "800",
                      color: template.color,
                      marginBottom: "5px",
                      textTransform: "uppercase",
                    }}
                  >
                    Professional Summary
                  </div>

                  <div
                    style={{
                      height: "7px",
                      background: template.type === "dark"
                        ? "#374151"
                        : "#e5e7eb",
                      borderRadius: "5px",
                      marginBottom: "4px",
                    }}
                  />

                  <div
                    style={{
                      height: "7px",
                      background: template.type === "dark"
                        ? "#374151"
                        : "#e5e7eb",
                      borderRadius: "5px",
                      width: "85%",
                      marginBottom: "4px",
                    }}
                  />

                  <div
                    style={{
                      height: "7px",
                      background: template.type === "dark"
                        ? "#374151"
                        : "#e5e7eb",
                      borderRadius: "5px",
                      width: "70%",
                    }}
                  />
                </div>

                {/* Skills */}

                <div style={{ marginTop: "15px" }}>
                  <div
                    style={{
                      fontSize: "8px",
                      fontWeight: "800",
                      color: template.color,
                      marginBottom: "7px",
                    }}
                  >
                    SKILLS
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "4px",
                    }}
                  >
                    {[
                      "Java",
                      "Python",
                      "React",
                      "SQL",
                      "Git",
                    ].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "6px",
                          padding: "3px 6px",
                          borderRadius:
                            template.type === "developer"
                              ? "2px"
                              : "4px",
                          background:
                            template.type === "dark"
                              ? "#1f2937"
                              : `${template.color}12`,
                          color: template.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}

                <div style={{ marginTop: "15px" }}>
                  <div
                    style={{
                      fontSize: "8px",
                      fontWeight: "800",
                      color: template.color,
                      marginBottom: "7px",
                    }}
                  >
                    PROJECTS
                  </div>

                  <div
                    style={{
                      height: "7px",
                      background:
                        template.type === "dark"
                          ? "#374151"
                          : "#e5e7eb",
                      borderRadius: "5px",
                      marginBottom: "5px",
                    }}
                  />

                  <div
                    style={{
                      height: "7px",
                      background:
                        template.type === "dark"
                          ? "#374151"
                          : "#e5e7eb",
                      borderRadius: "5px",
                      width: "88%",
                    }}
                  />
                </div>

                {/* Education */}

                <div style={{ marginTop: "15px" }}>
                  <div
                    style={{
                      fontSize: "8px",
                      fontWeight: "800",
                      color: template.color,
                      marginBottom: "7px",
                    }}
                  >
                    EDUCATION
                  </div>

                  <div
                    style={{
                      height: "7px",
                      background:
                        template.type === "dark"
                          ? "#374151"
                          : "#e5e7eb",
                      borderRadius: "5px",
                      width: "75%",
                    }}
                  />
                </div>
              </div>

              {/* Template Info */}

              <div style={{ padding: "14px 2px 2px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      color: "#172033",
                      fontSize: "17px",
                    }}
                  >
                    {template.name}
                  </h3>

                  {isSelected && (
                    <span
                      style={{
                        background: "#dcfce7",
                        color: "#15803d",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      Selected
                    </span>
                  )}
                </div>

                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "12px",
                    color: template.color,
                    fontWeight: "600",
                  }}
                >
                  {template.category}
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.5",
                    color: "#667085",
                    minHeight: "36px",
                    margin: "7px 0 12px",
                  }}
                >
                  {template.description}
                </p>

                <button
                  onClick={() => selectTemplate(template)}
                  style={{
                    width: "100%",
                    border: "none",
                    background: isSelected
                      ? "#16a34a"
                      : template.color,
                    color: "#ffffff",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  {isSelected
                    ? "✓ Template Selected"
                    : "Use This Template →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action */}

      {selectedTemplate && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "30px auto 0",
            background: "#ffffff",
            border: "1px solid #e4e7ec",
            borderRadius: "12px",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong>
              Selected: {selectedTemplate.name}
            </strong>

            <div
              style={{
                fontSize: "12px",
                color: "#667085",
                marginTop: "3px",
              }}
            >
              Your resume preview will use this template.
            </div>
          </div>

          <button
            onClick={onBack}
            style={{
              background: "#2563eb",
              color: "#ffffff",
              border: "none",
              padding: "11px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            Continue to Resume →
          </button>
        </div>
      )}
    </div>
  );
}

export default TemplateSelection;