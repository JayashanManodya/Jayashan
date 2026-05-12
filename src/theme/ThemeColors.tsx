
export const themeColors = {
    // Brand Colors
    primary: "#6366f1", // Main brand color (Indigo)
    primaryHover: "#4f46e5", // Hover state
    primaryLight: "rgba(99, 102, 241, 0.1)", // Light version for backgrounds
    primaryGlow: "rgba(99, 102, 241, 0.5)", // Glow effect
    primaryGlowHover: "rgba(99, 102, 241, 0.7)",

    // Secondary / Accent
    secondary: "#a855f7", // Purple
    secondaryHover: "#9333ea",

    // Neutral Colors (can be adjusted as well)
    slate: {
        50: "#f8fafc",
        200: "#e2e8f0",
        400: "#94a3b8",
        500: "#64748b",
        800: "#1e293b",
        900: "#0f172a",
    }
};

export const ColorThemeConfig = () => {
    return (
        <style dangerouslySetInnerHTML={{
            __html: `
      :root {
        --brand-primary: ${themeColors.primary};
        --brand-primary-hover: ${themeColors.primaryHover};
        --brand-primary-light: ${themeColors.primaryLight};
        --brand-primary-glow: ${themeColors.primaryGlow};
        --brand-primary-glow-hover: ${themeColors.primaryGlowHover};
        --brand-secondary: ${themeColors.secondary};
        --brand-secondary-hover: ${themeColors.secondaryHover};
      }
    `}} />
    );
};
