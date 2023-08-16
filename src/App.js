import "./App.css";
import routes from "./routes";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}>
    //       <Route index element={<HomePage />} />
    //       <Route index element={<HomePage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
