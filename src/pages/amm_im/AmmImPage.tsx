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
        menuFive="Crear servicio"
        linkFive="/create_im"
        menuFour="Dashboard"
        linkFour="/dashboard_amm_im"
      />
      <ArchiveImHome />
    </>
  );
};
