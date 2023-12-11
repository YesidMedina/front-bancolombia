import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { ArchiveApmHome } from "../../components/amm_apm/ArchiveApmHome";

export const AmmApmPage = () => {
  return (
    <>
      <Navbar
        title="AMM_APM"
        image={Logo}
        catalogue="Catálogo"
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Servicios"
        linkOne="/amm_apm"
        menuTwo="Retirados"
        linkTwo="/retired_apm"
        menuThree="Correos"
        linkThree="/email_apm"
        menuFour="Dashboard"
        linkFour="/dashboard_amm_apm"
        menuFive="Crear servicio"
        linkFive="/create_apm"
        menuSix="Crear correo"
        linkSix="/create_email_apm"
        menuSeven="Jobs"
        linkSeven="/jobs"
        menuEight="Jobs Retirados"
        linkEight="/retired_job"
        menuNine="Crear Jobs"
        linkNine="/create_job"
      />

      <ArchiveApmHome />
    </>
  );
};
