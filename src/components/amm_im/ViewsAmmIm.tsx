import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Amm_im } from "../../interfaces/amm_im";
import { getAmmImId } from "../helpers/ServiceAmmIm";

export const ViewsAmmIm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const initialForm = {
    alert_generation: "",
    alert_hours: "",
    baseline: "",
    critical: "",
    description: "",
    details: "",
    email: "",
    action: "",
    environment: "",
    filial: "",
    global_collection: "",
    ic_configuration: "",
    id_user: 0,
    impact: "",
    intervalo: "",
    ip_divice: "",
    item_configuration: "",
    major: "",
    monitor_resource: "",
    name_device: "",
    order_number_oc: "",
    platform: "",
    rol: "",
    service_manager: "",
    service_optional: "",
    special_rule: "",
    spectrum_soi: "",
    sub_service: "",
    status: true,
    tool: "",
    id: 0,
  };

  const [info, setInfo] = useState<Amm_im>(initialForm);

  const getInfo = async (id: any) => {
    const resp = await getAmmImId(id);
    const {
      alert_generation,
      alert_hours,
      baseline,
      critical,
      description,
      details,
      email,
      action,
      environment,
      filial,
      global_collection,
      ic_configuration,
      id_user,
      impact,
      intervalo,
      ip_divice,
      item_configuration,
      major,
      monitor_resource,
      name_device,
      order_number_oc,
      platform,
      rol,
      service_manager,
      service_optional,
      special_rule,
      spectrum_soi,
      sub_service,
      status,
      tool,
    } = resp.data;
    setInfo({
      alert_generation,
      alert_hours,
      baseline,
      critical,
      description,
      details,
      email,
      action,
      environment,
      filial,
      global_collection,
      ic_configuration,
      id,
      id_user,
      impact,
      intervalo,
      ip_divice,
      item_configuration,
      major,
      monitor_resource,
      name_device,
      order_number_oc,
      platform,
      rol,
      service_manager,
      service_optional,
      special_rule,
      spectrum_soi,
      sub_service,
      status,
      tool,
    });
  };

  useEffect(() => {
    if (params.id) getInfo(params.id);
  }, []);

  return (
    <>
      <div className="mx-16 mt-2">
        {info.status === true ? (
          <button
            type="submit"
            className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
            onClick={() => navigate("/amm_im")}
          >
            Atras
          </button>
        ) : (
          <button
            type="submit"
            className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
            onClick={() => navigate("/retired")}
          >
            Atras
          </button>
        )}
      </div>
      <div className=" w-3/4  rounded-lg p-6 mx-auto my-2 shadow-lg shadow-gray-800 border-2 border-gray-300">
        <form>
          <div className="grid grid-cols-4 gap-4 ">
            <div>
              <div className="relative mb-6 -mt">
                <h2 className="font-bold">ID Usuario</h2>
                <p className='text-gray-600'>{info.id_user}</p>
              </div>

              <div className="relative mb-6 -mt-4">
                <h2 className="font-bold">Herramienta</h2>
                <p className='text-gray-600'>{info.tool}</p>
              </div>
              <div className="relative mb-6 -mt-4">
                <h2 className="font-bold">Colección Global</h2>
                <p className='text-gray-600'>{info.global_collection}</p>
              </div>

              <div className="relative mb-6 -mt-4">
                <h2 className="font-bold">Filial</h2>
                <p className='text-gray-600'>{info.filial}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Servicio</h2>
                <p className='text-gray-600'>{info.service_manager}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Sub_Servicio</h2>
                <p className='text-gray-600'>{info.sub_service}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Monitor resource</h2>
                <p className='text-gray-600'>{info.monitor_resource}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold ">Descripción</h2>
                <p className='text-gray-600'>{info.description}</p>
              </div>
            </div>

            <div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Servicio opcional</h2>
                <p className='text-gray-600'>{info.service_optional}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Ambiente</h2>
                <p className='text-gray-600'>{info.environment}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Plataforma</h2>
                <p className='text-gray-600'>{info.platform}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Rol</h2>
                <p className='text-gray-600'>{info.rol}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Nombre dispositivo</h2>
                <p className='text-gray-600'>{info.name_device}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">IP</h2>
                <p className='text-gray-600'>{info.ip_divice}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Linea Base</h2>
                <p className='text-gray-600'>{info.baseline}</p>
              </div>
            </div>

            <div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Tipo ITEM Configuración</h2>
                <p className='text-gray-600'>{info.item_configuration}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">ITEM Configuración</h2>
                <p className='text-gray-600 w-56'>{info.ic_configuration}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Estado generación de alerta</h2>
                <p className='text-gray-600'>{info.alert_generation}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Intervalo (Minutos)</h2>
                <p className='text-gray-600'>{info.intervalo}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Acción</h2>
                <p className='text-gray-600'>{info.action}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Horario de Alertamiento</h2>
                <p className='text-gray-600'>{info.alert_hours}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Mayor</h2>
                <p className='text-gray-600'>{info.major}</p>
              </div>
            </div>
            <div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Crítica</h2>
                <p className='text-gray-600'>{info.critical}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Envio de Correo</h2>
                <p className='text-gray-600'>{info.email}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Impacto de configuración</h2>
                <p className='text-gray-600'>{info.impact}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Regla especial</h2>
                <p className='text-gray-600'>{info.special_rule}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Detalle</h2>
                <p className='text-gray-600'>{info.details}</p>
              </div>

              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Spectrum</h2>
                <p className='text-gray-600'>{info.spectrum_soi}</p>
              </div>
              <div className="relative mb-6 -mt-4">
             <h2 className="font-bold">Orden de Cambio</h2>
                <p className='text-gray-600'>{info.order_number_oc}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
