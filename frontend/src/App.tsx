import { lazy, Suspense } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Dashboard from "./routes/Dashboard";
import About from "./routes/About";
import { Spinner } from "./components/misc/Spinner";
const Charts = lazy(() => import("./routes/Charts"));

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route
            path="charts"
            element={
              <Suspense fallback={<Spinner />}>
                <Charts />
              </Suspense>
            }
          />
          <Route path="*" element={<div>No Match</div>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
