import { Cards } from "../commons/Cards";
import Foto from "../../assets/fondo.png";
import AWS from "../../assets/aws.png";
import Open from "../../assets/opens.png";
import Azure from "../../assets/azure.png";
import Grafana from "../../assets/grafana.png";
import Dynatrace from "../../assets/dynatrace.png";
import Banco from "../../assets/banco1.png";

export const CatalogueHome = () => {
  return (
    <>
      <div className="grid lg:gap-3 lg:grid-cols-3 sm:grid-cols-1 sm:gap-1 p-4 px-12 mx-auto bg-yellow-200 bg-gradient-to-r from-gray-400 dark:bg-gray-900">
        <div>
          <Cards
            link={`/amm_im`}
            image={Foto}
            title="AMM_IM"
            description="Archivo maestro de IM"
          />
        </div>
        <div>
          <Cards
            link="/amm_apm"
            image={Foto}
            title="AMM_APM"
            description="Archivo maestro de APM"
          />
        </div>
        <div>
          <Cards
            link="/amm_cloud"
            image={Foto}
            title="AMM_Cloud"
            description="Archivo maestro de Cloud"
          />
        </div>
        <div>
          <Cards image={AWS} title="AWS" description="AWS Cloudwatch" />
        </div>
        <div>
          <Cards image={Foto} title="UIM" description="Aplicación web UIM" />
        </div>
        <div>
          <Cards
            image={Foto}
            title="Alarmas"
            description="Aplicación de alarmas iris e alice"
          />
        </div>
        <div>
          <Cards
            image={Dynatrace}
            title="Dynatrace"
            description="Herramienta de monitoreo en nube"
          />
        </div>
        <div>
          <Cards
            image={Open}
            title="OPenSearch"
            description="Herramienta de monitoreo"
          />
        </div>
        <div>
          <Cards
            image={Banco}
            title="Power BI"
            description="Herramienta Bancolombia"
          />
        </div>
        <div>
          <Cards
            image={Grafana}
            title="Grafana"
            description="Herramienta de gráficas"
          />
        </div>
        <div>
          <Cards
            image={Azure}
            title="Azure"
            description="Crea tus HA y revisa los sprint"
          />
        </div>
        <div>
          <Cards
            image={Banco}
            title="Bwork"
            description="Reserva de puestos de trabajo"
          />
        </div>
        <div>
          <Cards
            image={Banco}
            title="OPENAI"
            description="Área de preguntas inteligencia artificial"
            link="/preguntas"
          />
        </div>
      </div>
    </>
  );
};
