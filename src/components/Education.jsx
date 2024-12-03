function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <div className="education-item">
        <div className="education-details">
          <h2>Computer Engineering Technology - Computer Science</h2>
          <h3>
            Algonquin College
            <br />
            Ottawa, Ontario
          </h3>
          <p>January 2023 - December 2025</p>
          <ul>
            <li>GPA: 3.76 / 4.0</li>
            <li>
              Dean&apos;s Honours List: Winter 2023, Spring 2023, Fall 2023,
              Spring 2024
            </li>
            <li>
              Coursework: Object-Oriented Programming, Network Programming
              Basics, Operating System Fundamentals (GNU/Linux), Data
              Structures, Processor Architecture, C Language, Web Programming,
              Compilers, C++ Programming, Java Application Programming,
              Numerical Computing
            </li>
          </ul>
        </div>
        <img
          className="ac-logo"
          src="./assets/images/ac-logo.png"
          alt="Algonquin College logo"
        />
      </div>
    </div>
  );
}

export default Education;

// ToDo
// background, School, program, dates, gpa, honours, relevant coursework, projects
