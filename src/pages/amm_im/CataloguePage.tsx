import { Navbar } from "../../components/commons/Navbar";
import { CatalogueHome } from "../../components/file_master/CatalogueHome";
import Logo from "../../assets/logo.png";

export const CataloguePage = () => {
  return (
    <>
      <div className="">
        <Navbar
          title="Catálogo Herramientas de Monitoreo"
          image={Logo}
          hour="Hora"
          clouse="Cerrar sesión"
        />
      </div>
      <CatalogueHome />
    </>
  );
};
