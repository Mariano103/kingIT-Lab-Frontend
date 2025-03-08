/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ROUTES from "../../navigation/routes";

// COMPONENTS
import Card from "./Card";
import { useEffect, useState } from "react";
import { API_URL } from "../../Constants/config";

const SimilarArticles = (param: { id: string }) => {
    const id = param.id;
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState<Array<TBlogData>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL + '/api/blogs/?sort=createdAt');
            const data = await response.json();
            const otherBlogs = data.docs.filter((project: any) => project.id !== id);
            setBlogs(otherBlogs.slice(0, 4));
        }
        fetchData();
    }, [])

    // FUNCTIONS
    const reacdArticleHandler = (id: string) => {
        navigate(`${ROUTES.BLOG.PATH}/${id}`);
    };

    if (blogs)
        return (
            <div className="mb-[4rem]">
                <p className="text-white text-[1.75rem] font-medium mb-[1.5rem]">You May Also Like</p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-0 lg:gap-[1.5rem] md:gap-[1.5rem] gap-[1.5rem]">
                    {blogs.map((blog) => {
                        return <Card key={blog.id} card={blog} onClickReadArticle={reacdArticleHandler} />;
                    })}
                </div>
            </div>
        );
};

export default SimilarArticles;

// TYPES
type TBlogData = {
    id: string;
    title: string;
    readTime: string;
    image: { url: string };
    shares: number;
    desc: string;
    name: string;
    avatar: { url: string };
    date: Date;
};
