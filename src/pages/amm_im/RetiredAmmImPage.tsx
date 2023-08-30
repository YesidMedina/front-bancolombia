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
        hour="Hora"
        clouse= 'Cerrar sesión'
        menu1= 'Servicios'
        link1= '/amm_im'
        menu2= 'Retirados'
        link2= '/retired'
        menu3= 'Correos'
        link3= '/email'
        menu4= "Dashboard"
        link4= "/dashboard_amm_im"
        menu5= 'Crear servicio'
        link5= '/create_im'
    />
      <RetiredImHome />
    </>
  );
};
