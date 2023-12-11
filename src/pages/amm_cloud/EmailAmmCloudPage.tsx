import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { EmailCloudHome } from "../../components/amm_cloud/EmailCloudHome";

export const EmailAmmCloudPage = () => {
  return (
    <>
      <Navbar
        title="Correos AMM_CLOUD"
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
        menuFour= 'Dashboard'
        linkFour= ''
        menuFive= 'Crear servicio'
        linkFive= '/create_cloud'
      />

      <EmailCloudHome />

    </>
  );
};
