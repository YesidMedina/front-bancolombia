import { Navbar } from "../../components/commons/Navbar"
import Logo from "../../assets/logo.png";
import { CreateEmailIm } from "../../components/amm_im/CreateEmailIm";

export const CreateEmailAmmCloudPage = () => {
  return (
    <>
    <Navbar
        title="Creación de correos nube"
        image={Logo}
        catalogue = 'Catálogo'
        hour="Hora"
        clouse="Cerrar sesión"
        menu1="Atrás"
        link1="/email_cloud"
      />

    </>
  )
}
