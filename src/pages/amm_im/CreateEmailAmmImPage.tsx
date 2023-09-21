import { Navbar } from "../../components/commons/Navbar"
import Logo from "../../assets/logo.png";
import { CreateEmailIm } from "../../components/amm_im/CreateEmailIm";


export const CreateEmailAmmImPage = () => {
  
  return (
    <>
    <Navbar
        title="Creación de correos"
        image={Logo}
        catalogue = 'Catálogo'
        linkCatalogue="/catalogo"
        hour="Hora"
        clouse="Cerrar sesión"
        menuOne="Atrás"
        linkOne="/email"
      />

      <CreateEmailIm/>
    </>
  )
}
