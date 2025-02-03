import HomePage from "./components/HomePage";
import StockPage from "./components/StockPage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<StockPage />} />
    </>
  ),
  { basename: "/react-stock-tracker" }
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
