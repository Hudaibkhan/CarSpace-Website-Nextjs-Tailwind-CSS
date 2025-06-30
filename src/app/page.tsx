import "../app/globals.css";
import Image from "next/image";
import Cardatailed from "@/components/Hero-Card";

export default function Home(){
    return(
        <div className="home-page bg-white flex flex-col items-center p-[10px]">
            <div className="hero-section h-auto lg:h-screen flex flex-col lg:flex lg:flex-row items-center justify-between gap-5 p-[10px]">
                <div className="hero-left-side flex justify-center 
                max-w-[100%] lg:max-w-[50%] ">
                    <Image
                    src="/hero-section-img.webp"
                    alt="landing page car image"
                    height={400}
                    width={700}
                    className="h-auto max-w-full"
                    />
                </div>
                <div className="hero-right-side flex flex-col gap-[10px] p-[10px] xs:p-[15px] sm:p-5 [border-radius:40px_40px_0px_40px] [box-shadow:0px_0px-20px_#180120] bg-[rgb(5,_38,_53)] 
                max-w-full  sm:max-w-[80%] lg:max-w-[50%] text-white">
                    <h1 className="font-[cursive] xs:text-[35px] text-[20px] font-bold">Discover Your Next Drive with CarSpace</h1>
                    <p className="sm:text-xl xs:text-[14px] text-[14px]">Explore a handpicked selection of the finest cars from around the world. Whether you are looking for the thrill of a sports car, the versatility of an SUV, or the luxury of a high-end model, CarSpace brings you detailed information, images, and prices to help you make the perfect choice. Start your journey with us today and find the car that fits your lifestyle.</p>
                </div>
            </div>
            <Cardatailed 
            headline="Unleash the Power and Thrill of High-Performance Sports Cars"
            description=" Built for thrill-seekers, sports cars deliver an exhilarating blend of power, agility, and breathtaking design. Engineered with lightweight materials, high-performance engines, and aerodynamic shapes, these vehicles are designed to maximize speed and handling. The responsive steering, quick acceleration, and cutting-edge braking systems make each drive a dynamic experience. From iconic coupes to powerful roadsters, sports cars embody the spirit of adventure and innovation. Enjoy unmatched style, advanced driving modes, and the rush of hitting top speeds on both highways and tracks. Every curve and detail reflects a dedication to performance."
            price=" $60,000 - $120,000"
            />
            <Cardatailed 
            headline="Explore the World with Robust and Versatile SUVs"
            description="SUVs are designed for those who crave versatility, space, and reliability. With high ground clearance, robust engines, and all-terrain capability, they are perfect for both urban roads and rugged trails. Families and adventurers alike appreciate their spacious cabins, ample storage, and seating for up to eight passengers. Modern SUVs come equipped with the latest safety features, infotainment systems, and hybrid options for those conscious of fuel economy. Whether you’re embarking on a road trip, tackling rough terrain, or running daily errands, SUVs provide the ideal combination of comfort, strength, and practicality."
            price=" $40,000 - $90,000"
            />
            <Cardatailed 
            headline="Experience Timeless Elegance and Comfort with Luxury Cars"
            description="Luxury cars represent the pinnacle of refinement, where cutting-edge technology and lavish interiors combine to create an unrivaled driving experience. With leather seating, advanced entertainment systems, and meticulous craftsmanship, luxury vehicles cater to those who demand the best. From smooth, quiet rides to adaptive features that anticipate your needs, these cars elevate every journey into a pleasurable escape. Enjoy enhanced safety features, seamless connectivity, and the assurance of premium engineering. Whether you are looking for a grand touring sedan or a luxurious SUV, these cars redefine elegance and comfort." 
            price=" $80,000 - $150,000"
            />
        </div>
    )
}