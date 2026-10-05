import React from "react";

function Home({ onStart }) {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <div className="brand">

          <div className="brand-icon">
            AI
          </div>

          <div>
            <h2>AI Resume Builder</h2>
            <span>Professional Resume Creator</span>
          </div>

        </div>

        <div className="nav-links">
          <span>Templates</span>
          <span>ATS Checker</span>
          <span>AI Tools</span>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            🚀 Build your career with confidence
          </div>

          <h1>
            Create a Professional
            <span> Resume in Minutes</span>
          </h1>

          <p>
            Create a modern, professional and ATS-friendly resume
            using our simple step-by-step resume builder.
          </p>

          <button
            className="primary-button"
            onClick={onStart}
          >
            Create My Resume
            <span>→</span>
          </button>


          <div className="hero-features">

            <div>
              <strong>✓</strong>
              ATS Friendly
            </div>

            <div>
              <strong>✓</strong>
              Professional Design
            </div>

            <div>
              <strong>✓</strong>
              Easy PDF Download
            </div>

          </div>

        </div>


        {/* RESUME MOCKUP */}
        <div className="hero-preview">

          <div className="mock-resume">

            <div className="mock-header">

              <div className="mock-avatar"></div>

              <div>
                <h3>VINEET SHARMA</h3>
                <p>Software Developer</p>
              </div>

            </div>

            <div className="mock-line"></div>


            <h4>PROFESSIONAL SUMMARY</h4>

            <div className="mock-text"></div>
            <div className="mock-text"></div>
            <div className="mock-text short"></div>


            <h4>TECHNICAL SKILLS</h4>

            <div className="mock-skills">

              <span>Java</span>
              <span>React</span>
              <span>SQL</span>
              <span>Git</span>

            </div>


            <h4>PROJECTS</h4>

            <div className="mock-text"></div>
            <div className="mock-text"></div>
            <div className="mock-text short"></div>


            <h4>EDUCATION</h4>

            <div className="mock-text"></div>
            <div className="mock-text short"></div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section">

        <h2>
          Everything You Need to Build a Great Resume
        </h2>

        <div className="feature-grid">


          <div className="feature-card">

            <div className="feature-icon">
              📝
            </div>

            <h3>
              Easy Step-by-Step Form
            </h3>

            <p>
              Enter your personal information, education,
              skills, projects and experience through a
              simple guided process.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              👀
            </div>

            <h3>
              Live Resume Preview
            </h3>

            <p>
              See your resume update instantly while
              entering your information.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🎨
            </div>

            <h3>
              Professional Templates
            </h3>

            <p>
              Choose from multiple modern and
              ATS-friendly resume designs.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              AI Powered
            </h3>

            <p>
              Improve your resume summary, skills and
              job-specific content using AI.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section">

        <h2>
          Create Your Resume in 4 Simple Steps
        </h2>

        <div className="how-grid">

          <div className="how-card">
            <div>01</div>
            <h3>Enter Information</h3>
            <p>
              Add your personal details, education,
              skills and experience.
            </p>
          </div>

          <div className="how-card">
            <div>02</div>
            <h3>Choose Template</h3>
            <p>
              Select the resume design that matches
              your career profile.
            </p>
          </div>

          <div className="how-card">
            <div>03</div>
            <h3>Improve with AI</h3>
            <p>
              Generate professional summaries and
              improve your resume content.
            </p>
          </div>

          <div className="how-card">
            <div>04</div>
            <h3>Download Resume</h3>
            <p>
              Download your professional resume
              as a PDF.
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="home-footer">

        <div>
          <strong>AI Resume Builder</strong>
          <p>
            Build professional resumes faster.
          </p>
        </div>

        <p>
          © 2026 AI Resume Builder. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;