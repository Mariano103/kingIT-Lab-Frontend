import { useNavigate } from "react-router-dom";

// COMPONENTS
import MainHeading from "../MainHeading";
import ROUTES from "../../navigation/routes";
import BlogArticleCard from "./BlogArticleCard";
import { useEffect, useState } from "react";
import { API_URL } from "../../Constants/config";

const OurBlogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState<Array<TBlogData>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL + '/api/blogs/?sort=createdAt');
            const data = await response.json();
            setBlogs(data.docs);
        }
        fetchData();
    }, [])

    // FUNCTIONS
    const reacdArticleHandler = (id: string) => {
        navigate(`${ROUTES.BLOG.PATH}/${id}`);
    };

    if (blogs)
        return (
            <>
                <MainHeading text="Our Blogs" />
                <div className="w-full flex justify-center py-6 px-6">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[1.5rem] gap-y-[4rem]">
                        {blogs.map((item) => {
                            return <BlogArticleCard key={item.id} card={item} onClickReadArticle={() => reacdArticleHandler(item.id)} />;
                        })}
                    </div>
                </div>
                <button className="text-white my-[4rem] self-center w-fit text-[1.125rem] font-medium py-[0.625rem] px-[1rem] border-2 border-white rounded-2xl">
                    Load More
                </button>
            </>
        );
};

export default OurBlogs;

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
