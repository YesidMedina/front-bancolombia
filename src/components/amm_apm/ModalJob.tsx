type propType = {
  open: boolean;
  onclose: () => void;
  info: any;
};

export const ModalJob: React.FC<propType> = ({ open, onclose, info }) => {
  return (
    <div className="w-full">
      <div
        className={`fixed inset-0 flex justify-center items-center
         transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={`rounded-lg shadow p-6 transition-all w-3/6 border-black border-2 dark:border-gray-300 bg-gray-300 dark:bg-gray-900
            ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400
                bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onclose}
          >
            x
          </button>
          <div className="">
            <div className="grid grid-cols-2 gap-2 w-full dark:text-gray-100 text-sm ">
              <div className="relative mb-2">
                <h2 className="">ID </h2>
                {info.maintenance === true ? (
                  <p className="bg-violet-700 rounded-lg w-12 h-6 text-white text-center">
                    {info.id}
                  </p>
                ) : (
                  <p className="bg-green-600 rounded-lg w-12 h-6 text-white text-center">
                    {info.id}
                  </p>
                )}
              </div>
              <div className="relative mb-2">
                <h2 className="">Isiries</h2>
                <p className="w-90">{info.isiries}</p>
              </div>

              <div className="relative mb-2">
                <h2 className="">Job</h2>
                <p className="text-gray-600 w-48">{info.job}</p>
              </div>
              <div className="relative mb-2 ">
                <h2 className="">Sub sistema</h2>
                <p className="text-gray-600 w-full">{info.subsistem}</p>
              </div>

              <div className="relative mb-2">
                <h2 className="">Instancias</h2>
                <p className="text-gray-600">{info.instances}</p>
              </div>
              <div className="relative mb-2">
                <h2 className="">Afectación instacias</h2>
                <p className="text-gray-600">{info.instances_affectation}</p>
              </div>

              
                <div className="relative mb-2">
                  <h2 className="">Nombre menú</h2>
                  <p className="text-gray-600">{info.name_menu}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Group rise</h2>
                  <p className="text-gray-600">{info.group_rise}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Id device</h2>
                  <p className="text-gray-600">{info.id_divice}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Menú chksys</h2>
                  <p className="text-gray-600">{info.menu_chksys}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">N. Orden</h2>
                  <p className="text-gray-600">{info.order_oc}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Ultima Actualización</h2>
                  <p className="text-gray-600">{info.updated_at}</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
