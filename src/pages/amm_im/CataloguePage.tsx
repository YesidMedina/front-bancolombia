import { NavbarHome } from "../../components/commons/NavbarHome";
import { CatalogueHome } from "../../components/file_master/CatalogueHome";
import Logo from "../../assets/logo.png";

export const CataloguePage = () => {

  return (
    <>
      <div className="">
        <NavbarHome
          title="Catálogo Herramientas de Monitoreo"
          image={Logo}
          clouse='Cerrar sesión'
         
        />
      </div>
      <CatalogueHome />
    </>
  );
};
