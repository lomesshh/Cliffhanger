import React from "react";
import { allApplicants } from "../../utility/constants";
import "../../stylesheets/allApplicants.css";

const AllApplicants = () => {
  return (
    <div className="all__applicants">
      <h1 className="heading">All Applicants</h1>
      <main className="hb--main sm-s">
        {allApplicants.map((element, index) => {
          return (
            <div className="job" key={element.id}>
              <div className="candidate__info">
                <div className="candidate__img">
                  <img src={element.profileImg} alt="profile__img" />
                </div>
                <div className="candidate__details">
                  <span>{element.candidateName}</span>
                  <a href={`mailto:${element.email}`}>
                    <span>{element.email}</span>
                  </a>
                  <a href={`tel:${element.phNumber}`}>
                    <span>{element.phNumber}</span>
                  </a>
                </div>
                <div>
                  <a target="_blank" href={element.resumeLink}>
                    <button className="resume__buttom">View Resume</button>
                  </a>
                </div>
              </div>
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
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AllApplicants;
