import { Link } from "react-router-dom";
import { Post } from "../../../models/post";

// Type definition for PostItem params
type PostItemProps = {
  postDetails: Post;
};

function PostItem({ postDetails }: PostItemProps) {
  return (
    // rendering post details data
    <tr>
      <td className="w-1/6 h-[50px]">
        {/* Button to navigate to details page */}
        <Link
          to={`post/` + postDetails.id}
          className="text-center p-5 block w-full h-full hover:bg-green-700 text-lg font-semibold bg-white"
        >
          {postDetails.id}
        </Link>
      </td>
      <td className="p-2 text-start w-1/4 text-lg bg-white border-yellow-500 border-2">
        {postDetails.title}
      </td>
      <td className="p-2 text-start w-1/2 text-lg bg-white border-yellow-500 border-2">
        {postDetails.body}
      </td>
    </tr>
  );
}

export default PostItem;
