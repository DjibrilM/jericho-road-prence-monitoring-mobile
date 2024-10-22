import { extendTheme } from "native-base";

// Define Tailwind Slate colors
const slateColors = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};

// Extend the theme
const theme = extendTheme({
  colors: {
    slate: slateColors,
  },
  components: {
    Input: {
      baseStyle: {
        borderColor: "slate.300",
        bg: "slate.50",
        _focus: {
          borderColor: "slate.500",
          backgroundColor: "slate.100",
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
    Button: {
      baseStyle: {
        bg: "slate.600",
        _hover: {
          bg: "slate.700",
        },
        _pressed: {
          bg: "slate.800",
        },
        _text: {
          color: "slate.50",
        },
      },
      defaultProps: {
        size: "md",
        rounded: "md",
      },
    },
    Text: {
      baseStyle: {
        color: "slate.600",
      },
    },
    Box: {
      baseStyle: {
        bg: "slate.100",
      },
    },
    Checkbox: {
      baseStyle: {
        borderColor: "slate.400",
        _checked: {
          bg: "slate.600",
          borderColor: "slate.600",
        },
        _text: {
          color: "slate.600",
        },
      },
    },
    Radio: {
      baseStyle: {
        colorScheme: "slate",
        _checked: {
          borderColor: "slate.600",
          bg: "slate.600",
        },
        _text: {
          color: "slate.600",
        },
      },
    },
    Switch: {
      baseStyle: {
        onTrackColor: "slate.600",
        offTrackColor: "slate.300",
        onThumbColor: "slate.50",
        offThumbColor: "slate.200",
      },
    },
    Heading: {
      baseStyle: {
        color: "slate.700",
        fontWeight: "bold",
      },
    },
  },
  fonts: {
    heading: "Helvetica, Arial, sans-serif",
    body: "Helvetica, Arial, sans-serif",
    mono: "Courier New, monospace",
  },
});

export default theme;
