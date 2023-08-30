const date: Date = new Date();
const now = date.toLocaleTimeString('en-US');

export const NavbarHome = (props: any) => (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900" >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/catalogo" className="flex items-center">
            <img src={props.image} className="h-8 mr-3 " alt="Flowbite Logo" />
          </a>
          <div>
          <a className="self-center text-2xl font-semibold whitespace-nowrap text-black shrink mr-48 dark:text-white">
              {props.title}
          </a>
          </div>
          
          <div className="flex items-center">
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
      <nav className="bg-gray-500 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
         
        </div>
      </nav>
    </div>
  );
  