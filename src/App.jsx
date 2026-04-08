import { useState } from "react";
import Container from "./components/ui/Container";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage/Home";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
