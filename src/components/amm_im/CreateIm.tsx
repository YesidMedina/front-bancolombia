import { useState } from "react";
import { Amm_im } from "../../interfaces/amm_im";
import { useParams } from "react-router-dom";

import { Pseries } from "../../baseline/Pseries";
import { Linux } from "../../baseline/Linux";
import { Windows } from "../../baseline/Windows";
import { Solaris } from "../../baseline/Solaris";
import { CreateServiceIm } from "../../baseline/CreateServiceIm";
import { BaseLineHome } from "./BaseLineHome";
import { Button } from "@tremor/react";

export const CreateIm = () => {
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
    id_user: "",
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
    maintenance: false,
    tool: "",
    id: 0,
    updated_at: "",
  };

  const [info, setInfo] = useState<Amm_im>(initialForm);

  const handleInput = (e: any) => {
    if (e.target.name === "maintenance" && e.target.checked) {
      setInfo({ ...info, [e.target.name]: true });
    } else if (e.target.name === "maintenance" && !e.target.checked) {
      setInfo({ ...info, [e.target.name]: false });
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      {!params.id && (
        <div className="py-2">
          <div
            className="mb-4 ml-20 relative group rounded-lg w-64 bg-neutral-200 overflow-hidden
           before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-gray-500
            before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#c2bd60]"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-8 h-8 absolute right-0 -rotate-45 stroke-yellow-200 top-1.5 group-hover:rotate-0 duration-300"
            >
              <path
                stroke-width="4"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                className="svg-stroke-primary"
              ></path>
            </svg>
            <select
              onChange={handleInput}
              name="baseline"
              value={info.baseline}
              required
              className="appearance-none hover:placeholder-shown:bg-blue-200 relative
               bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900
                placeholder-violet-200 text-sm font-bold rounded-lg block w-full p-2.5"
            >
              <option value="" disabled selected>
                Linea base
              </option>
              <option value="Windows">Windows </option>
              <option value="Linux"> Linux </option>
              <option value="Pseries">Pseries</option>
              <option value="Solaris">Solaris</option>
              <option value="N/A">N/A</option>
              <option
                className="text-gray-100 bg-blue-500 "
                value="detalle"
              >Ver Linea Base</option>
            </select>
          </div>

          <hr className="border-1 border-gray-950 dark:border-white" />
        </div>
      )}

      {(() => {
        if (info.baseline === "Windows") {
          return <Windows />;
        } else if (info.baseline === "Linux") {
          return <Linux />;
        } else if (info.baseline === "Solaris") {
          return <Solaris />;
        } else if (info.baseline === "Pseries") {
          return <Pseries />;
        } else if (info.baseline === "detalle") {
          return <BaseLineHome />;
        } else {
          return <CreateServiceIm />;
        }
      })()}
    </>
  );
};
