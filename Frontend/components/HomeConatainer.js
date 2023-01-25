import Card from "./Card";
import Map from "./Map";


const HomeConatainer = ({ props }) => {
    return (
        <>
            <div class="grid lg:grid-cols-2 lg:gap-4">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
                    {props.getHouses.map((house, index) => { return <Card houseDetails={house} idx={index} key={index}></Card> })}
                </div>
                <div className="ml-10 mt-10 lg:h-[100%]  sm:h-[100%] mb-5 rounded-xl shadow-lg relative">
                    <Map houseDetails={props.getHouses}></Map>
                </div>
            </div>
        </>

    );
};

export default HomeConatainer;
