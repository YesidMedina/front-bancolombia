import { DashboardAmmIm } from "../../components/amm_im/DashboardAmmIm"
import { Navbar } from "../../components/commons/Navbar"
import Logo from "../../assets/logo.png";



export const DashboardAmmImPage = () => {
  
  return (
    <>
    <Navbar
        title="Dashboard AMM_IM"
        image={Logo}
        catalogue = 'Catálogo'
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/amm_im"
        
      />
    <DashboardAmmIm/>
    </>
  )
}
