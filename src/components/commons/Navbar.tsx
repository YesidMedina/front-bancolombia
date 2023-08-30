const date: Date = new Date();
const now = date.toLocaleTimeString('en-US');

export const Navbar = (props: any) => (


  <div className="">
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
        <a href="/catalogo" className="flex items-center">
          <img src={props.image} className="h-8 mr-3 fill-current dark:bg-gray-600 dark:text-white" alt="Flowbite Logo" />
        </a>
        <div>
        <a className="self-center text-2xl font-semibold whitespace-nowrap text-black shrink mr-30 dark:text-white">
            {props.title}
        </a>
        </div>
        
        <div className="flex items-center">
        <a
            href="/catalogo"
            className=" w-20 text-center py-1 mr-8 bg-yellow-400
            hover:bg-yellow-200 text-gray-500 rounded-lg"
          >
            {props.catalogue}
          </a>
          <a
            href=""
            className="mr-6 text-sm  text-gray-500 hover:underline"
          >
            {now}
          </a>
          <a
            href="/"
            className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
          >
            {props.clouse}
          </a>
        </div>
      </div>
    </nav>
    <nav className=" bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <a
                href={props.link1}
                className="text-white hover:underline"
                aria-current="page"
              >
                {props.menu1}
              </a>
            </li>
            <li>
              <a
                href={props.link2}
                className="text-white hover:underline"
                aria-current="page"
              >
                {props.menu2}
              </a>
            </li>
            <li>
              <a
                href={props.link3}
                className="text-white hover:underline"
                aria-current="page"
              >
                {props.menu3}
              </a>
            </li>
            <li>
              <a
                href={props.link4}
                className="text-white hover:underline"
                aria-current="page"
              >
                {props.menu4}
              </a>
            </li>
            <li>
              <a
                href={props.link5}
                className="text-white hover:underline"
                aria-current="page"
              >
                {props.menu5}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
