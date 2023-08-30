import { ArchiveImHome } from "../../components/amm_im/ArchiveImHome";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";

export const AmmCloudPage = () => {
  return (
    <>
       <Navbar
        title="AMM_CLOUD"
        image={Logo}
        catalogue = 'Catálogo'
        hour="Hora"
        clouse= 'Cerrar sesión'
        menu1= 'Servicios'
        link1= '/amm_cloud'
        menu2= 'Retirados'
        link2= '/retired_cloud'
        menu3= 'Correos'
        link3= '/email_cloud'
        menu4= ''
        link4= ''
        menu5= 'Crear servicio'
        link5= '/create_cloud'
    />
     
    </>
  );
};
