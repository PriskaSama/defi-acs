import cosmonote from "../../assets/img/Cosmonote.svg";
import peinture from "../../assets/img/peinture-verte.svg";
import machine from "../../assets/img/machineaecrire.svg";
import orange from "../../assets/img/orangeblue.svg";
import bureaux from "../../assets/img/bureaux.svg";
import lait from "../../assets/img/boitedelait.svg";




const Portfolio = () => {
return (
    <>
    <section className="bg-bg-portfolio bg-zinc-900">
        <div className="flex justify-center">
            <div className="  ">


        <h1 className="text-white border-b-2 border-orange-500 text-4xl w-24 pb-5" >Porfolio</h1>
        <div className="flex justify-center pt-5  p-1">
           
        <p className="text-white text-start ">Necessitatibus eius consequatur ex aliquid <br /> fuga eum quidem, It doesn’t matter how <br /> great your product or service is if your copy <br /> does not captivate your audience.</p>
            </div>
        </div>
            <div className="">
        </div>
        <div className="grid   " >
            <div className="grid grid-flow-col  ">

            <img src={cosmonote} alt="" />
            <img src={bureaux} alt="" />
            </div>
            <div className="grid grid-flow-col" >

            <img src={peinture} alt="" />
            <img src={lait} alt="" />
            </div>
            <div className="grid grid-flow-col">

            <img src={machine} alt="" />
            <img src={orange} alt="" />
            </div>
        </div>
</div>
    </section>
    </>
)
}

export default Portfolio;