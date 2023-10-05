type propType = {
  open: boolean;
  onclose: () => void;
  info: any;
};

export const ModalEmail: React.FC<propType> = ({ open, onclose, info }) => {
  return (
    <div className="w-full">
      <div
        className={`fixed inset-0 flex justify-center items-center
       transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={` rounded-lg shadow p-6 transition-all w-3/6 border-black border-4 dark:border-gray-300 bg-gray-400 dark:bg-gray-900
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
            <div className="grid grid-cols-4 gap-4 w-full dark:text-gray-100 text-sm ">
              <div>
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
                  <h2 className="">Grupo de correo</h2>
                  <p className="w-90">{info.group_email}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Nombre</h2>
                  <p className="text-gray-600 w-48">{info.name}</p>
                </div>
                <div className="relative mb-2 ">
                  <h2 className="">Correos Notificación</h2>
                  <p className="text-gray-600 w-full">{info.email_notification}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Orden de Cambio</h2>
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
    </div>
  );
};
