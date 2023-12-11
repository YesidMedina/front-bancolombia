import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { CreateJob } from "../../components/amm_apm/CreateJob";

export const CreateJobPage = () => {
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
        linkOne="/jobs"
      />

      <CreateJob />
    </>
  );
};
