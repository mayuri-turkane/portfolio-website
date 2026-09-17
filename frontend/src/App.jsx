import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const AllCertifications = lazy(() => import("./pages/AllCertifications"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-cyan-400 animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/certifications" element={<AllCertifications />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;