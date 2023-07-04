import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserState } from "./context/user-context";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
import React, { Suspense } from "react";
import Loader from "./components/Loader";
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const NavBar = React.lazy(() => import("./components/NavBar"));
function App() {
  const { user } = UserState();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <div className="App">
        <Suspense fallback={<Loader />}>
          {user && (
            <div className="navbar">
              <NavBar />
            </div>
          )}
          <div className="main">
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/home" element={<HomePage />} exact />
            </Routes>
          </div>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
