import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";
import RootLayout from "./components/RootLayout";
import Statistics from "./pages/Statistics";
import AppliedJobs from "./pages/AppliedJobs";
import Blog from "./pages/Blog";
import JobDetils from "./components/JobDetils";

// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/job/:id",
        element: <JobDetils />,
        loader: () => fetch("/jobs.json"),
      },
      // Route for unknown paths
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* Render the Outlet component to render child routes */}
      <Outlet />
    </RouterProvider>
  );
};

export default App;
