import { ArchiveImHome } from "../../components/amm_im/ArchiveImHome";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";


export const AmmImPage = () => {



 

  return (
    <>
      
          
          <Navbar
            title="AMM_IM"
            image={Logo}
            catalogue="Catálogo"
            hour
            clouse="Cerrar sesión"
            menu1="Servicios"
            link1="/amm_im"
            menu2="Retirados"
            link2="/retired"
            menu3="Correos"
            link3="/email"
            menu5="Crear servicio"
            link5="/create_im"
            menu4= "Dashboard"
            link4= "/dashboard_amm_im"
          />
          <ArchiveImHome />
    </>
  );
};
