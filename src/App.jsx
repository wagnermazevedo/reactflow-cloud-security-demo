import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './app.css';

import CloudNode from './components/CloudNode';
import { initialNodes, initialEdges } from './data/initialFlow';

export default function App() {
  const [filter, setFilter] = useState('all');

  const filteredNodes = useMemo(() => {
    if (filter === 'all') return initialNodes;
    return initialNodes.filter((node) => node.data.group === filter);
  }, [filter]);

  const filteredNodeIds = useMemo(
    () => new Set(filteredNodes.map((node) => node.id)),
    [filteredNodes]
  );

  const filteredEdges = useMemo(() => {
    return initialEdges.filter(
      (edge) =>
        filteredNodeIds.has(edge.source) &&
        filteredNodeIds.has(edge.target)
    );
  }, [filteredNodeIds]);

  const [nodes, setNodes, onNodesChange] = useNodesState(filteredNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(filteredEdges);

  useEffect(() => {
    setNodes(filteredNodes);
    setEdges(filteredEdges);
  }, [filteredNodes, filteredEdges, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, label: 'New flow' }, eds)
      ),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ cloudNode: CloudNode }), []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#F8FAFC' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Panel position="top-left">
          <div className="control-panel">
            <h3>Cloud Security Control Plane</h3>
            <p>Interactive multicloud security architecture demo</p>

            <div className="button-row">
              <button onClick={() => setFilter('all')}>All</button>
              <button onClick={() => setFilter('prevention')}>Prevention</button>
              <button onClick={() => setFilter('detection')}>Detection</button>
              <button onClick={() => setFilter('response')}>Response</button>
            </div>
          </div>
        </Panel>

        <MiniMap zoomable pannable />
        <Controls />
        <Background gap={20} size={1} />
      </ReactFlow>
    </div>
  );
}
