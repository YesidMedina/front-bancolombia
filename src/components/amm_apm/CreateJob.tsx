import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Fondo from "../../assets/fondoapm.jpg"
import { Job } from "../../interfaces/amm_apm";
import {
  createJobAmmApm,
  getJobAmmApmId,
  updateJobAmmApmId,
} from "../helpers/ServiceAmmApm";
import CreateNew from "../../assets/create_new.png"

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export const CreateJob = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialForm = {
    id: 0,
    isiries: "",
    job: "",
    subsistem: "",
    instances: "",
    instances_affectation: "",
    name_menu: "",
    group_rise: "",
    id_divice: "",
    menu_chksys: "",
    maintenance: false,
    status: true,
    order_oc: "",
    updated_at: "",
  };

  const [info, setInfo] = useState<Job>(initialForm);

  const handleInput = (e: InputChange) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createJobAmmApm(info);
      Swal.fire({
        title: "Que bien parce!!!",
        text: "Los datos fueron registrados correctamente",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
      toast.success("Correo creado Exitosamente");
      setInfo(initialForm);
    } else {
      await updateJobAmmApmId(params.id, info);
      Swal.fire({
        title: "Mijo... Excelente!",
        text: "Los cambios fueron exitósos",
        icon: "success",
        confirmButtonColor: "gray",
        color: "black",
      });
    }
    navigate("/jobs");
  };

  const getInfo = async (id: any) => {
    const resp = await getJobAmmApmId(id);

    const {
      isiries,
      job,
      subsistem,
      instances,
      instances_affectation,
      name_menu,
      group_rise,
      id_divice,
      menu_chksys,
      maintenance,
      status,
      order_oc,
      updated_at,
    } = resp.data;
    setInfo({
      id,
      isiries,
      job,
      subsistem,
      instances,
      instances_affectation,
      name_menu,
      group_rise,
      id_divice,
      menu_chksys,
      maintenance,
      status,
      order_oc,
      updated_at,
    });
  };

  useEffect(() => {
    if (params.id) getInfo(params.id);
  }, []);

  return (
    <>
      <div
      style={{ backgroundImage: `url(${Fondo})` }}
      className="h-screen bg-no-repeat bg-center bg-[length:1600px_800px] py-12">
        <div className="bg-white  border-2  py-4 mx-24 rounded-lg">
          <div className="mx-8 py-4  dark:bg-gray-900">
            <form onSubmit={handleSubmit}>
              <img src={CreateNew} alt="" className="mx-auto hover:scale-125 duration-200"/>
              <h1 className="text-center mb-8">Crear Jobs para Wily</h1>
              <div className="grid grid-cols-2 gap-4 text-xs">
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
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="isiries"
                      value={info.isiries}
                      placeholder="Isiries"
                      required
                    />
                  </div>

                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="job"
                      value={info.job}
                      placeholder="Job"
                      required
                    />
                  </div>

                  

                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="subsistem"
                      value={info.subsistem}
                      placeholder="Sub sistema"
                      required
                    />
                  </div>

                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="instances"
                      value={info.instances}
                      placeholder="Instancias"
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="instances_affectation"
                      value={info.instances_affectation}
                      placeholder="Afectación"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="name_menu"
                      value={info.name_menu}
                      placeholder="Nombre menú"
                      required
                    />
                  </div>

                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="group_rise"
                      value={info.group_rise}
                      placeholder="Grupo"
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black "
                      onChange={handleInput}
                      name="id_divice"
                      value={info.id_divice}
                      placeholder="id_divice"
                      required
                    />
                  </div>
                  
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className=" w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black  "
                      onChange={handleInput}
                      name="menu_chksys"
                      value={info.menu_chksys}
                      placeholder="Menú CHKSYS 24 Horas"
                      required
                    />
                  </div>

                  <div className="relative mb-4">
                    <input
                      className="w-full rounded border py-2 border-gray-500 bg-transparent px-3 text-black "
                      onChange={handleInput}
                      name="order_oc"
                      value={info.order_oc}
                      placeholder="Número de orden"
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
        </div>
      </div>
    </>
  );
};
