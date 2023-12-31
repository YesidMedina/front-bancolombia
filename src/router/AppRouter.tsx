import { useEffect } from "react";
import { ProtectedRoute } from "../components/commons/ProtectedRoute";

import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { AmmImPage } from "../pages/amm_im/AmmImPage";
import { CataloguePage } from "../pages/amm_im/CataloguePage";
import { CreateImPage } from "../pages/amm_im/CreateImPage";
import { EmailAmmImPage } from "../pages/amm_im/EmailAmmImPage";
import { CreateEmailAmmImPage } from "../pages/amm_im/CreateEmailAmmImPage";
import { RetiredAmmImPage } from "../pages/amm_im/RetiredAmmImPage";
import { DashboardAmmImPage } from "../pages/amm_im/DashboardAmmImPage";

// AMM_APM

import { AmmApmPage } from "../pages/amm_apm/AmmApmPage";
import { CreateApmPage } from "../pages/amm_apm/CreateApmPage";
import { EmailAmmApmPage } from "../pages/amm_apm/EmailAmmApmPage";
import { CreateEmailAmmApmPage } from "../pages/amm_apm/CreateEmailAmmApmPage";
import { RetiredAmmApmPage } from "../pages/amm_apm/RetiredAmmApmPage";

// AMM_CLOUD

import { AmmCloudPage } from "../pages/amm_cloud/AmmCloudPage";
import { CreateCloudPage } from "../pages/amm_cloud/CreateCloudPage";
import { EmailAmmCloudPage } from "../pages/amm_cloud/EmailAmmCloudPage";
import { CreateEmailAmmCloudPage } from "../pages/amm_cloud/CreateEmailAmmCloudPage";
import { RetiredAmmCloudPage } from "../pages/amm_cloud/RetiredAmmCloudPage";

// CHATGPT

import { ChatGptPage } from "../pages/ChatGptPage";
import { useLocalStorage } from "react-use";
import { JobApmPage } from "../pages/amm_apm/JobApmPage";
import { RetiredJobPage } from "../pages/amm_apm/RetiredJobPage";
import { CreateJobPage } from "../pages/amm_apm/CreateJobPage";
import { DashboardAmmApmPage } from "../pages/amm_apm/DashboardAmmApmPage";

export const AppRouter = () => {
  // const [user, setUser] = useState('')
  // const clave =() => {
  //  const resp =  localStorage.getItem('token')
  //   setUser(resp)
  //   console.log(resp);

  // }
  const [user, setUser] = useLocalStorage("token");

  useEffect(() => {}, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/catalogo" element={<CataloguePage />} />
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/amm_im" element={<AmmImPage />} />
          <Route path="/create_im" element={<CreateImPage />} />
          <Route path="/retired" element={<RetiredAmmImPage />} />
          <Route path="/update/:id" element={<CreateImPage />} />
          <Route path="/email" element={<EmailAmmImPage />} />
          <Route path="/create_email_im" element={<CreateEmailAmmImPage />} />
          <Route path="/update_email/:id" element={<CreateEmailAmmImPage />} />
          <Route path="/dashboard_amm_im" element={<DashboardAmmImPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/amm_apm" element={<AmmApmPage />} />
        <Route path="/create_apm" element={<CreateApmPage />} />
        <Route path="/update_apm/:id" element={<CreateApmPage />} />
        <Route path="/email_apm" element={<EmailAmmApmPage />} />
        <Route path="/create_email_apm" element={<CreateEmailAmmApmPage />} />

        
        <Route
          path="/update_email_apm/:id"
          element={<CreateEmailAmmApmPage />}
        />
        <Route path="/retired_apm" element={<RetiredAmmApmPage />} />
        <Route path="/jobs" element={<JobApmPage />} />
        <Route path="/retired_job" element={<RetiredJobPage />} />
        <Route path="/create_job" element={<CreateJobPage />} />
        <Route path="/update_job/:id" element={<CreateJobPage />} />
        <Route path="/dashboard_amm_apm" element={<DashboardAmmApmPage />} />
      </Routes>

      <Routes>
        <Route path="/amm_cloud" element={<AmmCloudPage />} />
        <Route path="/create_cloud" element={<CreateCloudPage />} />
        <Route path="/update_cloud/:id" element={<CreateCloudPage />} />
        <Route path="/email_cloud" element={<EmailAmmCloudPage />} />
        <Route
          path="/create_email_cloud"
          element={<CreateEmailAmmCloudPage />}
        />
        <Route
          path="/update_email_cloud/:id"
          element={<CreateEmailAmmCloudPage />}
        />
        <Route path="/retired_cloud" element={<RetiredAmmCloudPage />} />
      </Routes>

      <Routes>
        <Route path="/preguntas" element={<ChatGptPage />} />
      </Routes>
    </>
  );
};
