/* eslint-disable react/prop-types */
const PopularCauseCard = ({ imageLink, title, description }) => {
	return (
		<div className="bg-primary w-full h-full shadow-md border rounded-lg flex flex-col items-center justify-center p-2 hover:scale-105 cursor-pointer relative">
			<div
				className="h-full w-full bg-cover bg-no-repeat rounded-lg "
				style={{
					backgroundImage: `url(${imageLink})`,
				}}
			></div>

			<div
				className={
					"absolute inset-0 p-2 transition-color ease-in-out hover:bg-[rgba(0,0,0,0.5)] rounded-lg	"
				}
			>
				<div
					className={
						"w-full h-full flex items-center justify-center transition-opacity ease-in-out opacity-0 hover:opacity-100"
					}
				>
					<div className="h-full flex flex-col justify-center items-center gap-2">
						<p className="text-2xl text-white">
							{title
								? title
								: "This is a placeholder description"}
						</p>
						<p className="text-lg text-white border-b">
							{description
								? description
								: "This is a placeholder description"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularCauseCard;
