import { Routes, Route } from "react-router-dom";
import RecruiterDashboard from "../pages/recruiter/recruiterDashboard";
import JobForm from "../pages/recruiter/jobForm";
import AllApplicants from "../pages/recruiter/allApplicants";

// Routes
export const LANDING = "/";
export const JOBFORM = "/addjob";
export const ALLAPPLICANTS = "/allapplicants";

const AvailableRoutes = () => {
  return (
    <Routes>
      <Route path={LANDING} exact element={<RecruiterDashboard />} />
      <Route path={JOBFORM} element={<JobForm />} />
      <Route path={ALLAPPLICANTS} element={<AllApplicants />} />
    </Routes>
  );
};

export default AvailableRoutes;
