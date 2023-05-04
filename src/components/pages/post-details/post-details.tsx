import { useState, useEffect } from "react";
import { Post } from "../../../models/post";
import Header from "../../widgets/header/header";
import PostItem from "../../widgets/post-item/post-item";
import useGetPostDetails from "../../../hooks/useGetPostDetails";
import { Link, useParams } from "react-router-dom";
import NoData from "../../widgets/no-data/no-data";

function PostDetails() {
  // Declaring state variables
  const [postData, setPostData] = useState<Post>();
  // Getting data from route params
  let { postId } = useParams();
  // Calling API to get fresh post data, this is dependent on business logic.
  // We can pass data via params, however its good to get fresh data from server to keep the data relavent
  const postDataReceived = useGetPostDetails(postId);
  // Listening to data received
  useEffect(() => {
    if (!postDataReceived.isLoading && postDataReceived.details) {
      console.log(postDataReceived);
      setPostData(postDataReceived.details);
    }
  }, [postDataReceived]);

  return (
    <div className="absolute w-full h-full bg-yellow-400">
      {/* Header component */}
      <Header title={"Post Detail"} />
      {/* Page specific HTML */}
      <table>
        <thead className="bg-teal-500 text-xl">
          <th></th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {/* Rendering post details */}
          {postData && <PostItem postDetails={postData} />}{" "}
          {!postData && <NoData />}
        </tbody>
      </table>
      {/* Back button */}
      <div className="text-center mt-6">
        <Link to="/" className="text-2xl font-bold">
          &lt; back
        </Link>
      </div>
    </div>
  );
}

export default PostDetails;
