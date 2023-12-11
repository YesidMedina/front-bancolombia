import { useParams, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { Amm_im } from "../interfaces/amm_im";
import jwt_decode from "jwt-decode";
import { getUserId } from "../components/helpers/ServiceUser";
import {
  createAmmIm,
  getAmmImId,
  updateAmmImId,
} from "../components/helpers/ServiceAmmIm";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Form } from "../components/commons/Form";


export const Linux = () => {
  let navigate = useNavigate();
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
  const [userInfo, setUserInfo] = useState();

  const userId = async () => {
    const resp = localStorage.getItem("token");
    const decode = jwt_decode(resp);
    const respData = await getUserId(decode["id"]);
    setUserInfo(respData.data.id);
  };

  const handleInput = (e: any) => {
    if (e.target.name === "maintenance" && e.target.checked) {
      setInfo({ ...info, [e.target.name]: true });
    } else if (e.target.name === "maintenance" && !e.target.checked) {
      setInfo({ ...info, [e.target.name]: false });
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createAmmIm(info);
      Swal.fire({
        title: "Que bien parce!!!",
        text: `Los datos fueron registrados correctamente con el id ${info.id}`,
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
        text: `Los cambios fueron exitósos ID ${info.id}`,
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
      maintenance,
      tool,
      updated_at,
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
      maintenance,
      tool,
      updated_at,
    });
  };

  useEffect(() => {
    userId();
    if (params.id) getInfo(params.id);
  }, []);

  return (
    <>
      <Form
        res_fields="Campos obligatorios y seleccionables de linea base"
        handleSubmit={handleSubmit}
        conditionalParams={params.id}
        conditionalManintenance={info.maintenance}
        infoIdViolet={info.id}
        infoIdGreen={info.id}
        handleInput={handleInput}
        valueIdUser={info.id_user}
        valueTool={info.tool}
        valueGlobalCollection={info.global_collection}
        valueFilial={info.filial}
        valueServiceManager={info.service_manager}
        valueSubservice={info.sub_service}
        valueMonitorResource={info.monitor_resource}
        valueServiceOptional={info.service_optional}
        valueDescription={info.description}
        valueEnvironment={info.environment}
        valuePlatform={info.platform}
        valueRol={info.rol}
        valueRolOne="Plataforma Windows-Linux Bancolombia"
        valueRolTwo="Transformacion Informacion LZ"
        valueRolThree="N/A"
        rolOne="Plataforma Windows-Linux Bancolombia"
        rolTwo="Transformacion Informacion LZ"
        rolThree="N/A"
        valuesNameDevice={info.name_device}
        valueIp={info.ip_divice}
        valueBaseline="linux"
        baseline="linux"
        valueItemConfiguration={info.item_configuration}
        valueItemConfigurationOne="FileSystem"
        valueItemConfigurationTwo="Performance"
        itemConfigurationOne="FileSystem"
        itemConfigurationTwo="Performance"
        ValueIcConfiguration={info.ic_configuration}
        valueConfigurationOne="/"
        valueConfigurationTwo="/boot"
        valueConfigurationThree="dev"
        valueConfigurationFour="/tmp"
        valueConfigurationFive="/var"
        valueConfigurationSix="/home"
        valueConfigurationSeven="/var/log"
        valueConfigurationEight="CPU"
        valueConfigurationNine="Memoria Física"
        valueConfigurationThen="Memoria Swap"
        icConfigurationOne="/"
        icConfigurationTwo="/boot"
        icConfigurationThree="dev"
        icConfigurationFour="/tmp"
        icConfigurationFive="/var"
        icConfigurationSix="/home"
        icConfigurationSeven="/var/log"
        icConfigurationEight="CPU"
        icConfigurationNine="Memoria Física"
        icConfigurationThen="Memoria Swap"
        valueAlert={info.alert_generation}
        valueIntervalo={info.intervalo}
        valueAction={info.action}
        valueAlertHours={info.alert_hours}
        valueMajor={info.major}
        valueMajorOne=">80%=60min."
        valueMajorTwo=">80%=120min."
        valueMajorThree=">=80%"
        valueMajorFour=">28GB"
        valueMajorFive=">5%=30min."
        majorOne=">80%=60min."
        majorTwo=">80%=120min."
        majorThree=">=80%"
        majorFour=">28GB"
        majorFive=">5%=30min."
        valueCritical={info.critical}
        valueCriticalOne=">90%=10min."
        valueCriticalTwo=">90%=20min."
        valueCriticalThree=">90%=30min."
        valueCriticalFour=">95%=30min."
        valueCriticalFive=">85%=10min."
        valueCriticalSix="30GB"
        valueCriticalSeven=">85%=30min."
        valueCriticalEight="N/A"
        criticalOne=">90%=10min."
        criticalTwo=">90%=20min."
        criticalThree=">90%=30min."
        criticalFour=">95%=30min."
        criticalFive=">85%=10min."
        criticalSix="30GB"
        criticalSeven=">85%=30min."
        criticalEight="N/A"
        valueEmail={info.email}
        valueImpact={info.impact}
        valueSpecialRule={info.special_rule}
        valueDetails={info.details}
        valueSpectrum={info.spectrum_soi}
        valueOC={info.order_number_oc}
      />
    </>
  );
};
