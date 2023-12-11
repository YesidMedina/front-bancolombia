import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Amm_cloud } from "../../interfaces/amm_cloud";
import {
  createAmmCloud,
  getAmmCloudId,
  updateAmmCloudId,
} from "../helpers/ServiceAmmCloud";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export const CreateCloud = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialForm = {
    id: 0,
    tool: "",
    id_user: 0,
    global_collection: "",
    filial: "",
    modulo: "",
    service_manager: "",
    sub_service: "",
    name_alert_back: "",
    name_alert: "",
    type_configuration: "",
    item_configuration: "",
    value_configuration: "",
    condition_alert: "",
    frequencie: "",
    alert_hours: "",
    major: "",
    critical: "",
    email: "",
    impact: "",
    details_query: "",
    reference_document: "",
    type_location:"",
    test_location:"",
    spectrum:"",
    status: true,
    maintenance: false,
    order_number_oc: "",
    state_newrelic:"",
    created_at: ""
  };

  const [info, setInfo] = useState<Amm_cloud>(initialForm);

  const handleInput = (e: InputChange) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createAmmCloud(info);
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
      await updateAmmCloudId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/amm_cloud");
  };

  const getInfo = async (id: any) => {
    const resp = await getAmmCloudId(id);
    const {
    tool,
    id_user,
    global_collection,
    filial,
    modulo,
    service_manager,
    sub_service,
    name_alert_back,
    name_alert,
    type_configuration,
    item_configuration,
    value_configuration,
    condition_alert,
    frequencie,
    alert_hours,
    major,
    critical,
    email,
    impact,
    details_query,
    reference_document,
    type_location,
    test_location,
    spectrum,
    status,
    maintenance,
    order_number_oc,
    state_newrelic,
    created_at
    } = resp.data;
    setInfo({
      id,
      tool,
    id_user,
    global_collection,
    filial,
    modulo,
    service_manager,
    sub_service,
    name_alert_back,
    name_alert,
    type_configuration,
    item_configuration,
    value_configuration,
    condition_alert,
    frequencie,
    alert_hours,
    major,
    critical,
    email,
    impact,
    details_query,
    reference_document,
    type_location,
    test_location,
    spectrum,
    status,
    maintenance,
    order_number_oc,
    state_newrelic,
    created_at
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
                  name="tool"
                  value={info.tool}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Seleccione la herramienta
                  </option>
                  <option value="ELK">ELK</option>
                  <option value="CloudWatch">CloudWatch</option>
                  <option value="Wily">
                    Wily
                  </option>
                </select>
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
                  <option value="Chequeo servicio">Chequeo servicio</option>
                  <option value="Servicio pendiente">Servicio pendiente</option>
                  <option value="Servicio por correo">
                    Servicio por correo
                  </option>
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
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  onChange={handleInput}
                  name="modulo"
                  value={info.modulo}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Seleccione un módulo
                  </option>
                  <option value="CloudWatch">CloudWatch</option>
                  <option value="Insights">Insights</option>
                  <option value="Synthetics">
                    Synthetics
                  </option>
                  <option value="N/A">N/A</option>
                </select>
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
                  name="name_alert_back"
                  value={info.name_alert_back}
                  placeholder="Nombre alerta anterior"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black  "
                  onChange={handleInput}
                  name="name_alert"
                  value={info.name_alert}
                  placeholder="Nombre alerta"
                  required
                />
              </div>

              
            </div>

            <div>
            <div className="relative mb-4">
                <input
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-1 text-black "
                  onChange={handleInput}
                  name="type_configuration"
                  value={info.type_configuration}
                  placeholder="Tipo configuración"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black"
                  onChange={handleInput}
                  name="item_configuration"
                  value={info.item_configuration}
                  placeholder="Item de configuración"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  name="value_configuration"
                  value={info.value_configuration}
                  placeholder="Valor configuración"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.condition_alert}
                  name="condition_alert"
                  placeholder="Condición alertamiento"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.frequencie}
                  name="frequencie"
                  placeholder="Frecuencia(min)"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  onChange={handleInput}
                  name="alert_hours"
                  value={info.alert_hours}
                  required
                  placeholder="Horario alertamiento"
                
                />
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
                  value={info.major}
                  name="major"
                  placeholder="Mayor"
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
              
            </div>

            <div>
            <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.email}
                  name="email"
                  placeholder="Correo"
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
                  placeholder="Impacto"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.details_query}
                  name="details_query"
                  placeholder="Detalle(Queries)"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.reference_document}
                  name="reference_document"
                  placeholder="Documeno referencia"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.type_location}
                  name="type_location"
                  placeholder="Tipo locación"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3 text-black "
                  onChange={handleInput}
                  value={info.test_location}
                  name="test_location"
                  placeholder="Locaciones de test"
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
                    Seleccione si tiene Spectrum
                  </option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border py-1 border-gray-500 bg-transparent px-3  text-black"
                  placeholder="Spectrum/SOI"
                  onChange={handleInput}
                  value={info.state_newrelic}
                  name="state_newrelic"
                  required
                >
                  <option value="" disabled selected>
                    Seleccione estado newrelic
                  </option>
                  <option value="Si existe">Si existe</option>
                  <option value="No existe">No existe</option>
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
