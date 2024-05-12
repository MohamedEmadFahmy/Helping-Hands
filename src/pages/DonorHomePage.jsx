import PopularCauseCard from "../components/PopularCauseCard";
import TestimonialCard from "../components/TestimonialCard";
import poorChildrenPhoto from "../assets/images/poor-children.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonorHomePage = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const registrationSuccess = searchParams.get("registrationSuccess");

	useEffect(() => {
		if (registrationSuccess === "true") {
			toast.success("Registration Successful");
		}
	}, [registrationSuccess]);

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div
				className="h-[90vh] w-full bg-cover bg-no-repeat flex flex-col justify-center items-center"
				style={{
					backgroundImage: `url(${poorChildrenPhoto})`,
				}}
			>
				<div className="w-full absolute h-[90vh] top-[10vh]  bg-black opacity-25 z-10" />
				<div className="text-white text-5xl font-bold z-20">
					JOIN THE CAUSE
				</div>
				<div className="text-white text-2xl z-20">
					Help children in need
				</div>
			</div>

			<div
				className="h-[50vh] w-full bg-white flex flex-col items-center p-16
			 gap-8"
			>
				<h1 className="text-black text-5xl font-semibold border-b-4 border-primaryShades-500">
					Our Vision
				</h1>

				<div className="w-1/2 text-2xl font-mono">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Itaque alias corporis, quia ex consequatur natus. Eius,
					inventore dolores. Nostrum nemo at impedit est quibusdam
					natus quas voluptatem rem eum error! Odio accusamus vero
					nobis eligendi nam delectus commodi doloribus in aliquid
					architecto. Perspiciatis asperiores hic cumque fugit odit,
					incidunt distinctio.
				</div>
			</div>
			<div className="h-[100vh] w-full bg-secondary flex flex-col items-center p-10 gap-8">
				<h1 className="text-black text-5xl font-semibold border-b-4 border-primaryShades-500">
					Popular Causes
				</h1>

				<div className="w-2/3 h-full text-2xl font-sans grid items-center justify-items-center grid-cols-3 gap-x-5 gap-y-5 p-4">
					{/* Adding 9 elements to fill the 3x3 grid */}
					{Array.from({ length: 6 }).map((_, index) => (
						<PopularCauseCard
							key={index}
							imageLink={poorChildrenPhoto}
							title={"Help Gaza"}
							description={"This is a description"}
						/>
					))}
				</div>
			</div>

			<div
				className="h-[80vh] w-full bg-white flex flex-col items-center p-8
			 gap-8"
			>
				<h1 className="text-black text-5xl font-semibold border-b-4 border-primaryShades-500">
					Testimonials
				</h1>

				<div className="w-full h-full flex items-center justify-center gap-8">
					<TestimonialCard
						imageLink={poorChildrenPhoto}
						rating={5}
						description={
							"This is a placeholder description. This app changed my life forever This is a placeholder description. This app changed my life forever. This app changed my life forever. This app changed my life forever"
						}
						title={"Mohamed"}
					/>
					<TestimonialCard
						imageLink={poorChildrenPhoto}
						rating={5}
						description={
							"This is a placeholder description. This app changed my life forever This is a placeholder description. This app changed my life forever. This app changed my life forever. This app changed my life forever"
						}
						title={"Mohamed"}
					/>
					<TestimonialCard
						imageLink={poorChildrenPhoto}
						rating={5}
						description={
							"This is a placeholder description. This app changed my life forever This is a placeholder description. This app changed my life forever. This app changed my life forever. This app changed my life forever"
						}
						title={"Mohamed"}
					/>
				</div>
			</div>
		</div>
	);
};

export default DonorHomePage;
