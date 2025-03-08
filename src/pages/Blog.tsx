// COMPONENTS
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import OurBlogs from "../components/Blogs/OurBlogs";

const Blog = () => {
    return (
        <Layout>
            <Navbar />
            <OurBlogs />
            <Footer />
        </Layout>
    );
};

export default Blog;
