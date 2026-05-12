
export const themeColors = {
    // Brand — high-contrast yellow on black/white
    primary: "#FFD700",
    primaryHover: "#E6C200",
    primaryLight: "rgba(255, 215, 0, 0.14)",
    primaryGlow: "rgba(255, 215, 0, 0.45)",
    primaryGlowHover: "rgba(255, 215, 0, 0.65)",

    secondary: "#000000",
    secondaryHover: "#171717",

    slate: {
        50: "#ffffff",
        200: "#000000",
        400: "#000000",
        500: "#000000",
        800: "#000000",
        900: "#000000",
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
