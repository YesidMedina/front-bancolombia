
import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { RetiredApmHome } from "../../components/amm_apm/RetiredApmHome";

export const RetiredAmmApmPage = () => {
  return (
    <>
    
       <Navbar
        title="Retirados AMM_APM"
        image={Logo}
        catalogue = 'Catálogo'
        hour="Hora"
        clouse= 'Cerrar sesión'
        menu1= 'Servicios'
        link1= '/amm_apm'
        menu2= 'Retirados'
        link2= '/retired_apm'
        menu3= 'Correos'
        link3= '/email_apm'
        menu4= ''
        link4= ''
        menu5= 'Crear servicio'
        link5= '/create_apm'
    />

    <RetiredApmHome/>
  
    </>
  );
};
