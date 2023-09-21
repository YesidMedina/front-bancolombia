import { RetiredImHome } from "../../components/amm_im/RetiredImHome";
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";


export const RetiredAmmImPage = () => {
 
  return (
    <>
    
       <Navbar
        title="Retirados AMM_IM"
        image={Logo}
        catalogue = 'Catálogo'
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse= 'Cerrar sesión'
        menuOne= 'Servicios'
        linkOne= '/amm_im'
        menuTwo= 'Retirados'
        linkTwo= '/retired'
        menuThree= 'Correos'
        linkThree= '/email'
        menuFour= "Dashboard"
        linkFour= "/dashboard_amm_im"
        menuFive= 'Crear servicio'
        linkFive= '/create_im'
    />
      <RetiredImHome />
    </>
  );
};
