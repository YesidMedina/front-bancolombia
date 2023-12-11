import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { CreateEmailApm } from "../../components/amm_apm/CreateEmailApm";

export const CreateEmailAmmApmPage = () => {
  return (
    <>
      <Navbar
        title="Creación de correos APM"
        image={Logo}
        catalogue = 'Catálogo'
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/email_apm"
      />

      <CreateEmailApm />
    </>
  );
};
