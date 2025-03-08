// COMPONENTS
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import WrapperLayout from "../components/WrapperLayout";
import ArticleHeading from "../components/BlogArticle/ArticleHeading";
import ArticleContent from "../components/BlogArticle/ArticleContent";
import SimilarArticles from "../components/BlogArticle/SimilarArticles";
import Breadcrumb from "../components/BlogArticle/Breadcrumb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Constants/config";

const BlogArticle = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/api/blogs/` + id);
            const data = await response.json();
            setBlog(data);
        }
        fetchData();
    }, [])

    if (blog)
        return (
            <Layout>
                <Navbar />
                <WrapperLayout>
                    <Breadcrumb text1="Blogs" text2="5 Efficient Rules How to Organize Your Working Place" />
                    <ArticleHeading blog={blog} />
                    <ArticleContent blog={blog} />
                    <SimilarArticles id={blog.id} />
                </WrapperLayout>
                <Footer />
            </Layout>
        );
};

export default BlogArticle;
