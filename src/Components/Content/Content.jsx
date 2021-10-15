import './Content.css'
import { React } from 'react';




const Content = () => {



    return(
        <section className="grid ">
            <div className="col-span-1"></div>
                
            <div className="relative ml-24 w-64 h-64 rounded-full bg-black transform rotate-custom">
                <div className="absolute transform border-2 border-gray-800 first-figure rounded-full bg-yellow-500 w-64 h-64 "></div> 
                <div className="absolute transform border-2 border-gray-800 second-figure rounded-full bg-yellow-500 w-64 h-64"></div>
                <div className="absolute transform border-2 border-gray-800 third-figure rounded-full bg-yellow-500 w-64 h-64  "></div>
                <button className="absolute bg-blue-600 w-48 h-48 ml-8 mt-8 rounded-full" >sadklkj</button> 
            </div>
            
        </section>
        // <div className="second-circle bg-red-400 h-44 w-44 m-4 "> </div>
    );
}

export { Content };