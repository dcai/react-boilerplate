import * as React from "react";
import { Layout } from "./components/Layout.jsx";

/**
 * @returns {JSX.Element}
 */
export function App() {
  return (
    <div className="h-screen bg-green-900 py-0">
      <Layout>
        <div className="container mx-auto my-5">
          <div className="flex flex-row">
            <div className="basis-1/2 min-h-56">left</div>
            <div className="basis-1/2">right</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
