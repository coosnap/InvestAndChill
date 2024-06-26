import { getArticleDetail } from "@/api/article";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";

function Post() {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    const postItem = await getArticleDetail(id);
    setPostDetail(postItem);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen text-center bg-[#EBEDF4]">
      <div className="container mx-auto">
        <p className="text-4xl font-semibold py-6">{postDetail.title}</p>
        <span className="text-xl" dangerouslySetInnerHTML={{ __html: postDetail.content }} />
      </div>
    </div>
  );
}

export default Post;