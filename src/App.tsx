import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Local Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home_Page";
import LoginPage from "./pages/Login_Page";
import RegisterPage from "./pages/Register_Page";
import PropertyListPage from "./pages/PropertyList_Page";
import ContactPage from "./pages/Contact_Page";
import Error404Page from "./pages/Error404_Page";
import PropertyDetailsPage from "./pages/PropertyDetails_Page";
import UserProfilePage from "./pages/UserProfile_Page";
import AuthContext from "./context/auth_context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header />
      <div role="main" className="main">
        {/* Start */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          {authCtx.isLoggedin && (
            <Route path="register" element={<RegisterPage />} />
          )}

          <Route path="properties" element={<PropertyListPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="propertydetials" element={<PropertyDetailsPage />} />
          {authCtx.isLoggedin && (
            <Route path="profile" element={<UserProfilePage />} />
          )}
        </Routes>
        {/* End */}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
