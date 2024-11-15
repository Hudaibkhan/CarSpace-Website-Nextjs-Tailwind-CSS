import Image from "next/image";
interface CarDetailProps {
    name: string;
    engine: string;
    transmission: string;
    speed: string;
    features: string[];
    image:string;
}

const CarDetail= ({ name, engine, transmission, speed, features ,image}:CarDetailProps) => {
    return (
        <div className="car-detail bg-[#f1f1f1] text-[#333] [border-radius:15px] [box-shadow:0px_0px_20px_rgba(221,_18,_18,_0.1)] md:p-5 xs:p-[15px] p-[10px]
        mx-[auto] my-[20px] text-center flex flex-col md:flex md:flex-row justify-around w-full md:w-[90%] max-w-[800px] ">
            <div>
                <Image
                src={image}
                alt="luxury car images"
                height={300}
                width={400}
                className="car-image w-full max-w-[400px] h-auto mb-[15px] [border-radius:40px] hover:[box-shadow:0px_0px_10px_black]"/>
            </div>
            <div className="car-detailed flex flex-col gap-[2px]">
                <h2 className="md:text-2xl xs:text-[22px] text-xl 
                 text-[#222] font-bold">{name}</h2>
                <p className="text-sm"><strong>Engine:</strong> {engine}</p>
                <p className="text-sm"><strong>Transmission:</strong> {transmission}</p>
                <p className="text-sm"><strong>Top Speed:</strong> {speed}</p>
                <h3 className="xs:text-xl text-lg font-bold">Features:</h3>
                <ul className="xs:text-[16px] text-[14px] list-none">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarDetail;
