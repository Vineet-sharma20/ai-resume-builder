import React from "react";

function Home({ onStart }) {
  return (
    <div className="home-page">

      <nav className="home-navbar">
        <div className="brand">
          <div className="brand-icon">AI</div>

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
            Build a modern, professional and ATS-friendly resume
            with our easy step-by-step resume builder.
          </p>

          <button className="primary-button" onClick={onStart}>
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
              Easy to Download
            </div>
          </div>

        </div>

        <div className="hero-preview">

          <div className="mock-resume">

            <div className="mock-header">
              <div className="mock-avatar"></div>

              <div>
                <h3>Your Name</h3>
                <p>Software Developer</p>
              </div>
            </div>

            <div className="mock-line"></div>

            <h4>PROFESSIONAL SUMMARY</h4>

            <div className="mock-text"></div>
            <div className="mock-text short"></div>

            <h4>SKILLS</h4>

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

          </div>

        </div>

      </section>

      <section className="features-section">

        <h2>Everything You Need to Build a Great Resume</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Easy Step-by-Step Form</h3>
            <p>
              Enter your information through a simple guided process.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👀</div>
            <h3>Live Preview</h3>
            <p>
              See your resume update while you enter your information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Professional Templates</h3>
            <p>
              Choose from multiple professional resume designs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Powered</h3>
            <p>
              Improve your summary, skills and resume content using AI.
            </p>
          </div>

        </div>

      </section>

      <footer className="home-footer">
        <p>© 2026 AI Resume Builder. Build your future.</p>
      </footer>

    </div>
  );
}

export default Home;