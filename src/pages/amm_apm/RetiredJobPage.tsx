import { Navbar } from "../../components/commons/Navbar";
import Logo from "../../assets/logo.png";
import { RetiredJobHome } from "../../components/amm_apm/RetiredJobHome";

export const RetiredJobPage = () => {
  return (
    <>
    <Navbar
    title="Jobs Retirados"
        image={Logo}
        catalogue="Catálogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Servicios"
        linkOne="/amm_apm"
        menuTwo="Retirados"
        linkTwo="/retired_apm"
        menuThree="Correos"
        linkThree="/email_apm"
        menuFour="Dashboard"
        linkFour="/dashboard_amm_apm"
        menuFive="Crear servicio"
        linkFive="/create_apm"
        menuSix="Crear correo"
        linkSix="/create_email_apm"
        menuSeven="Jobs"
        linkSeven="/jobs"
        menuEight="Jobs Retirados"
        linkEight="/retired_job"
        menuNine="Crear Jobs"
        linkNine="/create_job"
        />
        <RetiredJobHome />
    </>
  )
}
