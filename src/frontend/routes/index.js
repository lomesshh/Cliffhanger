import { Routes, Route } from 'react-router-dom';
import Applicant from '../pages/applicant';

// Routes
export const APPLICANT = '/applicant';

export const availableRoutes = (
  <Routes>
    <Route path={APPLICANT} element={<Applicant />} />
  </Routes>
);
