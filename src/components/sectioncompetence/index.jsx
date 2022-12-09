 import techimg from "../../assets/img/techimg.svg";
 const Competence = () => {
    return (
        <body className="bg-bg-compet h-screen bg-black" >
            
        <div className="">
            <div className="">

            <h1  className="text-white text-center justify-center text-2xl  pt-44">
           
            Compétences

            </h1>
            </div>
            <p className="text-center text-white text-xs pt-10">
            It doesn’t matter how great your product or service <br />
            is if your copy does not captivate your audience.
            </p>
            
        </div>
        <div className="grid grid-cols-4  text-white text-center pt-10 mt-32">
            <div className="text-center justify-center">
            <img src={techimg} className="text-black" />
        <h2 className="text-center justify-center">
            Technique
        </h2>
        <p >
        Voluptatum deleniti atque <br /> corrupti quos dolores et <br /> quas molestias excepturi
        </p>
        </div>
        <div>
        <h2 className="text-center justify-center">
        Gestion de projet
        </h2>
        <p>
        Duis aute irure dolor in <br /> reprehenderit in voluptate <br /> velit esse cillum dolore
        </p>
            </div>
        <div>
        <h2 className="text-center justify-center">
        Management
        </h2>
        <p>
        Excepteur sint occaecat <br /> cupidatat non proident, sunt <br /> in culpa qui officia
        </p>
        </div>
        <div>
        <h2 className="text-center justify-center">
            Langues
        </h2>
        <p>
        At vero eos et accusamus et <br /> iusto odio dignissimos <br /> ducimus qui blanditiis
        </p>
        </div>
        </div>
        </body>
    )
 }
 
 
 
 
 
 
 
 
 
 
 
 export default Competence;