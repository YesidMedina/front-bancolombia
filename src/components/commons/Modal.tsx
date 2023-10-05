type propType = {
  open: boolean;
  onclose: () => void;
  info: any;
};

export const Modal: React.FC<propType> = ({ open, onclose, info }) => {
  return (
    <div className="w-full">
      <div
        className={`fixed inset-0 flex justify-center items-center
     transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={` rounded-lg shadow p-6 transition-all w-11/12 border-black border-4 dark:border-gray-300 bg-gray-400 dark:bg-gray-900
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
                  <h2 className="">Herramienta</h2>
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
                  <h2 className="">Servicio</h2>
                  <p className="text-gray-600">{info.service_manager}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Sub_Servicio</h2>
                  <p className="text-gray-600">{info.sub_service}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Monitor resource</h2>
                  <p className="text-gray-600">{info.monitor_resource}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Descripción</h2>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </div>

              <div>
                <div className="relative mb-2">
                  <h2 className="">Servicio opcional</h2>
                  <p className="text-gray-600">{info.service_optional}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Ambiente</h2>
                  <p className="text-gray-600">{info.environment}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Plataforma</h2>
                  <p className="text-gray-600">{info.platform}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Rol</h2>
                  <p className="text-gray-600">{info.rol}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Nombre dispositivo</h2>
                  <p className="text-gray-600">{info.name_device}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">IP</h2>
                  <p className="text-gray-600">{info.ip_divice}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Linea Base</h2>
                  <p className="text-gray-600">{info.baseline}</p>
                </div>
              </div>

              <div>
                <div className="relative mb-2">
                  <h2 className="">Tipo ITEM Configuración</h2>
                  <p className="text-gray-600">{info.item_configuration}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">ITEM Configuración</h2>
                  <p className="text-gray-600">{info.ic_configuration}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Estado generación de alerta</h2>
                  <p className="text-gray-600">{info.alert_generation}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Intervalo (Minutos)</h2>
                  <p className="text-gray-600">{info.intervalo}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Acción</h2>
                  <p className="text-gray-600">{info.action}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Horario de Alertamiento</h2>
                  <p className="text-gray-600">{info.alert_hours}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Mayor</h2>
                  <p className="text-gray-600">{info.major}</p>
                </div>
              </div>
              <div>
                <div className="relative mb-2">
                  <h2 className="">Crítica</h2>
                  <p className="text-gray-600">{info.critical}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Envio de Correo</h2>
                  <p className="text-gray-600">{info.email}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Impacto de configuración</h2>
                  <p className="text-gray-600">{info.impact}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Regla especial</h2>
                  <p className="text-gray-600">{info.special_rule}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Detalle</h2>
                  <p className="text-gray-600">{info.details}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">Spectrum</h2>
                  <p className="text-gray-600">{info.spectrum_soi}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">Orden de Cambio</h2>
                  <p className="text-gray-600">{info.order_number_oc}</p>
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

  // return (
  //   <div className="w-full">
  //   <div
  //     className={`fixed inset-0 flex justify-center items-center
  //    transition-colors ${open ? "visible from-transparent" : "invisible"}`}
  //     onClick={onclose}
  //   >
  //     <div
  //       className={` rounded-lg shadow p-6 transition-all w-11/12 bg-gray-300 dark:bg-gray-800
  //       ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
  //       onClick={(e) => e.stopPropagation()}
  //     >
  //       <button
  //         className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400
  //           bg-white hover:bg-gray-50 hover:text-gray-600"
  //         onClick={onclose}
  //       >
  //         x
  //       </button>
  //       <form>
  //         <div className="grid grid-cols-4 gap-4 w-full dark:text-gray-100">
  //           <div>
  //           <div className="relative mb-2">
  //               <h2 className="">ID </h2>
  //               {info.maintenance === true ? (
  //               <p className="bg-violet-700 rounded-lg w-12 h-6 text-white text-center">{info.id}</p>
  //               ): (
  //                 <p className="bg-green-600 rounded-lg w-12 h-6 text-white text-center">{info.id}</p>
  //               )}
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">ID Usuario</h2>
  //               <p>{info.id_user}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="">Herramienta</h2>
  //               <p className="text-gray-600">{info.tool}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Colección Global</h2>
  //               <p className="text-gray-600">{info.global_collection}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="">Filial</h2>
  //               <p className="text-gray-600">{info.filial}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Servicio</h2>
  //               <p className="text-gray-600">{info.service_manager}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Sub_Servicio</h2>
  //               <p className="text-gray-600">{info.sub_service}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Monitor resource</h2>
  //               <p className="text-gray-600">{info.monitor_resource}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="">Descripción</h2>
  //               <p className="text-gray-600">{info.description}</p>
  //             </div>
  //           </div>

  //           <div>
  //             <div className="relative mb-2">
  //               <h2 className="">Servicio opcional</h2>
  //               <p className="text-gray-600">{info.service_optional}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Ambiente</h2>
  //               <p className="text-gray-600">{info.environment}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="">Plataforma</h2>
  //               <p className="text-gray-600">{info.platform}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="">Rol</h2>
  //               <p className="text-gray-600">{info.rol}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Nombre dispositivo</h2>
  //               <p className="text-gray-600">{info.name_device}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">IP</h2>
  //               <p className="text-gray-600">{info.ip_divice}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Linea Base</h2>
  //               <p className="text-gray-600">{info.baseline}</p>
  //             </div>
  //           </div>

  //           <div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Tipo ITEM Configuración</h2>
  //               <p className="text-gray-600">{info.item_configuration}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">ITEM Configuración</h2>
  //               <p className="text-gray-600">{info.ic_configuration}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Estado generación de alerta</h2>
  //               <p className="text-gray-600">{info.alert_generation}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Intervalo (Minutos)</h2>
  //               <p className="text-gray-600">{info.intervalo}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Acción</h2>
  //               <p className="text-gray-600">{info.action}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Horario de Alertamiento</h2>
  //               <p className="text-gray-600">{info.alert_hours}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Mayor</h2>
  //               <p className="text-gray-600">{info.major}</p>
  //             </div>
  //           </div>
  //           <div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Crítica</h2>
  //               <p className="text-gray-600">{info.critical}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Envio de Correo</h2>
  //               <p className="text-gray-600">{info.email}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Impacto de configuración</h2>
  //               <p className="text-gray-600">{info.impact}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Regla especial</h2>
  //               <p className="text-gray-600">{info.special_rule}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Detalle</h2>
  //               <p className="text-gray-600">{info.details}</p>
  //             </div>

  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Spectrum</h2>
  //               <p className="text-gray-600">{info.spectrum_soi}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Orden de Cambio</h2>
  //               <p className="text-gray-600">{info.order_number_oc}</p>
  //             </div>
  //             <div className="relative mb-2">
  //               <h2 className="font-bold">Ultima Actualización</h2>
  //               <p className="text-gray-600">{info.updated_at}</p>
  //             </div>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  //   </div>
  // );
};
