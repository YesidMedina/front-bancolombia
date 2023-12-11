import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { EmailImHome } from "../../components/amm_im/EmailImHome";


export const EmailAmmImPage = () => {
  
  return (
    <>
      <Navbar
        title="Correos AMM_IM"
        image={Logo}
        catalogue="Catálogo"
        linkCatalogue="/catalogo"
        hour
        clouse="Cerrar sesión"
        avatar=""
        menuOne="Servicios"
        linkOne="/amm_im"
        menuTwo="Retirados"
        linkTwo="/retired"
        menuThree="Correos"
        linkThree="/email"
        menuFour="Dashboard"
        linkFour="/dashboard_amm_im"
        menuFive="Crear servicio"
        linkFive="/create_im"
        menuSix="Crear correo"
        linkSix="/create_email_im"
      />

      <EmailImHome />
    </>
  );
};
