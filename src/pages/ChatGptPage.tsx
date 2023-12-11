import { ChatGptHome } from "../components/file_master/ChatGptHome";
import { Navbar } from "../components/commons/Navbar";
import Logo from "../assets/logo.png";

export const ChatGptPage = () => {
  return (
    <>
      <Navbar
        title="CHAT OPENAI"
        image={Logo}
        catalogue="Catálogo"
        linkCatalogue= '/catalogo'
        hour
        clouse="Cerrar sesión"
        menu1="Este es tu espacio de inteligencia artificial, donde puedes aclarar tus dudas de monitoreo y tecnología, Suerte!!"
      />
      <ChatGptHome />
    </>
  );
};
