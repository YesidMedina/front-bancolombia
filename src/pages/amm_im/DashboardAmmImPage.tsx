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
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Atrás"
        link1="/amm_im"
        
      />
    <DashboardAmmIm/>
    </>
  )
}
