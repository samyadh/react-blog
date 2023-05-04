import { useEffect, useState } from "react";
import useGetPosts from "../../../hooks/useGetPosts";
import PostItem from "../../widgets/post-item/post-item";
import { Post } from "../../../models/post";
import Pagination from "../../widgets/pagination/pagination";
import Header from "../../widgets/header/header";
import NoData from "../../widgets/no-data/no-data";

function PostsList() {
  // Declaring state variables
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>();

  // Calling get posts API using custom hook
  const postsListDetails = useGetPosts(page);

  // Updating state when new data is received from API
  useEffect(() => {
    if (!postsListDetails.isLoading) {
      console.log(postsListDetails);
      setPosts(postsListDetails.posts);
    }
  }, [postsListDetails]);

  return (
    <div className="absolute w-full h-full bg-yellow-400">
      {/* Header component */}
      <Header title={"Blog Posts"} />
      {/* Page specific HTML */}
      <table>
        <thead className="bg-teal-500 text-xl">
          <th></th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {/* Looping through the posts received from API */}
          {posts &&
            posts.map((postEntry: Post) => (
              <PostItem postDetails={postEntry} />
            ))}
          {!posts || (posts.length === 0 && <NoData />)}
        </tbody>
      </table>
      {/* Pagiation component */}
      <Pagination
        previousBtnProps={{ disabled: page <= 1 }}
        onPreviousClick={() => {
          setPage(page - 1);
        }}
        nextBtnProps={{ disabled: page >= 20 }}
        onNextClick={() => {
          setPage(page + 1);
        }}
      >
        <span className="text-2xl font-bold">
          {postsListDetails.pageNumber}
        </span>
      </Pagination>
    </div>
  );
}

export default PostsList;
