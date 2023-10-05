type propType = {
    open: boolean;
    onclose: () => void;
    info: any;
  };
  
  export const ModalBaseLine: React.FC<propType> = ({ open, onclose, info }) => {
    return (
      <div className="w-full">
        <div
          className={`fixed inset-0 flex justify-center items-center
         transition-colors ${open ? "visible" : "invisible"}`}
          onClick={onclose}
        >
          <div
            className={` rounded-lg shadow p-6 transition-all w-3/6 border-black border-2 dark:border-gray-300 bg-gray-400 dark:bg-gray-900
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
              <div className="w-full dark:text-gray-100 text-sm ">
                <div>
                  
                  <div className="relative mb-2">
                    <h2 className="">Nombre Linea Base</h2>
                    <p className="text-gray-600 w-90">{info.name_baseline}</p>
                    
                  </div>
                 
                  <div className="relative mb-2">
                    <h2 className="">Tipo Configuración</h2>
                    <p className="text-gray-600 w-48">{info.type_configuration}</p>
                  </div>
                  <div className="relative mb-2 ">
                    <h2 className="">Item Configuración</h2>
                    <p className="text-gray-600 w-full">{info.item_configuration}</p>
                  </div>
  
                  <div className="relative mb-2">
                    <h2 className="">Mayor</h2>
                    <p className="text-gray-600">{info.major}</p>
                  </div>
                  <div className="relative mb-2">
                    <h2 className="">Crítico</h2>
                    <p className="text-gray-600">{info.critical}</p>
                  </div>
                  <div className="relative mb-2">
                    <h2 className="">Grupo Soporte</h2>
                    <p className="text-gray-600">{info.group_support}</p>
                  </div>
                  <div className="relative mb-2">
                    <h2 className="">Impacto</h2>
                    <p className="text-gray-600">{info.impact}</p>
                  </div>
                  <div className="relative mb-2">
                    <h2 className="">Detalle</h2>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  