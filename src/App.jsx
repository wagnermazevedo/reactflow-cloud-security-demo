import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import CloudNode from "./components/CloudNode";
import { initialNodes, initialEdges } from "./data/initialFlow";

const nodeTypes = {
  cloudNode: CloudNode,
};

export default function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
