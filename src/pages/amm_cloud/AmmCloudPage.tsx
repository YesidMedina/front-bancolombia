import { ArchiveCloudHome } from "../../components/amm_cloud/ArchiveCloudHome";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";

export const AmmCloudPage = () => {
  return (
    <>
       <Navbar
        title="AMM_CLOUD"
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
    <ArchiveCloudHome />
     
    </>
  );
};
