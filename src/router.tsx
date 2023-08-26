import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./component/layout/home-layout";
import HomePage from "./page/home";
import Ranking from "./component/ranking";
import Collections from "./component/collections";
import Topics from "./component/topics";
import SearchPage from "./page/search";
import SearchLayout from "./component/layout/search-layout";
import DetailUserLayout from "./component/layout/detail-layout";
import DetailUserPage from "./page/detail/detail-user";

export const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
    ],
  },
  {
    path: "search",
    element: <SearchLayout />,
    children: [
      {
        path: ":qSearch",
        element: <SearchPage />,
      },
      {
        path: "users/:qSearch",
        element: <SearchPage />,
      },
      {
        path: "collections/:qSearch",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "users",
    element: <DetailUserLayout />,
    children: [
      {
        path: ":username",
        element: <DetailUserPage />,
      },
    ],
  },
]);
