import logo from "../assets/images/logo_white.png";
import Youtube from "../assets/images/socials/Youtube.png";
import Instagram from "../assets/images/socials/Instagram.png";
import LinkedIn from "../assets/images/socials/LinkedIn.png";
import X from "../assets/images/socials/X.png";

const Footer = () => {
	return (
		<footer className=" bg-primaryShades-600 text-white py-6">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
				<div className="flex items-center mb-4 lg:mb-0">
					<img src={logo} alt="Logo" className="h-20 mr-3" />
				</div>
				<div className="flex justify-center items-center flex-col">
					<h1 className="text-2xl ">Follow Us!</h1>
					<div className="flex items-center mb-4 border-t border-white">
						<a href="https://www.youtube.com">
							<img
								src={Youtube}
								alt="YoutubeLink"
								className="h-14"
							/>
						</a>
						<a href="https://www.X.com">
							<img src={X} alt="XLink" className="h-14" />
						</a>
						<a href="https://www.Instagram.com">
							<img
								src={Instagram}
								alt="InstagramLink"
								className="h-14"
							/>
						</a>
						<a href="https://www.LinkedIn.com">
							<img
								src={LinkedIn}
								alt="LinkedInLink"
								className=" h-14"
							/>
						</a>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
						Contact Support
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
