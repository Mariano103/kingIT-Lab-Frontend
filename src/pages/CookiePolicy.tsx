/* eslint-disable @typescript-eslint/no-explicit-any */
// COMPONENTS
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Policy from "../components/Policy";
import WrapperLayout from "../components/WrapperLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../Constants/config";

const CookiePolicy = () => {
    const [cookiePlocy, setCookiePolicy] = useState<TPolicyData>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/api/cookiePolicies`);
            const data = await response.json();
            setCookiePolicy(data.docs[0]);
        }
        fetchData();
    }, [])

    if (cookiePlocy)
        return (
            <Layout>
                <Navbar />
                <WrapperLayout>
                    <Policy header="Cookie Policy" policy={cookiePlocy} />
                </WrapperLayout>
                <Footer />
            </Layout>
        );
};

export default CookiePolicy;

type TPolicyData = {
    content: Array<{
        subtitle: string;
        content: any;
    }>;
    date: Date;
};