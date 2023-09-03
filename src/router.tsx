import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./component/layout/home-layout";
import SearchPage from "./page/search";
import DetailUserPage from "./page/detail-user";
import DetailTopicPage from "./page/detail-topic";
import DetailTopicLayout from "./component/layout/detail-topic-layout";
import CollectionsList from "./component/collections";
import DetailCollectionLayout from "./component/layout/detail-collection-layout";
import DetailCollectionPage from "./page/detail-collection";
import UserLikedPhoto from "./component/userliked";
import TopicsCard from "./component/topics-card";
import HomePage from "./page/home";
import UserCollectionsPhotos from "./component/usercollections";
import HeaderLayout from "./component/layout/header-layout";
import DetailUserLayout from "./component/layout/detail-user-layout";

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
        element: <TopicsCard />,
      },
      {
        path: "collections",
        element: <CollectionsList />,
      },
    ],
  },
  {
    path: "search",
    element: <HeaderLayout />,
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
    element: <HeaderLayout />,
    children: [
      {
        path: ":username",
        element: <DetailUserLayout />,
        children: [
          {
            path: "",
            element: <DetailUserPage />,
          },
          {
            path: "likes",
            element: <UserLikedPhoto />,
          },
          {
            path: "collections",
            element: <UserCollectionsPhotos />,
          },
        ],
      },
    ],
  },
  {
    path: "topics",
    element: <DetailTopicLayout />,
    children: [
      {
        path: ":slug",
        element: <DetailTopicPage />,
      },
    ],
  },
  {
    path: "collections",
    element: <DetailCollectionLayout />,
    children: [
      {
        path: ":id",
        element: <DetailCollectionPage />,
      },
    ],
  },
]);
