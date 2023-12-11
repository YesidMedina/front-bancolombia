import { Link } from "react-router-dom"

export const Cards = (props: any) => (
  <div className="w-[180px] h-[140px] bg-transparent cursor-pointer group perspective ">
    <Link to={props.link}>
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg">
      <div className="absolute backface-hidden w-full h-full border-0 border-gray-400 rounded-md shadow-lg shadow-gray-800">
        <img src={props.image} alt="" className="w-full h-full rounded-md" />
      </div>
      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-800 rounded-xl shadow-lg shadow-gray-800">
        <div className="text-center flex flex-col items-center justify-center h-full  px-2 pb-24 text-gray-300">
          <h1 className="font-semibold text-2xl mt-32 mb-4 text-yellow-500"> {props.title} </h1>
          <p className="mb-2">{props.description}</p>
          
        </div>
      </div>
    </div>
    </Link>
  </div>

  // <div className=" ml-4 py-2">
  //   <a
  //     href={props.link}
  //     className="flex flex-col items-center sm:items-center bg-gray-300 border border-gray-500 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
  //   >
  //     <img
  //       className="rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg "
  //       src={props.image}
  //       alt=""
  //     />
  //     <div className="flex flex-col justify-between p-2 leading-normal">
  //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
  //         {props.title}
  //       </h5>
  //       <p className="mb-3 font-normal text-gray-700 ">{props.description}</p>
  //     </div>
  //   </a>
  // </div>
);
