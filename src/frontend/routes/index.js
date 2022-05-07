import { Routes, Route } from 'react-router-dom';
import Applicant from '../pages/applicant';
import Landing from '../pages/landing';

// Routes
export const LANDING = '/';
export const APPLICANT = '/applicant';

export const availableRoutes = (
  <Routes>
    <Route path={LANDING} element={<Landing />} />
    <Route path={APPLICANT} element={<Applicant />} />
  </Routes>
);
