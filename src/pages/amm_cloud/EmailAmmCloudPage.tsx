import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { EmailImHome } from "../../components/amm_im/EmailImHome";

export const EmailAmmCloudPage = () => {
  return (
    <>
      <Navbar
        title="Correos AMM_CLOUD"
        image={Logo}
        catalogue = 'Catálogo'
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Servicios"
        link1="/amm_cloud"
        menu2="Retirados"
        link2=""
        menu3="Correos"
        link3="/email_cloud"
        menu4=""
        link4=""
        menu5="Creación de correos"
        link5="/create_email_cloud"
      />

    </>
  );
};
