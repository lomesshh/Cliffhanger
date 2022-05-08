import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../stylesheets/jobForm.css";
import { UserLoginInitial, SignupSchema } from "../../utility/constants";

const JobForm = () => {
  return (
    <div>
      <div className="form__outer">
        <Formik
          initialValues={UserLoginInitial}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="jobdesc__form">
            <h1 className="form__title">Job Description Form</h1>
            <div className="form__fields">
              <p>Name of Company</p>
              <Field
                type="text"
                className="form__input"
                placeholder="Enter name of company"
                name="companyName"
              />
              <ErrorMessage
                name="companyName"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Company Logo</p>
              <Field
                type="file"
                className="form__input"
                placeholder="Select company logo"
                name="companyLogo"
              />
              <ErrorMessage
                name="companyLogo"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Company Description</p>
              <Field
                as="textarea"
                rows="10"
                className="form__input textarea"
                placeholder="Enter company description"
                name="companyDesc"
              />
              <ErrorMessage
                name="companyDesc"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Job Description</p>
              <Field
                as="textarea"
                rows="10"
                className="form__input textarea"
                placeholder="Enter job description "
                name="jobDesc"
              />
              <ErrorMessage
                name="jobDesc"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Tech stack</p>
              <Field
                type="text"
                className="form__input"
                placeholder="Enter languages seperated by comma"
                name="techStack"
              />
              <ErrorMessage
                name="techStack"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Year of experience needed</p>
              <Field
                type="text"
                className="form__input"
                placeholder="Enter year of experience"
                name="yearofExperience"
              />
              <ErrorMessage
                name="yearofExperience"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Sallary offered</p>
              <Field
                type="text"
                className="form__input"
                placeholder="Enter salary to offered"
                name="salary"
              />
              <ErrorMessage
                name="salary"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Job Location</p>
              <Field
                type="text"
                className="form__input"
                placeholder="Enter office location"
                name="location"
              />
              <ErrorMessage
                name="location"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Work time</p>
              <Field as="select" name="workTime" className="form__input select">
                <option value="">Select a work time</option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
              </Field>
              <ErrorMessage
                name="workTime"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />

              <p>Work mode</p>
              <Field as="select" name="workMode" className="form__input select">
                <option value="">Select a work mode</option>
                <option value="Remote">Remote</option>
                <option value="Office">Office</option>
              </Field>
              <ErrorMessage
                name="workMode"
                render={(msg) => <div className="error__msg">{msg}</div>}
              />
            </div>
            <button type="submit" className="form__button">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default JobForm;
