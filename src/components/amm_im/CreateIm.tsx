import { useState } from "react";
import { Amm_im } from "../../interfaces/amm_im";
import { useParams } from "react-router-dom";

import { Pseries } from "../../baseline/Pseries";
import { Linux } from "../../baseline/Linux";
import { Windows } from "../../baseline/Windows";
import { Solaris } from "../../baseline/Solaris";
import { CreateServiceIm } from "../../baseline/CreateServiceIm";
import { BaseLineHome } from "./BaseLineHome";

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
        <div className="">
          <div className=" w-64 mt-4 ml-20 text-xs ">
            <div className="relative mb-4">
              <select
                className="w-full rounded border-2 border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                onChange={handleInput}
                name="baseline"
                value={info.baseline}
                required
              >
                <option value="" disabled selected>
                  Linea base
                </option>

                <option value="Windows">Windows </option>
                <option value="Linux"> Linux </option>
                <option value="Pseries">Pseries</option>
                <option value="Solaris">Solaris</option>
                <option value="N/A">N/A</option>
                <option className="text-blue-800 bg-gray-400" value="detalle">
                  Ver Linea Base
                </option>
              </select>
            </div>
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
