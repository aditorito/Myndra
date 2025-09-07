import React, { Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import Careers from "./pages/Careers.jsx";
import LogIn from "./pages/LogIn.jsx";
import Test from "./pages/Test.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Otpvarification from "./pages/Otpvarification.jsx";


class ErrorBoundary extends React.Component {
  constructor(p) { super(p); this.state = { hasError: false, err: null }; }
  static getDerivedStateFromError(err) { return { hasError: true, err }; }
  componentDidCatch(err, info) { console.error("Render error:", err, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: "ui-monospace, Menlo, Consolas, monospace" }}>
          <h2>Something crashed while rendering this route.</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.err)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/otp" element={<Otpvarification />} />

          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
