import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/dashboard.css";
import "../../stylesheets/jobListing.css";
import { jobs, months } from "../../utility/constants";

const RecruiterDashboard = () => {
  const [indexToShow, setIndexToShow] = useState(-1);

  const handleShow = (index) => {
    if (indexToShow === index) {
      setIndexToShow(-1);
    } else {
      setIndexToShow(index);
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/addjob">Add job</Link>
          </li>
          <li>
            <Link to="/allapplicants">View Applicants</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="dashboard__img">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651922439/jobrec_inw4mn.png"
            alt="dashboard__img"
          />
        </div>
        <h1 className="your__jobs">Your Listed Jobs</h1>
        <main className="hb--main sm-s">
          {jobs.map((element, index) => {
            return (
              <div className="job" key={element.id}>
                <div className="job__header">
                  <section className="flex-ct-st">
                    <img
                      src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651925126/download_hdoaxm.png"
                      alt="Company logo"
                      className="job__logo"
                    />
                    <section>
                      <h1 className="job__role">{element.role}</h1>
                      <h2 className="job__location">
                        {element.name}, {element.location}
                      </h2>
                    </section>
                  </section>
                  <span
                    className={`job__type ${!element.remote ? "inoffice" : ""}`}
                  >
                    {!element.remote ? "In-Office" : "Remote"}
                  </span>
                </div>
                <div className="job__tech">
                  {element.techstack.map((e, i) => {
                    return <span key={e + i}>{e}</span>;
                  })}
                </div>
                <div className="job__details">
                  <table className="job__table">
                    <thead>
                      <tr className="job__table__title">
                        <th>Offered Salary</th>
                        <th>Required Experience</th>
                        <th>Job Type</th>
                        <th>Working Hours</th>
                        {element.duration && <th>Duration</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="job__table__row">
                        <td>{element.salary}</td>
                        <td>{element.experience ?? "Not Required"}</td>
                        <td>{element.type}</td>
                        <td>9 Hours per Day</td>
                        {element.duration && <td>{element.duration}</td>}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className={`job__description ${
                    indexToShow === index ? "show" : ""
                  }`}
                >
                  <h1 className="text sm sb mg--half">About Us</h1>
                  <p>{element.description}</p>
                  <h1 className="text sm sb mg--half">Job Description</h1>
                  <ul>
                    {element.jd.map((elem, idx) => {
                      return <li key={elem + idx}>{elem}</li>;
                    })}
                  </ul>
                </div>
                <div className="job__footer">
                  <section className="job__match">
                    <h1 className="job__match__title sm sb">
                      <i className="fa-regular fa-thumbs-up"></i>
                      Profile Matched
                    </h1>
                    <h1 className="job__match__date sm sb">
                      Apply By {months[element.applyBy.getMonth() - 1]}
                      {element.applyBy.getDate()},
                      {element.applyBy.getFullYear()}
                    </h1>
                  </section>
                  <section className="job__btn">
                    <button
                      className="btn btn--auth"
                      onClick={handleShow.bind(this, index)}
                    >
                      {indexToShow === index ? "Show Less" : "Show More"}
                    </button>
                    <button className="btn btn--auth--solid">
                      Edit <i class="fa-solid fa-pencil"></i>
                    </button>
                  </section>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
