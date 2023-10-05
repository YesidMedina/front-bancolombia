import { CreateIm } from "../../components/amm_im/CreateIm";
import Logo from "../../assets/logo.png";
import { Navbar } from "../../components/commons/Navbar";
import { BaseLineHome } from "../../components/amm_im/BaseLineHome";

export const CreateImPage = () => {
  return (
    <>
      <Navbar
        title="Crear Servicios AMM_IM"
        image={Logo}
        catalogue="Catálogo"
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/amm_im"
        menuTitle="Recuerde que todos los campos son obligatorios"
      />

      <CreateIm />
    </>
  );
};
