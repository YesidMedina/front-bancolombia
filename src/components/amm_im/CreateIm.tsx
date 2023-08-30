import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Amm_im } from "../../interfaces/amm_im";
import {
  createAmmIm,
  getAmmImId,
  updateAmmImId,
} from "../helpers/ServiceAmmIm";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export const CreateIm = () => {
  const navigate = useNavigate();
  const params = useParams();

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

  const handleInput = (e: InputChange) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createAmmIm(info);
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
      await updateAmmImId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/amm_im");
  };

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
      <div className=" w-10/12 rounded-lg p-6 mx-auto my-6 shadow-lg shadow-gray-800 border-2 border-gray-300 dark:bg-gray-900 dark:text-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 ">
            <div>
              <div className="relative mb-6">
                <input
                  type="number"
                  className=" w-32 rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400"
                  onChange={handleInput}
                  name="id_user"
                  value={info.id_user}
                  placeholder="ID usuario"
                  required
                />
              </div>

              <div className="relative mb-6">
                <select
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400"
                  onChange={handleInput}
                  name="tool"
                  value={info.tool}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Selecciona la Herramienta
                  </option>
                  <option value="ELK">ELK</option>
                  <option value="OpenShift">OpenShift</option>
                  <option value="Selenium">Selenium</option>
                  <option value="Spectrum">Spectrum</option>
                  <option value="IUM">IUM</option>
                  <option value="SitEscope LAN">SitEscope LAN</option>
                </select>
              </div>
              <div className="relative mb-6">
                <select
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400"
                  onChange={handleInput}
                  name="global_collection"
                  value={info.global_collection}
                  required
                >
                  <option value="" disabled selected>
                    Selecciona la colección global
                  </option>
                  <option value="Chequeo de Servicios">
                    Chequeo de Servicios
                  </option>
                  <option value="Chequeo ó Servicios">
                    Chequeo ó Servicios
                  </option>
                  <option value="Conectividad centro de datos">
                    Conectividad centro de datos
                  </option>
                  <option value="Informacion procesada TI">
                    Informacion procesada TI
                  </option>
                  <option value="Servicios pendientes">
                    Servicios pendientes
                  </option>
                  <option value="Servicios por correo">
                    Servicios por correo
                  </option>
                  <option value="Stratus & Switch Transaccional Produccion">
                    Stratus & Switch Transaccional Produccion
                  </option>
                </select>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400  "
                  onChange={handleInput}
                  name="filial"
                  value={info.filial}
                  placeholder="Filial"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400  "
                  onChange={handleInput}
                  name="service_manager"
                  value={info.service_manager}
                  placeholder="Service manager"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400  "
                  onChange={handleInput}
                  name="sub_service"
                  value={info.sub_service}
                  placeholder="Sub-Service manager"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  name="monitor_resource"
                  value={info.monitor_resource}
                  placeholder="Monitor resource"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  name="service_optional"
                  value={info.service_optional}
                  placeholder="Servicio opcional"
                  required
                />
              </div>
              <div className="relative mb-6">
                <textarea
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 py-4 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  name="description"
                  value={info.description}
                  placeholder="Descripción"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative mb-6">
                <select
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400"
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
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.platform}
                  name="platform"
                  placeholder="Plataforma"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.rol}
                  name="rol"
                  placeholder="Rol"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.name_device}
                  name="name_device"
                  placeholder="Nombre dispositivo"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.ip_divice}
                  name="ip_divice"
                  placeholder="IP"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.baseline}
                  name="baseline"
                  placeholder="Linea base"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.item_configuration}
                  name="item_configuration"
                  placeholder="Tipo ITEM configuración"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.ic_configuration}
                  name="ic_configuration"
                  placeholder="ITEM configuración"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.alert_generation}
                  name="alert_generation"
                  placeholder="Estado generación de alerta"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.intervalo}
                  name="intervalo"
                  placeholder="Intervalo (Minutos)"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.action}
                  name="action"
                  placeholder="Acción"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.alert_hours}
                  name="alert_hours"
                  placeholder="Horario de alertamiento"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.major}
                  name="major"
                  placeholder="Mayor"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.critical}
                  name="critical"
                  placeholder="Critical"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.email}
                  name="email"
                  placeholder="Envio de correo"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.impact}
                  name="impact"
                  placeholder="Impacto de configuración"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.special_rule}
                  name="special_rule"
                  placeholder="Regla especial"
                  required
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
                  onChange={handleInput}
                  value={info.details}
                  name="details"
                  placeholder="Detalle"
                  required
                />
              </div>

              <div className="relative mb-6">
                <select
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3  text-black dark:text-gray-400"
                  placeholder="Spectrum/SOI"
                  onChange={handleInput}
                  value={info.spectrum_soi}
                  name="spectrum_soi"
                  required
                >
                  <option value="" disabled selected>
                    Seleccione si tiene Spectrum SOI
                  </option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black dark:text-gray-400 "
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
