import * as React from "react";
import { Layout } from "./components/Layout";

export function About() {
  return (
    <div className="h-screen bg-green-900 py-0">
      <Layout>
        <h1 className="text-3xl font-bold underline">About</h1>
      </Layout>
    </div>
  );
}
