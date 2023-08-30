export const Form = () => (
  <div className=" w-10/12 rounded-lg p-6 mx-auto my-6 shadow-lg shadow-gray-800 border-2 border-gray-300 ">
    <form>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="relative mb-6">
            <input
              type="number"
              className=" w-32 rounded border-2 border-gray-500 bg-transparent px-3 text-black  "
              name="id_user"
              placeholder="ID usuario"
              required
            />
          </div>

          <div className="relative mb-6">
            <select
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3  text-black"
              name="tool"
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
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3  text-black"
              name="global_collection"
              required
            >
              <option value="" disabled selected>
                Selecciona la colección global
              </option>
              <option value="Chequeo de Servicios">Chequeo de Servicios</option>
              <option value="Chequeo ó Servicios">Chequeo ó Servicios</option>
              <option value="Conectividad centro de datos">
                Conectividad centro de datos
              </option>
              <option value="Informacion procesada TI">
                Informacion procesada TI
              </option>
              <option value="Servicios pendientes">Servicios pendientes</option>
              <option value="Servicios por correo">Servicios por correo</option>
              <option value="Stratus & Switch Transaccional Produccion">
                Stratus & Switch Transaccional Produccion
              </option>
            </select>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black  "
              name="filial"
              placeholder="Filial"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black  "
              name="service_manager"
              placeholder="Service manager"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className=" w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black  "
              name="sub_service"
              placeholder="Sub-Service manager"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="monitor_resource"
              placeholder="Monitor resource"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="service_optional"
              placeholder="Servicio opcional"
              required
            />
          </div>
          <div className="relative mb-6">
            <textarea
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 py-4 text-black "
              name="description"
              placeholder="Descripción"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative mb-6">
            <select
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black"
              name="environment"
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
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="platform"
              placeholder="Plataforma"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="rol"
              placeholder="Rol"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="name_device"
              placeholder="Nombre dispositivo"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="ip_divice"
              placeholder="IP"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="baseline"
              placeholder="Linea base"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="item_configuration"
              placeholder="Tipo ITEM configuración"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="ic_configuration"
              placeholder="ITEM configuración"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="alert_generation"
              placeholder="Estado generación de alerta"
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
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
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="action"
              placeholder="Acción"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="alert_hours"
              placeholder="Horario de alertamiento"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="major"
              placeholder="Mayor"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="critical"
              placeholder="Critical"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="email"
              placeholder="Envio de correo"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="impact"
              placeholder="Impacto de configuración"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="special_rule"
              placeholder="Regla especial"
              required
            />
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="details"
              placeholder="Detalle"
              required
            />
          </div>

          <div className="relative mb-6">
            <select
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3  text-black"
              placeholder="Spectrum/SOI"
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
              className="w-full rounded border-2 border-gray-500 bg-transparent px-3 text-black "
              name="order_number_oc"
              placeholder="Orden de cambio"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
      >
        Actualizar
      </button>

      <button
        type="submit"
        className="text-black bg-yellow-400 hover:bg-yellow-300 py-2  rounded-lg text-sm px-5 .5 mx-auto"
      >
        Guardar
      </button>
    </form>
  </div>
);
