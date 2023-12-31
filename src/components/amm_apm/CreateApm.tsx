import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Amm_apm } from "../../interfaces/amm_apm";
import {
  createAmmApm,
  getAmmApmId,
  updateAmmApmId,
} from "../helpers/ServiceAmmApm";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export const CreateApm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialForm = {
    id: 0,
    id_user: 0,
    global_collection: "",
    filial: "",
    service_manager: "",
    sub_service: "",
    gestor_broker: "",
    monitor_resource: "",
    description: "",
    environment: "",
    rol: "",
    name_device: "",
    ip_divice: "",
    type_configuration: "",
    item_configuration: "",
    alert_generation: "",
    metric_configuration: "",
    intervalo: "",
    alert_hours: "",
    major: "",
    pot_major: "",
    op_major: "",
    critical: "",
    pot_critical: "",
    op_critical: "",
    email: "",
    impact: "",
    details: "",
    spectrum: "",
    maintenance: false,
    status: true,
    order_number_oc: "",
  };

  const [info, setInfo] = useState<Amm_apm>(initialForm);

  const handleInput = (e: InputChange) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createAmmApm(info);
      Swal.fire({
        title: "Que bien parce!!!",
        text: "Los datos fueron registrados correctamente",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
      toast.success("Archivo guardado");
      setInfo(initialForm);
    } else {
      await updateAmmApmId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/amm_apm");
  };

  const getInfo = async (id: any) => {
    const resp = await getAmmApmId(id);
    const {
      id_user,
      global_collection,
      filial,
      service_manager,
      sub_service,
      gestor_broker,
      monitor_resource,
      description,
      environment,
      rol,
      name_device,
      ip_divice,
      type_configuration,
      item_configuration,
      alert_generation,
      metric_configuration,
      intervalo,
      alert_hours,
      major,
      pot_major,
      op_major,
      critical,
      pot_critical,
      op_critical,
      email,
      impact,
      details,
      spectrum,
      status,
      maintenance,
      order_number_oc,
    } = resp.data;
    setInfo({
      id,
      id_user,
      global_collection,
      filial,
      service_manager,
      sub_service,
      gestor_broker,
      monitor_resource,
      description,
      environment,
      rol,
      name_device,
      ip_divice,
      type_configuration,
      item_configuration,
      alert_generation,
      metric_configuration,
      intervalo,
      alert_hours,
      major,
      pot_major,
      op_major,
      critical,
      pot_critical,
      op_critical,
      email,
      impact,
      details,
      spectrum,
      status,
      maintenance,
      order_number_oc,
    });
  };

  useEffect(() => {
    if (params.id) getInfo(params.id);
  }, []);

  return (
    <>
      <div className=" mx-20 py-16 dark:bg-gray-900">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              {params.id && (
                <div>
                  {params.id && info.maintenance === true ? (
                    <div className="text-white bg-violet-600 hover:bg-yellow-300 mb-2  rounded-lg text-sm px-5 w-20">
                      <p className="">{info.id}</p>
                    </div>
                  ) : (
                    <div className="text-black bg-green-600 hover:bg-yellow-300 mb-2  rounded-lg text-sm px-5 w-20">
                      <p className="">{info.id}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="relative mb-4">
                <input
                  type="number"
                  className=" w-32 rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="id_user"
                  value={info.id_user}
                  placeholder="ID usuario"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  onChange={handleInput}
                  name="global_collection"
                  value={info.global_collection}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Selecciona una opción
                  </option>
                  <option value="Bancolombia">Bancolombia</option>
                  <option value="Chequeo Servicios">Chequeo Servicios</option>
                  <option value="Información procesada TI">
                    Información procesada TI
                  </option>
                  <option value="Servicio Pendiente">Servicio Pendiente</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="filial"
                  value={info.filial}
                  placeholder="Filial"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="service_manager"
                  value={info.service_manager}
                  placeholder="Servicio"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="sub_service"
                  value={info.sub_service}
                  placeholder="Sub servicio"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="gestor_broker"
                  value={info.gestor_broker}
                  placeholder="Broker-Gestor"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="monitor_resource"
                  value={info.monitor_resource}
                  placeholder="Monitor recurso"
                  required
                />
              </div>

              <div className="relative mb-4">
                <textarea
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-4 text-black "
                  onChange={handleInput}
                  name="description"
                  value={info.description}
                  placeholder="Descripción"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black"
                  onChange={handleInput}
                  name="environment"
                  value={info.environment}
                  required
                >
                  <option value="" disabled selected>
                    Selecciona el Ambiente
                  </option>
                  <option value="Producción">Producción</option>
                  <option value="QA"> QA </option>
                  <option value="Desarrollo">Desarrollo</option>
                </select>
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <input
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  name="rol"
                  value={info.rol}
                  placeholder="Rol"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.name_device}
                  name="name_device"
                  placeholder="Nombre dispositivo"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.ip_divice}
                  name="ip_divice"
                  placeholder="IP dispositivo"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  onChange={handleInput}
                  name="type_configuration"
                  value={info.type_configuration}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Selecciona el tipo de configuración
                  </option>
                  <option value="Canal">Canal</option>
                  <option value="Cola">Cola</option>
                  <option value="Contador registro">Contador registro</option>
                  <option value="flujo">flujo</option>
                  <option value="Job">Job</option>
                  <option value="Método">Método</option>
                  <option value="Métrica">Métrica</option>
                  <option value="Performance">Performance</option>
                  <option value="Status_db">Status_db</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.item_configuration}
                  name="item_configuration"
                  placeholder="Item de configuración"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.alert_generation}
                  name="alert_generation"
                  placeholder="Item de configuración"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.metric_configuration}
                  name="metric_configuration"
                  placeholder="Grupo ejecución/Métrica personalizada/canal"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.intervalo}
                  name="intervalo"
                  placeholder="Intervalo (seg)"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.alert_hours}
                  name="alert_hours"
                  placeholder="Horario de alertamiento"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.major}
                  name="major"
                  placeholder="Major"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.pot_major}
                  name="pot_major"
                  placeholder="Pot Major"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.op_major}
                  name="op_major"
                  placeholder="Op Major"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.critical}
                  name="critical"
                  placeholder="Critical"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.pot_critical}
                  name="pot_critical"
                  placeholder="Pot Critical"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.op_critical}
                  name="op_critical"
                  placeholder="Op Critical"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.email}
                  name="email"
                  placeholder="Envio de correo"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.impact}
                  name="impact"
                  placeholder="Afectación/Impacto Item de configuración"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.details}
                  name="details"
                  placeholder="Detalle"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  placeholder="Spectrum/SOI"
                  onChange={handleInput}
                  value={info.spectrum}
                  name="spectrum"
                  required
                >
                  <option value="" disabled selected>
                    Seleccione si tiene Spectrum SOI
                  </option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.order_number_oc}
                  name="order_number_oc"
                  placeholder="Orden de cambio"
                  required
                />
              </div>
            </div>
          </div>
          {params.id ? (
            <div className="flex justify-end text-xs">
              <span className="mr-2 mt-1">Mantenimiento</span>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={info.maintenance}
                  onChange={handleInput}
                  name="maintenance"
                  className="sr-only peer "
                />
                <div
                  className="group peer ring-0 bg-green-700  rounded-full outline-none duration-300
                 after:duration-300 w-16 h-7  shadow-md peer-checked:bg-violet-600  peer-focus:outline-none
                   after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none 
                   after:h-5 after:w-5 after:top-1 after:left-1 after:flex after:justify-center after:items-center
                    peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-90"
                ></div>
              </label>
            </div>
          ) : null}

          {params.id ? (
            <button
              type="submit"
              className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
            >
              Actualizar
            </button>
          ) : (
            <button
              type="submit"
              className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
            >
              Guardar
            </button>
          )}
        </form>
      </div>
    </>
  );
};
