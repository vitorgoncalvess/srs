import axios from "axios";
import React from "react";

const ImpactGraph = async () => {
  const data = await axios.get("http://localhost:3000/api");
  return <div className="h-56">teste</div>;
};

export default ImpactGraph;
