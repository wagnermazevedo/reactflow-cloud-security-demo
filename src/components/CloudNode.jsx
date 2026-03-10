import { Handle, Position } from '@xyflow/react';
import Icon from './Icon';
import { getIcon } from '../icons/IconRegistry';

export default function CloudNode({ data }) {
  const {
    label,
    subtitle,
    iconKey,
    color = '#2563EB',
  } = data;

  const icon = iconKey ? getIcon(iconKey) : null;

  return (
    <div
      style={{
        minWidth: 240,
        border: `2px solid ${color}`,
        borderRadius: 16,
        background: '#FFFFFF',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Handle type="target" position={Position.Left} />

      <div style={{ height: 7, background: color }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: 14,
        }}
      >
        <Icon icon={icon} label={label} size={36} />

        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: '#111827',
            }}
          >
            {label}
          </div>

          {subtitle && (
            <div
              style={{
                fontSize: 12,
                color: '#6B7280',
                marginTop: 4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
