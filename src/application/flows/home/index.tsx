import React from "react";
import HomeLayout from "./layout";
import { useOwner } from "@hooks/owner";

const Home = () => {
  const { owners, getOwner } = useOwner();

  return <HomeLayout owners={owners} handleSearch={getOwner} />;
};

export default Home;
