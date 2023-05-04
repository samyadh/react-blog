import { createBrowserRouter } from "react-router-dom";
import PostsList from "./components/pages/posts-list/posts-list";
import PostsDetails from "./components/pages/post-details/post-details";

export const router = createBrowserRouter([
  // Landing on postlists page
  {
    path: "/",
    element: <PostsList />,
  },
  // Routing to post details page when link is visited
  {
    path: "post/:postId",
    element: <PostsDetails />,
  },
]);
