import DonorTypeCard from "../components/DonorTypeCard";

const SelectDonorTypePage = () => {
	return (
		<>
			<div className="w-screen h-screen bg-slate-100 flex flex-col items-center justify-around">
				<h1 className="text-4xl font-bold text-slate-900 mt-5">
					What type of donations do you want to do?
				</h1>

				<div className="grid grid-cols-2 grid-rows-2 gap-10">
					<DonorTypeCard
						onHover={() => alert("hovered")}
						className="col-span-1 row-span-1"
						imageLink={"/src/assets/images/items.png"}
					></DonorTypeCard>
					<DonorTypeCard
						className="col-span-2 row-span-1"
						imageLink={"/src/assets/images/delivery.png"}
					></DonorTypeCard>
					<DonorTypeCard
						className="col-span-1 row-span-2"
						imageLink={"/src/assets/images/doctor.png"}
					></DonorTypeCard>
					<DonorTypeCard
						className="col-span-2 row-span-2"
						imageLink={"/src/assets/images/teacher.png"}
					></DonorTypeCard>
				</div>
				<button className="text-xl font-bold bg-slate-500 p-4 rounded-md text-white hover:shadow-lg hover:bg-slate-600">
					Continue
				</button>
			</div>
		</>
	);
};

export default SelectDonorTypePage;
