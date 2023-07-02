/* eslint-disable prettier/prettier */
import React from "react";

import { Connection } from "@/components/connection";
import { LIVEPEER_KEY } from "@/constants";
export default function IndexPage() {
  return (
    <div>
      <h1>the livepeer code {LIVEPEER_KEY}</h1>
  
      <Connection />
    </div>
  );
}
