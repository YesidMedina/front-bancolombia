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



export const Pseries = () => {
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
        valueRolOne="Plataforma Pseries"
        rolOne="Plataforma Pseries"
        valuesNameDevice={info.name_device}
        valueIp={info.ip_divice}
        valueBaseline="Pseries"
        baseline="Pseries"
        valueItemConfiguration={info.item_configuration}
        valueItemConfigurationOne="FileSystem"
        valueItemConfigurationTwo="Paginación"
        itemConfigurationOne="FileSystem"
        itemConfigurationTwo="Paginación"
        ValueIcConfiguration={info.ic_configuration}
        valueConfigurationOne="/"
        valueConfigurationTwo="/opt"
        valueConfigurationThree="/usr"
        valueConfigurationFour="/tmp"
        valueConfigurationFive="/var"
        valueConfigurationSix="/home"
        valueConfigurationSeven="/syslog"
        valueConfigurationEight="/logs"
        valueConfigurationNine="/nmon"
        valueConfigurationThen="/admin"
        valueConfiguration="%utilización"
        icConfigurationOne="/"
        icConfigurationTwo="/opt"
        icConfigurationThree="/usr"
        icConfigurationFour="/tmp"
        icConfigurationFive="/var"
        icConfigurationSix="/home"
        icConfigurationSeven="/syslog"
        icConfigurationEight="/logs"
        icConfigurationNine="/nmon"
        icConfigurationThen="/admin"
        icConfiguration="%utilización"
        valueAlert={info.alert_generation}
        valueIntervalo={info.intervalo}
        valueAction={info.action}
        valueAlertHours={info.alert_hours}
        valueMajor={info.major}
        valueMajorOne=">=90%"
        valueMajorTwo=">85%=30min."
        majorOne=">=90%"
        majorTwo=">85%=30min."
        valueCritical={info.critical}
        valueCriticalOne=">=95%"
        valueCriticalTwo=">60%=30min."
        criticalOne=">=95%"
        criticalTwo=">60%=30min."
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
