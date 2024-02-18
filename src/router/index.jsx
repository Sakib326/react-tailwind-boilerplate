import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../modules/home"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen">
          {/* <Spin size="large" /> */}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
