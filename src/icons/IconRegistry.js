export const IconRegistry = {

  providers: {
    aws: {
      type: "fallback",
      shortLabel: "AWS",
      bg: "#FFF7ED",
      fg: "#C2410C"
    }
  },

  securityPlatforms: {
    slack: {
      type: "fallback",
      shortLabel: "SL",
      bg: "#F3E8FF",
      fg: "#6B21A8"
    }
  },

  awsServices: {

    securityHub: {
      type: "fallback",
      shortLabel: "SH",
      bg: "#E8F1FE",
      fg: "#1D4ED8"
    },

    lambda: {
      type: "fallback",
      shortLabel: "λ",
      bg: "#FFF7ED",
      fg: "#C2410C"
    }

  }

}

export const getIcon = (path) => {

  const parts = path.split(".")
  let current = IconRegistry

  for (const part of parts) {
    current = current?.[part]
    if (!current) return null
  }

  return current
}
