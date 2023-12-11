import { useParams} from "react-router-dom";


export const Form = (props: any) => {

  const params = useParams();
  
  return (
    <>
      <div className="sm:-mt-12 sm:flex sm:justify-center">
        <a className="-mt-2 inline-flex items-center justify-center w-8 h-8 ml-8 overflow-hidden bg-yellow-100 rounded-full"></a>
        <p className="text-xs">
          {props.res_fields}
        </p>
      </div>
      <div className="mx-20 py-8  dark:bg-gray-900">
        <form onSubmit={props.handleSubmit}>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              {props.conditionalParams && props.conditionalManintenance === true ? (
                <div className="text-white bg-violet-600 hover:bg-yellow-300 mb-2  rounded-lg text-sm px-5 w-20">
                  <p className="">{props.infoIdViolet}</p>
                </div>
              ) : (
                <div className="text-black bg-green-600 hover:bg-yellow-300 mb-2  rounded-lg text-sm px-5 w-20">
                  <p className="">{props.infoIdGreen}</p>
                </div>
              )}
              <div className="relative mb-4">
                <input
                  type="number"
                  className=" w-32 rounded border border-gray-500 bg-transparent px-3 py-1 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="id_user"
                  value={props.valueIdUser}
                  placeholder="ID usuario"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="tool"
                  value={props.valueTool}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Seleccione la Herramienta
                  </option>
                  <option value="ELK">ELK</option>
                  <option value="OpenShift">OpenShift</option>
                  <option value="Selenium">Selenium</option>
                  <option value="Spectrum">Spectrum</option>
                  <option value="IUM">IUM</option>
                  <option value="SitEscope LAN">SitEscope LAN</option>
                </select>
              </div>
              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="global_collection"
                  value={props.valueGlobalCollection}
                  required
                >
                  <option value="" disabled selected>
                    Seleccione la colección global
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

              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="filial"
                  value={props.valueFilial}
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Seleccione la filial
                  </option>
                  <option value="Bancolombia">Bancolombia</option>
                  <option value="Banistmo">Banistmo</option>
                  <option value="Factoring">Factoring</option>
                  <option value="Filiales_Exterior">Filiales_Exterior</option>
                  <option value="Konecta">Konecta</option>
                  <option value="Sufi">Sufi</option>
                  <option value="Telecomunicaciones">Telecomunicaciones</option>
                  <option value="Valores">Valores</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400  "
                  onChange={props.handleInput}
                  name="service_manager"
                  value={props.valueServiceManager}
                  placeholder="Service manager"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400  "
                  onChange={props.handleInput}
                  name="sub_service"
                  value={props.valueSubservice}
                  placeholder="Sub-Service manager"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  name="monitor_resource"
                  value={props.valueMonitorResource}
                  placeholder="Monitor resource"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  name="service_optional"
                  value={props.valueServiceOptional}
                  placeholder="Servicio opcional"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-4 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  name="description"
                  value={props.valueDescription}
                  placeholder="Descripción"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="environment"
                  value={props.valueEnvironment}
                  required
                >
                  <option value="" disabled selected>
                    Seleccione el Ambiente
                  </option>
                  <option value="Producción">Producción</option>
                  <option value="QA"> QA </option>
                  <option value="Desarrollo">Desarrollo</option>
                </select>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valuePlatform}
                  name="platform"
                  placeholder="Plataforma"
                  required
                />
              </div>

              <div className="bg-yellow-100 relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueRol}
                  name="rol"
                  placeholder="Rol"
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Rol
                  </option>
                  <option value={props.valueRolOne}>
                    {props.rolOne}
                  </option>
                  <option value={props.valueRolTwo}> {props.rolTwo}</option>
                  <option value={props.valueRolThree}> {props.rolThree}</option>
                </select>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valuesNameDevice}
                  name="name_device"
                  placeholder="Nombre dispositivo"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueIp}
                  name="ip_divice"
                  placeholder="IP"
                  required
                />
              </div>
              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400"
                  onChange={props.handleInput}
                  name="baseline"
                  value={props.valueBaseline}
                  required
                >
                  <option value="" disabled selected>
                    Linea base
                  </option>
                  <option value={props.valueBaseline}>{props.baseline}</option>
                  
                </select>
              </div>
              <div className="bg-yellow-100 relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueItemConfiguration}
                  name="item_configuration"
                  placeholder="Tipo ITEM configuración"
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Tipo item de configuración
                  </option>
                  <option value={props.valueItemConfigurationOne}>{props.itemConfigurationOne}</option>
                  <option value={props.valueItemConfigurationTwo}>{props.itemConfigurationTwo}</option>
                  <option value={props.valueItemConfigurationThree}>{props.itemConfigurationThree}</option>
                </select>
              </div>
              <div className="bg-yellow-100 relative mb-4">
                <select
                  className=" w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.ValueIcConfiguration}
                  name="ic_configuration"
                  placeholder="ITEM configuración"
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Item configuracion
                  </option>

                  <option value={props.valueConfigurationOne}>{props.icConfigurationOne}</option>
                  <option value={props.valueConfigurationTwo}>{props.icConfigurationTwo}</option>
                  <option value={props.valueConfigurationThree}>{props.icConfigurationThree}</option>
                  <option value={props.valueConfigurationFour}>{props.icConfigurationFour}</option>
                  <option value={props.valueConfigurationFive}>{props.icConfigurationFive}</option>
                  <option value={props.valueConfigurationSix}>{props.icConfigurationSix}</option>
                  <option value={props.valueConfigurationSeven}>{props.icConfigurationSeven}</option>
                  <option value={props.valueConfigurationEight}>{props.icConfigurationEight}</option>
                  <option value={props.valueConfigurationNine}>{props.icConfigurationNine}</option>
                  <option value={props.valueConfigurationThen}>{props.icConfigurationThen}</option>
                  <option value={props.valueConfiguration}>{props.icConfiguration}</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueAlert}
                  name="alert_generation"
                  placeholder="Estado generación de alerta"
                  required
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueIntervalo}
                  name="intervalo"
                  placeholder="Intervalo (Minutos)"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2  text-black dark:text-gray-400"
                  placeholder="Acción"
                  onChange={props.handleInput}
                  value={props.valueAction}
                  name="action"
                  required
                >
                  <option value="" disabled selected>
                    Seleccione la acción
                  </option>
                  <option value="Notificar">Notificar</option>
                  <option value="Remitirse al AMM_APM">
                    Remitirse al AMM_APM
                  </option>
                  <option value="Remitirse al AMM_Cloud">
                    Remitirse al AMM_Cloud
                  </option>
                  <option value="Subir servicio">Subir servicio</option>
                  <option value="Subir servicio y notificar">
                    Subir servicio y notificar
                  </option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueAlertHours}
                  name="alert_hours"
                  placeholder="Horario de alertamiento"
                  required
                />
              </div>

              <div className="bg-yellow-100 relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueMajor}
                  name="major"
                  placeholder="Mayor"
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Mayor
                  </option>

                  <option value={props.valueMajorOne}>{props.majorOne}</option>
                  <option value={props.valueMajorTwo}>{props.majorTwo}</option>
                  <option value={props.valueMajorThree}>{props.majorThree}</option>
                  <option value={props.valueMajorFour}>{props.majorFour}</option>
                  <option value={props.valueMajorFive}>{props.majorFive}</option>
                </select>
              </div>

              <div className="bg-yellow-100 relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueCritical}
                  name="critical"
                  placeholder="Critical"
                  required
                >
                  <option className="text-gray-300" value="" disabled selected>
                    Critical
                  </option>

                  <option value={props.valueCriticalOne}>{props.criticalOne}</option>
                  <option value={props.valueCriticalTwo}>{props.criticalTwo}</option>
                  <option value={props.valueCriticalThree}>{props.criticalThree}</option>
                  <option value={props.valueCriticalFour}>{props.criticalFour}</option>
                  <option value={props.valueCriticalFive}>{props.criticalFive}</option>
                  <option value={props.valueCriticalSix}>{props.criticalSix}</option>
                  <option value={props.valueCriticalSeven}>{props.criticalSeven}</option>
                  <option value={props.valueCriticalEight}>{props.criticalEight}</option>
                </select>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueEmail}
                  name="email"
                  placeholder="Envio de correo"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueImpact}
                  name="impact"
                  placeholder="Impacto de configuración"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueSpecialRule}
                  name="special_rule"
                  placeholder="Regla especial"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueDetails}
                  name="details"
                  placeholder="Detalle"
                  required
                />
              </div>

              <div className="relative mb-4">
                <select
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2  text-black dark:text-gray-400"
                  placeholder="Spectrum/SOI"
                  onChange={props.handleInput}
                  value={props.valueSpectrum}
                  name="spectrum_soi"
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
                <input
                  type="text"
                  className="w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-black dark:text-gray-400 "
                  onChange={props.handleInput}
                  value={props.valueOC}
                  name="order_number_oc"
                  placeholder="Orden de cambio"
                  required
                />
              </div>
            </div>
          </div>
          {params.id ? (
            <div className="flex justify-end">
              <span className="mr-2">Mantenimiento</span>
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={props.maintenance}
                  onChange={props.handleInput}
                  name="maintenance"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  No / Si
                </span>
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
              type="button"
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
