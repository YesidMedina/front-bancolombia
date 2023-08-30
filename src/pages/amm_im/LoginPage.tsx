import { LoginHome } from "../../components/auth/LoginHome";
import { NavbarHome } from "../../components/commons/NavbarHome";
import Logo from "../../assets/logo.png";

export const LoginPage = () => {
  return (
    <>
      <NavbarHome
        title="Herramientas de monitoreo"
        image={Logo}
        hour="Hora"
        
      />
      <LoginHome />
    </>
  );
};
