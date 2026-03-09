import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Navbar from "./layout/Navbar";
import Layout from "./layout/Layout";
import ProductCard from "./components/prodcut/ProductCard";
import { products } from "./data/prodcuts";

function App() {
  return (
    <Container>
      <Layout></Layout>
    </Container>
  );
}

export default App;
