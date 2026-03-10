export default function Icon({ icon, label, size = 32 }) {

  const fallback =
    icon?.shortLabel ||
    label?.slice(0, 2)?.toUpperCase() ||
    "NA"

  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: 8,
        background: icon?.bg || "#E5E7EB",
        color: icon?.fg || "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 700
      }}
    >
      {fallback}
    </div>
  )
}
