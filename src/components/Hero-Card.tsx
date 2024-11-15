import "../app/globals.css";
interface CarDatailed{
  headline:string,
  description:string,
  price:string
}

export default function Cardatailed ({headline,description,price}:CarDatailed) {
  return (
    <div className="hero-car-section flex flex-col gap-[25px] h-auto w-auto 
    p-[30px] [border-radius:100px_100px_0px_100px] mb-[50px] [box-shadow:0px_0px_20px_#180120] bg-[rgb(5,_38,_53)] text-white m-5">
      <h2 className="md:text-[35px] text-[20px]  font-bold text-center">{headline}</h2>
      <p className="description md:text-xl text-base text-center">{description}</p>
      <p className="price text-center text-sm"><span className="md:text-lg text-sm font-bold">Average Price</span>{price}</p> 
    </div>
  );
};
