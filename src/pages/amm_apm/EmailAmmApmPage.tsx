import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { EmailApmHome } from "../../components/amm_apm/EmailApmHome";

export const EmailAmmApmPage = () => {
  return (
    <>
      <Navbar
        title="Correos AMM_APM"
        image={Logo}
        catalogue = 'Catálogo'
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

      <EmailApmHome/>

      
    </>
  );
};
