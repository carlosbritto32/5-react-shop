import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Layout } from "../containers/layout";
import { Login } from "../containers/login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
