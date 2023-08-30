import { CreateIm } from "../../components/amm_im/CreateIm";
import Logo from "../../assets/logo.png";
import { Navbar } from "../../components/commons/Navbar";

export const CreateImPage = () => {
  return (
    <>
      <Navbar
        title="Crear Servicios AMM_IM"
        image={Logo}
        catalogue="Catálogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Atrás"
        link1="/amm_im"
      />

      <CreateIm />
    </>
  );
};
