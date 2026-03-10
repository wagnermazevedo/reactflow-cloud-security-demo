export const initialNodes = [
  {
    id: '1',
    type: 'cloudNode',
    position: { x: 100, y: 100 },
    data: {
      label: 'AWS Account',
      subtitle: 'Cloud provider',
      iconKey: 'providers.aws',
      color: '#FF9900',
    },
  },
  {
    id: '2',
    type: 'cloudNode',
    position: { x: 380, y: 100 },
    data: {
      label: 'Security Hub',
      subtitle: 'Control plane',
      iconKey: 'awsServices.securityHub',
      color: '#2563EB',
    },
  },
  {
    id: '3',
    type: 'cloudNode',
    position: { x: 680, y: 100 },
    data: {
      label: 'Lambda Remediation',
      subtitle: 'Auto-remediation',
      iconKey: 'awsServices.lambda',
      color: '#7C3AED',
    },
  },
  {
    id: '4',
    type: 'cloudNode',
    position: { x: 980, y: 100 },
    data: {
      label: 'SOC / Slack',
      subtitle: 'Alerting',
      iconKey: 'securityPlatforms.slack',
      color: '#E11D48',
    },
  },
];

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    label: 'Findings',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    label: 'Remediate',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'Notify SOC',
  },
];
