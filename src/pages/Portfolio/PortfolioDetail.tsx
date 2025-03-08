// COMPONENTS
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import FormSection from "../../components/Services/FormSection";
import PortfolioProjects from "../../components/Portfolio/PortfolioDetails/PortfolioProjects";
import TopSection from "../../components/Portfolio/PortfolioDetails/TopSection";
import KeyFeatures from "../../components/Portfolio/PortfolioDetails/KeyFeatures";
import OurSolution from "../../components/Portfolio/PortfolioDetails/OurSolution";
import StackUsed from "../../components/Portfolio/PortfolioDetails/StackUsed";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../Constants/config";

const PortfolioDetail = () => {

    const { id } = useParams();
    const [project, setProject] = useState<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/api/projects/` + id);
            const data = await response.json();
            setProject(data);
        }
        fetchData();
    }, [])

    if (project)
        return (
            <Layout>
                <Navbar />
                <TopSection project={project} />
                <KeyFeatures project={project} />
                <OurSolution project={project} />
                <StackUsed project={project} />
                <FormSection className="!mt-20" />
                <PortfolioProjects id={project.id} />
                <Footer />
            </Layout>
        );
};

export default PortfolioDetail;
