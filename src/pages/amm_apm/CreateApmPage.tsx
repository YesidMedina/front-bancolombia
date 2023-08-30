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
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Atrás"
        link1="/amm_apm"
      />

      <CreateApm />
    </>
  );
};
