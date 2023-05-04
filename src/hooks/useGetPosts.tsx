/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../models/post";
import { BASE_URL, POSTS_API, PAGE_SIZE } from "../constants";

function useGetPosts(pageNumber: number = 1) {
  // Declaring state variables
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to get posts data
  const getPosts = async () => {
    setIsLoading(true);

    // Calling API
    const postsList = await axios.get(
      `${BASE_URL}${POSTS_API}?_start=${
        (pageNumber - 1) * PAGE_SIZE
      }&_limit=${PAGE_SIZE}`
    );

    if (postsList && postsList.data) {
      setPosts(postsList.data);
    }
    setIsLoading(false);
  };

  // Listening to page changes
  useEffect(() => {
    if (pageNumber && !isLoading) {
      getPosts();
    }
  }, [pageNumber]);

  return {
    isLoading: isLoading,
    pageNumber: pageNumber,
    posts: posts,
  };
}

export default useGetPosts;
