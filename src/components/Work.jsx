function Work() {
  return (
    <div className="work-container" id="work">
      <h1>Work</h1>
      <div className="work-item">
        <div className="work-details">
          <h2>Student Tester</h2>
          <h3>
            Algonquin College
            <br />
            Ottawa, Ontario
          </h3>
          <p>September 2024 - December 2024</p>
          <ul>
            <li>
              Enhanced user experience by creating 200+ test cases to validate
              student portal functionality, ensuring system reliability.
            </li>
            <li>
              Identified and documented 100+ critical bugs, enabling rapid
              resolution and system improvements.
            </li>
            <li>
              Developed a comprehensive testing guide for new team members,
              increasing onboarding efficiency.
            </li>
            <li>
              Led cross-team collaboration meetings, improving alignment and
              communication on testing goals.
            </li>
          </ul>
        </div>
        <img
          className="ac-logo"
          src="./assets/images/ac-logo.png"
          alt="Algonquin College logo"
        />
      </div>
      <div className="work-item">
        <div className="work-details">
          <h2>Application Developer</h2>
          <h3>
            Financial Transactions and Reports Analysis Centre of Canada
            <br />
            Ottawa, Ontario
          </h3>
          <p>January 2024 - April 2024</p>
          <ul>
            <li>
              Automated document scanning with a custom Java application,
              reducing task time by 95%.
            </li>
            <li>
              Resolved 100+ codebase issues, boosting system stability and
              minimizing client-side errors.
            </li>
            <li>
              Designed and executed 50+ test cases for client form validation,
              improving accuracy and reducing errors by 10%.
            </li>
            <li>
              Supported team troubleshooting efforts, fostering collaboration
              and enhancing team productivity.
            </li>
          </ul>
        </div>
        <img
          className="FINTRAC-logo"
          src="./assets/images/fintrac-logo.png"
          alt="FINTRAC logo"
        />
      </div>
    </div>
  );
}

export default Work;
