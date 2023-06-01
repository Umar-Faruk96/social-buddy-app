import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SinglePost from "./components/SinglePost/SinglePost";

function App() {
  //? set router for the application
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/posts/:postId", element: <SinglePost /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
