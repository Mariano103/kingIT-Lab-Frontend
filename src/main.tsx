import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// STYLES
import "./styles/index.css";

// ROUTES
import ROUTES from "./navigation/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path={ROUTES.HOME.PATH} element={<ROUTES.HOME.COMPONENT />} />
                <Route path={ROUTES.COMPANY.PATH} element={<ROUTES.COMPANY.COMPONENT />} />
                <Route path={ROUTES.BLOG.PATH} element={<ROUTES.BLOG.COMPONENT />} />
                <Route path={ROUTES.BLOG.PATH}>
                    <Route index element={<ROUTES.BLOG.COMPONENT />} />
                    <Route path={ROUTES.BLOG_ARTICLE.PATH} element={<ROUTES.BLOG_ARTICLE.COMPONENT />} />
                </Route>

                {/* SERVICES */}
                <Route path={ROUTES.SERVICES.POC.PATH} element={<ROUTES.SERVICES.POC.COMPONENT />} />
                <Route path={ROUTES.SERVICES.MVP.PATH} element={<ROUTES.SERVICES.MVP.COMPONENT />} />
                <Route path={ROUTES.SERVICES.FDP.PATH} element={<ROUTES.SERVICES.FDP.COMPONENT />} />
                <Route path={ROUTES.SERVICES.SUPPORT.PATH} element={<ROUTES.SERVICES.SUPPORT.COMPONENT />} />

                {/* SOLUTION */}
                <Route path={ROUTES.SOLUTION.WHITELABEL.PATH} element={<ROUTES.SOLUTION.WHITELABEL.COMPONENT />} />
                <Route path={ROUTES.SOLUTION.WHITELABEL_DETAIL.PATH} element={<ROUTES.SOLUTION.WHITELABEL_DETAIL.COMPONENT />} />

                {/* PORTFOLIO */}
                <Route path={ROUTES.PORTFOLIO.PATH}>
                    <Route index element={<ROUTES.PORTFOLIO.COMPONENT />} />
                    <Route path={ROUTES.PORTFOLIO_DETAIL.PATH} element={<ROUTES.PORTFOLIO_DETAIL.COMPONENT />} />
                </Route>

                {/* POLICY */}
                <Route path={ROUTES.POLICY.COOKIEPOLICY.PATH} element={<ROUTES.POLICY.COOKIEPOLICY.COMPONENT />} />
                <Route path={ROUTES.POLICY.PRIVACYPOLICY.PATH} element={<ROUTES.POLICY.PRIVACYPOLICY.COMPONENT />} />
            </Routes>
        </Router>
    </StrictMode>
);
