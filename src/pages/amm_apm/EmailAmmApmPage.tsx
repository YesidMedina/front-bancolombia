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
        menu1="Servicios"
        link1="/amm_apm"
        menu2="Retirados"
        link2=""
        menu3="Correos"
        link3="/email_apm"
        menu4=""
        link4=""
        menu5="Creación de correos"
        link5="/create_email_apm"
      />

      <EmailApmHome/>

      
    </>
  );
};
