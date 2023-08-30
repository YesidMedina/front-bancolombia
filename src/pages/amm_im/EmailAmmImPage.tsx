import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { EmailImHome } from "../../components/amm_im/EmailImHome";

export const EmailAmmImPage = () => {
  return (
    <>
      <Navbar
        title="Correos AMM_IM"
        image={Logo}
        catalogue= 'Catálogo'
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Servicios"
        link1="/amm_im"
        menu2="Retirados"
        link2="/retired"
        menu3="Correos"
        link3="/email"
        menu4= "Dashboard"
        link4= "/dashboard_amm_im"
        menu5="Creación de correos"
        link5="/create_email_im"
      />

      <EmailImHome />
    </>
  );
};
