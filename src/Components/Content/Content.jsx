import './Content.css'
import React from 'react';
import refugioMolle from '../../Assets/Images/refugioMolle.png';
import homegestionInmo from '../../Assets/Images/homegestionInmo.png';
import logo from '../../Assets/Images/logo.svg';
import angularLogo from '../../Assets/Images/angularLogo.svg';
import nodejsLogo from '../../Assets/Images/nodejsLogo.svg';
import htmlLogo from '../../Assets/Images/htmlLogo.svg';
import bootstrapLogo from '../../Assets/Images/bootstrapLogo.svg';
import tailwindLogo from '../../Assets/Images/tailwindLogo.svg'
import cssLogo from '../../Assets/Images/cssLogo.svg';
import phpLogo from '../../Assets/Images/phpLogo.svg';




const Content = () => {



    return(
        <React.Fragment>
        <section className="grid grid-cols-4">
            <div className="col-span-1 bg-gray-600 mt-0 pr-4 border-solid">
                <div className="bg-gray-300 h-3/5 text-black w-auto h-auto flex flex-col items-center justify-between rounded-br-3xl pt-4 pb-8 px-8">
                    <h1 className="text-center mt-4 text-2xl"> Carlos Andres Pasten Bravo </h1>
                    
                    <div className="text-center">
                        <h4 className="text-2xl">Front-end Developer</h4>
                        <h4 className="text-2xl">Back-end Developer</h4>
                        <h4 className="text-2xl">Analista Programador</h4>
                        <p className='text-justify m-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quia quaerat voluptatum ipsa enim amet veritatis dolore? Sapiente nam accusamus enim in animi corrupti eaque? Architecto vel iusto magni delectus?
                        </p>
                    </div>
                    <div className="text-center">
                        <p> example@example.com</p>
                        <p> https://github.com/MaoParadise </p>
                    </div>
                </div>
                
                
            </div>
            <div className="col-span-3 ">
                <div className="bg-transparent relative h-96 ml-32">
                    
                    <div className="w-full h-80 absolute top-8 right-8 opacity-50">
                        <img className="circle-shadow rounded-2xl object-cover" src={refugioMolle} alt="" />
                    </div>
                    <div className="w-full h-80 absolute top-8 right-8 mr-8 mt-4 opacity-80">
                        <img className="circle-shadow rounded-2xl object-cover" src={homegestionInmo} alt="" />
                    </div>
                    <div className="w-full h-80 absolute top-12 right-8 mr-16 mt-8 opacity-95">
                        <img className="circle-shadow rounded-2xl object-cover" src={refugioMolle} alt="" />
                    </div>
                    <div className="absolute w-32 h-32 bottom-1 right-6 rounded-full transform">
                        <div className="absolute transform border-2  first-figure rounded-full bg-gray-600  w-32 h-32"></div> 
                        <div className="absolute transform border-2  second-figure rounded-full bg-gray-200  w-32 h-32"></div>
                        <div className="absolute transform border-2  third-figure rounded-full bg-gray-200  w-32 h-32 "></div>
                        <button className="absolute circle-shadow bg-gray-600 w-24 h-24 rounded-full top-0 bottom-0 left-0 right-0 m-auto" >sadklkj</button> 
                    </div>
                </div>
                <section className="grid grid-cols-4 mt-4 pt-8 bg-gray-300 rounded-tl-3xl">
                <div className="col-span-4 h-full">
                    <div className="bg-gray-600 h-full ml-8 mr-7 rounded-3xl flex flex-col justify-between text-center  border-solid border-gray-300 border-2">
                        <div className="flex justify-between">
                            <ul className="flex flex-col justify-between w-1/2 mt-2 ml-4 border-gray-300 border-r-2">
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90 pr-4" src={logo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-100 m-auto"> 55% </div>
                                            <div style={{width: '55%'}}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                               
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90 pr-4" src={angularLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-100 m-auto"> 65% </div>
                                            <div style={{width: '65%'}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrapjustify-center bg-green-500">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90 pr-4" src={nodejsLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-800 m-auto"> 45% </div>
                                            <div style={{width: '40%'}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-green-500">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90 pr-4" src={bootstrapLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-200 m-auto"> 60% </div>
                                            <div style={{width: '60%'}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-green-500">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="flex flex-col justify-between w-1/2 mt-2 ml-1">
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90" src={htmlLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1  text-gray-100 m-auto"> 85% </div>
                                            <div style={{width: '85%'}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                                    
                                            </div>
                                        </div>
                                    </div>        
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90" src={cssLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-100 m-auto"> 70% </div>
                                            <div style={{width: '70%'}}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90" src={tailwindLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-800 m-auto"> 45% </div>
                                            <div style={{width: '45%'}}
                                                className="shadow-none flex flex-col  text-center whitespace-nowrap text-white justify-center bg-green-500">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <img className="h-20 w-20 opacity-90" src={phpLogo} alt="react-logo" />
                                        <div className="flex-grow relative overflow-hidden mr-2 h-5 flex rounded-lg font-bold text-md bg-gray-200">
                                            <div className="percen absolute h-full top-0 left-0 right-0 bottom-1 text-gray-100 m-auto"> 75% </div>
                                            <div style={{width: '75%'}}
                                                className="shadow-none flex flex-col  text-center whitespace-nowrap text-white justify-center bg-green-500">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <span className="text-xs text-gray-300"> aclaracion: nadie llega nunca a conocer el 100%, ser desarrollador implica estar en constante proceso de aprendisaje </span>
                    </div>
                </div>
                {/* <div className="col-span-4 h-72">
                    <div className="bg-gray-600 h-full mr-4 rounded-3xl border-solid border-gray-300 border-2"></div>
                </div> */}
                <div className="col-span-4 h-72 my-4">
                    <div className="bg-gray-600 h-full ml-8 mr-7 rounded-3xl border-solid border-gray-300 border-2"></div>
                </div>
                </section>
            </div>
        </section>
        
        </React.Fragment>
    );
}

export { Content };