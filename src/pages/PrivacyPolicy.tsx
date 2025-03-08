/* eslint-disable @typescript-eslint/no-explicit-any */
// COMPONENTS
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Policy from "../components/Policy";
import WrapperLayout from "../components/WrapperLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../Constants/config";

const PrivacyPolicy = () => {
    const [privacyPolicy, setPrivacyPolicy] = useState<TPolicyData>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/api/privacyPolicies`);
            const data = await response.json();
            setPrivacyPolicy(data.docs[0]);
        }
        fetchData();
    }, [])

    if (privacyPolicy)
        return (
            <Layout>
                <Navbar />
                <WrapperLayout>
                    <Policy header="Privacy Policy" policy={privacyPolicy} />
                </WrapperLayout>
                <Footer />
            </Layout>
        );
};

export default PrivacyPolicy;

type TPolicyData = {
    content: Array<{
        subtitle: string;
        content: any;
    }>;
    date: Date;
};