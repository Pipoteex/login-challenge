import moment from "moment";

import { useGetUserData } from "./hooks";
import ImageComponent from "../../components/ImageComponent/ImageComponent";

const Dashboard = () => {
    //HOOKS
    const { userData, isLoadingUserData } = useGetUserData();

    //FUNCTIONS

    if (isLoadingUserData) {
        return <p>Cargado...</p>;
    }
    return (
        <section className="m-[40px]">
            <h3 className="font-[500] text-[20px]">Dashboard</h3>

            <div className="flex flex-col justify-center items-center w-full border-[1px] mt-[40px]">
                <div className="flex w-full bg-gray-300">
                    <div className="w-[30%] text-center border-[1px] p-[15px] font-[500]">
                        Name
                    </div>
                    <div className="w-[30%] text-center border-[1px] p-[15px] font-[500]">
                        Birth Date
                    </div>
                    <div className="w-[40%] text-center border-[1px] p-[15px] font-[500]">
                        Photo
                    </div>
                </div>

                {userData?.users.map((item, key) => {
                    return (
                        <div className="flex w-full" key={key}>
                            <div className="w-[30%] text-center border-[1px]">
                                {item.name}
                            </div>
                            <div className="w-[30%] text-center border-[1px]">
                                {moment(item.birthDate).format("MMMM DD, YYYY")}
                            </div>
                            <div className="w-[40%] border-[1px] flex justify-center">
                                <ImageComponent srcImg={item.photo as string} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Dashboard;
