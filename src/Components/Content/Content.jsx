import './Content.css'
import React from 'react';
import refugioMolle from '../../Assets/Images/refugioMolle.png';
import homegestionInmo from '../../Assets/Images/homegestionInmo.png';
import logo from '../../Assets/Images/logo.svg';
import angularLogo from '../../Assets/Images/angularLogo.svg';
import nodejsLogo from '../../Assets/Images/nodejsLogo.svg';
import htmlLogo from '../../Assets/Images/htmlLogo.svg';
import cssLogo from '../../Assets/Images/cssLogo.svg';
import phpLogo from '../../Assets/Images/phpLogo.svg';




const Content = () => {



    return(
        <React.Fragment>
        <section className="grid grid-cols-4">
            <div className="col-span-1 bg-gray-600 mt-4 ml-4  rounded-3xl border-solid border-gray-400 border-2">
                <h1 className="text-center mt-4 font-bold text-2xl"> Carlos Andres Pasten Bravo </h1>
                <div className="relative ml-8 mt-4 w-64 h-64 rounded-full bg-black transform rotate-custom">
                    <div className="absolute transform border-2 border-gray-800 first-figure rounded-full bg-blue-300 w-64 h-64 "></div> 
                    <div className="absolute transform border-2 border-gray-800 second-figure rounded-full bg-yellow-500 w-64 h-64"></div>
                    <div className="absolute transform border-2 border-gray-800 third-figure rounded-full bg-blue-300 w-64 h-64  "></div>
                    <button className="circle-shadow absolute bg-gray-600 w-48 h-48 ml-8 mt-8 rounded-full" >sadklkj</button> 
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">Front-end Developer</h4>
                    <h4 className="font-bold text-2xl">Back-end Developer</h4>
                    <h4 className="font-bold text-2xl">Analista Programador</h4>
                    <p className='text-justify m-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quia quaerat voluptatum ipsa enim amet veritatis dolore? Sapiente nam accusamus enim in animi corrupti eaque? Architecto vel iusto magni delectus?
                    </p>
                </div>
                <div className="text-center">
                    <p> example@example.com</p>
                    <p> https://github.com/MaoParadise </p>
                </div>
                
            </div>
            <div className="col-span-3">
                <div className="bg-transparent relative h-96">
                    <div className="w-5/6 h-80 absolute top-8 right-8 opacity-50">
                        <img className="circle-shadow rounded-2xl border-white border border-solid object-cover" src={refugioMolle} alt="" />
                    </div>
                    <div className="w-5/6 h-80 absolute top-8 right-8 mr-8 mt-4 opacity-80">
                        <img className="circle-shadow rounded-2xl border-white border border-solid object-cover" src={homegestionInmo} alt="" />
                    </div>
                    <div className="w-5/6 h-80 absolute top-12 right-8 mr-16 mt-8 opacity-95">
                        <img className="circle-shadow rounded-2xl border-white border border-solid object-cover" src={refugioMolle} alt="" />
                    </div>
                </div>
                <section className="grid grid-cols-4 pt-8">
                <div className="col-span-3 h-56">
                    <div className="bg-gray-600 h-full ml-8 mr-4  rounded-3xl flex justify-between border-solid border-gray-300 border-2">
                        <ul className="flex flex-col justify-between w-1/2 my-4 ml-4 border-gray-300 border-r-2">
                            <li>
                                <img className="h-14 w-14 opacity-90" src={logo} alt="react-logo" />
                            </li>
                            <li>
                                <img className="h-14 w-14 opacity-90" src={angularLogo} alt="react-logo" />
                            </li>
                            <li>
                                <img className="h-14 w-14 opacity-90" src={nodejsLogo} alt="react-logo" />
                            </li>
                        </ul>
                        <ul className="flex flex-col justify-between w-1/2 my-4 ml-1">
                            <li>
                                <img className="h-14 w-14 opacity-90" src={htmlLogo} alt="react-logo" />
                            </li>
                            <li>
                                <img className="h-14 w-14 opacity-90" src={cssLogo} alt="react-logo" />
                            </li>
                            <li>
                                <img className="h-14 w-14 opacity-90" src={phpLogo} alt="react-logo" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 h-56">
                    <div className="bg-gray-600 h-full ml-8 mr-4 rounded-3xl border-solid border-gray-300 border-2"></div>
                </div>
                <div className="col-span-4 h-64 mt-8">
                    <div className="bg-gray-600 h-full ml-8 mr-4 rounded-3xl border-solid border-gray-300 border-2"></div>
                </div>
                </section>
            </div>
        </section>
        
        </React.Fragment>
    );
}

export { Content };