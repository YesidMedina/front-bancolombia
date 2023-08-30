import { ViewsAmmIm } from "../../components/amm_im/ViewsAmmIm";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";

export const ViewsPage = () => {
  return (
    <>
      <Navbar
        title="vista AMM_IM"
        image={Logo}
        catalogue="Catálogo"
        hour="Hora"
        clouse="Cerrar sesión"
      />
      <ViewsAmmIm />
    </>
  );
};
