import { CreateCloud } from "../../components/amm_cloud/CreateCloud";
import Logo from "../../assets/logo.png";
import { Navbar } from "../../components/commons/Navbar";

export const CreateCloudPage = () => {
  return (
    <>
      <Navbar
        title="Crear Servicios AMM_CLOUD"
        image={Logo}
        catalogue = 'Catálogo'
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse= 'Cerrar sesión'
        menuOne= 'Servicios'
        linkOne= '/amm_cloud'
        menuTwo= 'Retirados'
        linkTwo= '/retired_cloud'
        menuThree= 'Correos'
        linkThree= '/email_cloud'
        menuFour= ''
        linkFour= ''
        menuFive= 'Crear servicio'
        linkFive= '/create_cloud'
      />

      <CreateCloud />

    </>
  );
};
