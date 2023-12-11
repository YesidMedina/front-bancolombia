import { RetiredCloudHome } from "../../components/amm_cloud/RetiredCloudHome";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";

export const RetiredAmmCloudPage = () => {
  return (
    <>
    
       <Navbar
        title="Retirados AMM_CLOUD"
        image={Logo}
        catalogue = 'Catálogo'
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

    <RetiredCloudHome />
      
    </>
  );
};
