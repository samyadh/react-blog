import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function Main() {
  return (
    // Main component where all the global imports will go. eg. Modal overlays, Auth Provider, Snackbar/Notifications Provider, etc
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Main;
