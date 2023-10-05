export const Cards = (props: any) => (
  <div className=" ml-4 py-2">
    <a
      href={props.link}
      className="flex flex-col items-center sm:items-center bg-gray-300 border border-gray-500 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        className="rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg "
        src={props.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-2 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{props.description}</p>
      </div>
    </a>
  </div>
);
