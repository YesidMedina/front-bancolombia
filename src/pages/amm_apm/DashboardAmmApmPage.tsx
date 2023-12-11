import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { DashboardAmmApm } from "../../components/amm_apm/DashboardAmmIm";

export const DashboardAmmApmPage = () => {
  return (
    <>
      <Navbar
        title="Crear Jobs"
        image={Logo}
        catalogue="Catálogo"
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/amm_apm"
      />

      <DashboardAmmApm />
    </>
  );
};