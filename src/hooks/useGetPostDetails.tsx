/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../models/post";
import { BASE_URL, POSTS_API } from "../constants";

function useGetPostDetails(postID: string | undefined) {
  // Declaring state variables
  const [postDetails, setPostDetails] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to get post details data
  const getPost = async () => {
    setIsLoading(true);

    // Calling API
    const postsDetailsResult = await axios.get(
      `${BASE_URL}${POSTS_API}/${postID}`
    );

    if (postsDetailsResult && postsDetailsResult.data) {
      setPostDetails(postsDetailsResult.data);
    }
    setIsLoading(false);
  };

  // Listening to PostID Changes
  useEffect(() => {
    if (postID && !isLoading) {
      getPost();
    }
  }, [postID]);

  return {
    isLoading,
    details: postDetails,
  };
}

export default useGetPostDetails;
