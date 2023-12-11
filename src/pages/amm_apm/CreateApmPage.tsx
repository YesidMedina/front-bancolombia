import { CreateApm } from "../../components/amm_apm/CreateApm";
import Logo from "../../assets/logo.png";
import { Navbar } from "../../components/commons/Navbar";

export const CreateApmPage = () => {
  return (
    <>
      <Navbar
        title="Crear Servicios AMM_APM"
        image={Logo}
        catalogue = 'Catálogo'
        linkCatalogue = "/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/amm_apm"
      />

      <CreateApm />
    </>
  );
};
