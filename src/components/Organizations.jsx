import OrganizationPhotoCard from "./OrganizationPhotoCard"
import poorChildrenPhoto from "../assets/images/poor-children.jpg";
const Organizations = () => {


    return (
        <div className="flex items-center justify-center w-full h-full ">
            <div className="w-2/3 h-full text-2xl font-sans grid items-center justify-items-center grid-cols-3 gap-x-5 gap-y-5 p-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <OrganizationPhotoCard
                            key={index}
                            imageLink={poorChildrenPhoto}
                            title={"Help Gaza"}
                            description={"This is a description"}
                            />
                        ))}
            </div>
        </div>
    );
};

export default Organizations;
