// IMAGES
import logo from "../assets/images/logo.png"; // Adjust the path as needed
import x from "../assets/images/x.png";
import linkedin from "../assets/images/linkedIn.png";
import { useEffect, useState } from "react";
import { API_URL } from "../Constants/config";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../navigation/routes";

const Footer = () => {

    const navigate = useNavigate();
    const [subscriber, setSubscriber] = useState<string>('');

    useEffect(() => {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    }, []);

    const handleSubscribe = async () => {
        try {
            const req = await fetch(`${API_URL}/api/subscribers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: subscriber }),
            })
            const data = await req.json();

            new Notification("Subscription", {
                body: data.message ? data.message : data.errors[0].data[0].message,
            });

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <footer className="bg-[#0B0B0B] pt-12 border-t-[1px] border-t-[#FFFFFF29]">
            <div className="xl:w-[83%] lg:w-[95%] md:w-[95%] w-[95%] mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-start">
                {/* Column 1 - Logo, Newsletter Subscription */}
                <div className="xl:w-[20.9rem] lg:w-[20.9rem] md:w-[18.9rem] w-auto sm:col-span-3 lg:col-span-1">
                    {/* Increased the column span for small screens */}
                    <img src={logo} alt="Company Logo" className="xl:w-[15rem] lg:w-[15rem] md:w-[15rem] w-[10rem] mb-6" />
                    <p className="text-blue-500 text-[1rem] font-light mb-4 text-left">Subscribe to our Newsletter!</p>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="email"
                            className="xl:w-[98%] lg:w-[98%] md:w-[98%] w-[80%] p-3 border border-[#393939] bg-[#1A1A1A] text-white placeholder-gray-500 rounded-md"
                            placeholder="Enter your email"
                            aria-label="Email input for newsletter subscription"
                            value={subscriber}
                            onChange={(e) => setSubscriber(e.target.value)}
                        />
                        <p className="text-sm font-extralight text-gray-400 mt-2 text-left">
                            We'll send newsletters once a week. No spam, we hate that too!
                        </p>
                        <button
                            onClick={handleSubscribe}
                            className="bg-white text-black h-[2.1rem] text-[1rem] rounded-xl hover:bg-gray-200 w-[6.9rem] mt-4"
                            aria-label="Subscribe to newsletter"
                        >
                            Subscribe
                        </button>
                    </div>
                    {/* Social Media Icons in One Row */}
                    <div className="flex md:space-x-4 space-x-7 mt-6">
                        <a href="https://x.com/KingitL532" aria-label="Visit X">
                            <img src={x} alt="X" className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/company/kingit-labs/" aria-label="Visit LinkedIn">
                            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                        </a>
                    </div>
                </div>

                <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:mt-0 lg:mt-0 md:mt-0 mt-10 xl:gap-[10rem] lg:gap-[6rem] md:gap-[2rem] gap-[3rem]">
                    {/* Column 2 - Services */}
                    <div className="sm:col-span-1 lg:col-span-1 flex flex-col justify-start items-start">
                        <h3 className="text-white text-[1.5rem] font-light mb-4">Services</h3>
                        <ul className="mt-2 space-y-[1rem] flex flex-col justify-start items-start">
                            <li className="text-sm font-extra light text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.SERVICES.POC.PATH)} >POC</li>
                            <li className="text-sm font-extra light text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.SERVICES.MVP.PATH)}>MVP</li>
                            <li className="text-sm font-extra light text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.SERVICES.FDP.PATH)}>Full Development</li>
                            <li className="text-sm font-extra light text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.SERVICES.SUPPORT.PATH)}>Support Services</li>
                        </ul>
                    </div>

                    {/* Column 3 - Portfolio */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <h3 className="text-white text-[1.5rem] font-light mb-4 flex flex-col justify-start items-start">Portfolio</h3>
                        <ul className="mt-2 space-y-[1rem] flex flex-col justify-start items-start">
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="https://www.firefliestoken.com/" target="_blank">Firefiles</Link>
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="https://www.sharkroll.io/" target="_blank">Sharkroll</Link>
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="https://www.vestagroup.io/" target="_blank">Vesta</Link>
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="http://Casino.sharkroll.io" target="_blank">CasilNeo</Link>
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="#">Aurum Vestra</Link>
                            <Link className="text-sm font-extra text-[#A7A7A7]" to="https://t.me/JollyWhaleOfficial/32" target="_blank">JollyWhale</Link>
                        </ul>
                    </div>

                    {/* Column 4 - Company */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <h3 className="text-white text-[1.5rem] font-light mb-4 flex flex-col justify-start items-start">Company</h3>
                        <ul className="mt-2 space-y-[1rem] flex flex-col justify-start items-start">
                            <li className="text-sm font-extra text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.BLOG.PATH)}>Blogs</li>
                            <li className="text-sm font-extra text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.COMPANY.PATH)}>About Us</li>
                            <li className="text-sm font-extra text-[#A7A7A7] cursor-pointer">Careers</li>
                            <li className="text-sm font-extra text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.POLICY.PRIVACYPOLICY.PATH)}>Privacy Policy</li>
                            <li className="text-sm font-extra text-[#A7A7A7] cursor-pointer" onClick={() => navigate(ROUTES.POLICY.COOKIEPOLICY.PATH)}>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* HR Line and Footer Text */}
            <div className="w-full flex justify-center items-center">
                <p className="mt-[4rem] xl:w-[80%] lg:w-[95%] md:w-[95%] w-[95%] border-t-[1px] border-t-[#FFFFFF29] self-center"></p>
            </div>
            <div className="text-center text-[#A7A7A7] text-sm mb-[1.5rem] mt-[1rem]">King IT Labs @2025</div>
        </footer>
    );
};

export default Footer;
