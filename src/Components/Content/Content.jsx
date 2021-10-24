import './Content.css'
import React from 'react';




const Content = () => {



    return(
        <React.Fragment>
        <section className="grid">
            <div className="col-span-1 bg-transparent relative h-96 pr-2">
                <div className="relative ml-8 mt-20 w-64 h-64 rounded-full bg-black transform rotate-custom">
                    <div className="absolute transform border-2 border-gray-800 first-figure rounded-full bg-blue-300 w-64 h-64 "></div> 
                    <div className="absolute transform border-2 border-gray-800 second-figure rounded-full bg-yellow-500 w-64 h-64"></div>
                    <div className="absolute transform border-2 border-gray-800 third-figure rounded-full bg-blue-300 w-64 h-64  "></div>
                    <button className="circle-shadow absolute bg-gray-600 w-48 h-48 ml-8 mt-8 rounded-full" >sadklkj</button> 
                </div>
                <div className="bg-blue-500 w-2/3 h-80 absolute top-0 right-8 opacity-50"></div>
                <div className="bg-pink-400 w-2/3 h-80 absolute top-0 right-8 opacity-50 mr-8 mt-16"></div>
                <div className="bg-purple-400 w-2/3 h-80 absolute top-0 right-8 opacity-50 mr-20 mt-32"></div>
            </div>
        </section>
        <section className="grid grid-cols-4 pt-20">
            <div className="col-span-3 bg-blue-200 h-56"></div>
            <div className="col-span-1 bg-blue-400 h-56"></div>
            <div className="col-span-4 bg-pink-300 h-64"></div>
        </section>
        </React.Fragment>
    );
}

export { Content };