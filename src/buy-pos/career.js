import React, { useState } from "react";
import Nav from "./navaigationbar";
import { Helmet } from "react-helmet";
import Footor from "./footor";

export default function Career() {
  const [expandedPositions, setExpandedPositions] = useState([]);

  const togglePosition = (position) => {
    if (expandedPositions.includes(position)) {
      setExpandedPositions(expandedPositions.filter((pos) => pos !== position));
    } else {
      setExpandedPositions([...expandedPositions, position]);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Career Opportunities - Billingko | We are currently hiring for
          React.js, Node.js, and Testing roles.
        </title>
        <meta
          name="description"
          content="Join our team and explore exciting career opportunities in React.js, Node.js, and Software Testing roles. Apply now and be a part of our innovative projects!"
        />
      </Helmet>
      <Nav />
      <div className="career-page">
        <h1>Join Our Team</h1>
        <p>
          We are currently hiring for React.js, Node.js, and Testing roles. If
          you are passionate about cutting-edge technologies and enjoy solving
          complex problems, we would love to hear from you.
        </p>
        <h2>Open Positions</h2>
        <ul>
          <li
            className={`position ${
              expandedPositions.includes("React.js Developer") ? "expanded" : ""
            }`}
            onClick={() => togglePosition("React.js Developer")}
          >
            React.js Developer (Remote) experience( 6month /1 year)
            {expandedPositions.includes("React.js Developer") && (
              <div className="position-details">
                <h1>Job Description: React.js Developer</h1>
                <p>
                  We are seeking a skilled and experienced React.js Developer to
                  join our dynamic development team. As a React.js Developer,
                  you will be responsible for designing, developing, and
                  maintaining high-quality web applications using React.js. You
                  will collaborate with cross-functional teams to analyze
                  business requirements, design scalable solutions, and
                  implement robust code.
                </p>
                <h2>Responsibilities:</h2>
                <ul className="jobul">
                  <li>Develop new user-facing features using React.js</li>
                  <li>
                    Build reusable components and front-end libraries for future
                    use
                  </li>
                  <li>
                    Translate designs and wireframes into high-quality code
                  </li>
                  <li>
                    Optimize components for maximum performance across various
                    devices and browsers
                  </li>
                  <li>
                    Collaborate with the design and product teams to iterate on
                    the user interface and user experience
                  </li>
                  <li>
                    Conduct code reviews to ensure code quality, performance,
                    and adherence to coding standards
                  </li>
                  <li>
                    Troubleshoot and debug issues, provide timely resolutions,
                    and perform thorough testing
                  </li>
                  <li>
                    Stay up-to-date with the latest React.js trends and best
                    practices
                  </li>
                  <li>
                    Participate in Agile development processes and contribute to
                    sprint planning and estimation
                  </li>
                </ul>
                <h2>Requirements:</h2>
                <ul className="jobul">
                  <li>
                    Strong proficiency in JavaScript, including ES6+ features
                  </li>
                  <li>
                    Experience working with React.js and its core principles
                  </li>
                  <li>
                    Proficient understanding of HTML5, CSS3, and responsive
                    design
                  </li>
                  <li>
                    Knowledge of RESTful APIs and integrating with backend
                    systems
                  </li>
                  <li>
                    Familiarity with front-end build tools and module bundlers
                    such as Webpack
                  </li>
                  <li>
                    Experience with version control systems (e.g., Git) and
                    collaborative coding workflows
                  </li>
                  <li>
                    Ability to write efficient, scalable, and reusable code
                  </li>
                  <li>Strong problem-solving skills and attention to detail</li>
                  <li>Excellent communication and collaboration skills</li>
                  <li>
                    Bachelor's degree in Computer Science or a related field
                    (preferred)
                  </li>
                </ul>
                <h2>Nice to have:</h2>
                <ul className="jobul">
                  <li>
                    Experience with popular React.js workflows (such as Redux or
                    Context API)
                  </li>
                  <li>
                    Familiarity with server-side rendering (SSR) and/or Next.js
                  </li>
                  <li>
                    Knowledge of testing frameworks (e.g., Jest, Enzyme) for
                    React.js
                  </li>
                  <li>
                    Understanding of web accessibility standards and best
                    practices
                  </li>
                </ul>
                <p>
                  Join our team of passionate developers and work on exciting
                  projects that leverage cutting-edge technologies. If you have
                  a solid foundation in React.js and are eager to contribute to
                  innovative web applications, we would love to hear from you.
                  Apply now and let's build amazing user experiences
                  together!sent cv to billingko1996@gmail.com
                </p>
              </div>
            )}
          </li>
          <li
            className={`position ${
              expandedPositions.includes("Node.js Developer") ? "expanded" : ""
            }`}
            onClick={() => togglePosition("Node.js Developer")}
          >
            Node.js Developer (Remote) experience( 6month /1 year)
            {expandedPositions.includes("Node.js Developer") && (
              <div className="position-details">
                <h1>Job Description: Node.js Developer</h1>
                <p>
                  We are seeking a talented Node.js Developer to join our
                  backend development team. As a Node.js Developer, you will be
                  responsible for designing and developing scalable, efficient,
                  and secure server-side applications using Node.js. You will
                  collaborate with front-end developers, product managers, and
                  other stakeholders to deliver high-quality software solutions.
                </p>
                <h2>Responsibilities:</h2>
                <ul className="jobul">
                  <li>
                    Develop and maintain server-side applications using Node.js
                  </li>
                  <li>
                    Design and implement APIs for web and mobile applications
                  </li>
                  <li>
                    Collaborate with front-end developers to integrate
                    server-side logic with user interfaces
                  </li>
                  <li>
                    Optimize applications for maximum performance and
                    scalability
                  </li>
                  <li>Implement security and data protection measures</li>
                  <li>
                    Participate in code reviews to maintain code quality and
                    ensure best practices
                  </li>
                  <li>
                    Debug and resolve application issues and ensure timely bug
                    fixes
                  </li>
                  <li>
                    Stay updated with the latest trends and best practices in
                    Node.js development
                  </li>
                </ul>
                <h2>Requirements:</h2>
                <ul className="jobul">
                  <li>Strong proficiency in JavaScript and Node.js</li>
                  <li>
                    Experience with Express.js or other Node.js frameworks
                  </li>
                  <li>
                    Knowledge of asynchronous programming and event-driven
                    architecture
                  </li>
                  <li>
                    Understanding of RESTful APIs and microservices architecture
                  </li>
                  <li>
                    Experience with database systems such as MongoDB or MySQL
                  </li>
                  <li>Understanding of version control systems, such as Git</li>
                  <li>
                    Knowledge of server-side templating languages (e.g., EJS,
                    Pug)
                  </li>
                  <li>
                    Familiarity with cloud platforms and services (e.g., AWS,
                    Azure)
                  </li>
                  <li>Strong problem-solving and analytical skills</li>
                  <li>Excellent communication and collaboration abilities</li>
                  <li>
                    Bachelor's degree in Computer Science or a related field
                    (preferred)
                  </li>
                </ul>
                <h2>Nice to have:</h2>
                <ul className="jobul">
                  <li>Experience with Docker and containerization</li>
                  <li>Knowledge of GraphQL and Apollo Server</li>
                  <li>
                    Understanding of DevOps principles and CI/CD pipelines
                  </li>
                  <li>
                    Experience with testing frameworks (e.g., Jest, Mocha)
                  </li>
                </ul>
                <p>
                  Join our team of talented developers and contribute to
                  building robust and scalable backend solutions using Node.js.
                  If you are passionate about backend development and enjoy
                  working in a collaborative environment, we would love to hear
                  from you. Apply now and be a part of our innovative projects!
                  sent cv to billingko1996@gmail.com
                </p>
              </div>
            )}
          </li>
          <li
            className={`position ${
              expandedPositions.includes("Software Testing Engineer")
                ? "expanded"
                : ""
            }`}
            onClick={() => togglePosition("Software Testing Engineer")}
          >
            Software Testing Engineer (Remote) experience( 6month /1 year)
            {expandedPositions.includes("Software Testing Engineer") && (
              <div className="position-details">
                <h1>Job Description: Software Testing Engineer</h1>
                <p>
                  We are seeking a skilled Software Testing Engineer to join our
                  quality assurance team. As a Software Testing Engineer, you
                  will be responsible for designing and executing test plans,
                  identifying and reporting defects, and ensuring the overall
                  quality of our software products. You will work closely with
                  developers, product managers, and other stakeholders to
                  deliver high-quality and reliable software solutions.
                </p>
                <h2>Responsibilities:</h2>
                <ul className="jobul">
                  <li>
                    Design and develop test plans, test cases, and test scripts
                  </li>
                  <li>
                    Execute manual and automated tests to identify defects and
                    ensure functionality
                  </li>
                  <li>
                    Collaborate with cross-functional teams to understand
                    project requirements
                  </li>
                  <li>Perform regression testing and continuous integration</li>
                  <li>
                    Document test results and communicate findings to
                    stakeholders
                  </li>
                  <li>
                    Participate in the identification and resolution of software
                    defects
                  </li>
                  <li>
                    Stay updated with the latest testing tools and methodologies
                  </li>
                </ul>
                <h2>Requirements:</h2>
                <ul className="jobul">
                  <li>
                    Previous experience in software testing or quality assurance
                  </li>
                  <li>
                    Strong knowledge of software testing methodologies and best
                    practices
                  </li>
                  <li>
                    Experience with test automation frameworks (e.g., Selenium,
                    Cypress)
                  </li>
                  <li>Understanding of Agile development methodologies</li>
                  <li>
                    Ability to analyze and interpret technical documentation and
                    requirements
                  </li>
                  <li>Excellent problem-solving and troubleshooting skills</li>
                  <li>Strong attention to detail and accuracy</li>
                  <li>Excellent communication and collaboration abilities</li>
                  <li>
                    Bachelor's degree in Computer Science or a related field
                    (preferred)
                  </li>
                </ul>
                <h2>Nice to have:</h2>
                <ul className="jobul">
                  <li>Experience with performance testing and load testing</li>
                  <li>
                    Knowledge of test management tools (e.g., Jira, TestRail)
                  </li>
                  <li>
                    Understanding of API testing and tools (e.g., Postman)
                  </li>
                  <li>
                    Experience with mobile testing frameworks (e.g., Appium,
                    Espresso)
                  </li>
                </ul>
                <p>
                  Join our dedicated quality assurance team and contribute to
                  ensuring the reliability and quality of our software products.
                  If you have a strong eye for detail and enjoy finding bugs and
                  improving software quality, we would love to hear from you.
                  Apply now and help us deliver exceptional software solutions!
                  sent cv to billingko1996@gmail.com
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
