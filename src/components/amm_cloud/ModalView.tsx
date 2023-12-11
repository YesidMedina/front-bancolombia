type propType = {
  open: boolean;
  onclose: () => void;
  info: any;
};

export const ModalView: React.FC<propType> = ({ open, onclose, info }) => {
  return (
    <div className="w-full sticky">
      <div
        className={`fixed inset-0 flex justify-center items-center
     transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={`rounded-lg shadow p-6 transition-all w-11/12 border-black border-2 dark:border-gray-300 bg-gray-300 dark:bg-gray-900
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
            <div className="grid grid-cols-4 gap-4 w-full dark:text-gray-100 text-sm">
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
                  <h2 className="">ID Usuario</h2>
                  <p>{info.id_user}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Herramientas</h2>
                  <p className="text-gray-600">{info.tool}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Colección Global</h2>
                  <p className="text-gray-600">{info.global_collection}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Filial</h2>
                  <p className="text-gray-600">{info.filial}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Modulo</h2>
                  <p className="text-gray-600">{info.modulo}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Servicio</h2>
                  <p className="text-gray-600">{info.service_manager}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">N. Alerta Back</h2>
                  <p className="text-gray-600">{info.name_alert_back}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Nombre Alerta</h2>
                  <p className="text-gray-600">{info.name_alert}</p>
                </div>

                
              </div>

              <div>
                
                <div className="relative mb-2">
                  <h2 className="">Valor Configuración</h2>
                  <p className="text-gray-600">{info.value_configuration}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Condición de alerta</h2>
                  <p className="text-gray-600">{info.condition_alert}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Frecuencia</h2>
                  <p className="text-gray-600">{info.frequencie}</p>
                </div>
                <div className="relative mb-6">
                  <h2 className="">Hora Alerta</h2>
                  <p className="text-gray-600">{info.alert_hours}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Mayor</h2>
                  <p className="text-gray-600">{info.major}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Critical</h2>
                  <p className="text-gray-600">{info.critical}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Item Configuración</h2>
                  <p className="text-gray-600">{info.item_configuration}</p>
                </div>
              </div>

              <div>
                <div className="relative mb-2">
                  <h2 className="">Email</h2>
                  <p className="text-gray-600">{info.email}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Impacto</h2>
                  <p className="text-gray-600">{info.impact}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Detalle query</h2>
                  <p className="text-gray-600">{info.details_query}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Documento referencia</h2>
                  <p className="text-gray-600">{info.reference_document}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Tipo locación</h2>
                  <p className="text-gray-600">{info.type_location}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Prueba locación</h2>
                  <p className="text-gray-600">{info.test_location}</p>
                </div>

                
              </div>
              <div>
                <div className="relative mb-2">
                  <h2 className="">New relic</h2>
                  <p className="text-gray-600">{info.state_newrelic}</p>
                </div>
               
                <div className="relative mb-2">
                  <h2 className="">Ultima Actualización</h2>
                  <p className="text-gray-600">{info.updated_at}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Tipo configuración</h2>
                  <p className="text-gray-600">{info.type_configuration}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">¿Spectrum?</h2>
                  <p className="text-gray-600">{info.critical}</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
