import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import FacilitatorDashboard from './pages/facilitator/FacilitatorDashboard';
import CoordinatorDashboard from './pages/coordinator/CoordinatorDashboard';
import TPODashboard from './pages/tpo/TPODashboard';
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard';
import LibraryDashboard from './pages/library/LibraryDashboard';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import SupportDashboard from './pages/support/SupportDashboard';
import EAAdminDashboard from './pages/eaAdmin/EAAdminDashboard';
import EASuperAdminDashboard from './pages/eaSuperAdmin/EASuperAdminDashboard';
import CentreHeadDashboard from './pages/centreHead/CentreHeadDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import PlaceholderDashboard from './pages/common/PlaceholderDashboard';
import { ROLES } from './roles';

const App = () => {
  const { currentRole } = useSelector(state => state.user);
  const authRoles = ROLES.filter(r => r !== 'Guest');

  const dashboards = {
    Admin: <AdminDashboard />,
    Student: <StudentDashboard />,
    Faculty: <FacultyDashboard />,
    Facilitator: <FacilitatorDashboard />,
    Coordinator: <CoordinatorDashboard />,
    TPO: <TPODashboard />,
    Recruiter: <RecruiterDashboard />,
    Library: <LibraryDashboard />,
    Finance: <FinanceDashboard />,
    Support: <SupportDashboard />,
    EAAdmin: <EAAdminDashboard />,
    EASuperAdmin: <EASuperAdminDashboard />,
    CentreHead: <CentreHeadDashboard />,
  };

  return (
    <Router>
      {/* show header/footer only when not logged in */}
      {currentRole === null && <Header />}

      {currentRole === null ? (
        /* login & registration routes */
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />
          {authRoles.map(role => (
            <Route
              key={role}
              path={`/${role}login`}
              element={<LoginPage role={role} />}
            />
          ))}
          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        /* dashboard for authenticated users */
        dashboards[currentRole] || <PlaceholderDashboard role={currentRole} />
      )}

      {currentRole === null && <Footer />}
    </Router>
  );
};

export default App;
