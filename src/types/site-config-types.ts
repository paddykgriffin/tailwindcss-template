export type SiteMode = {
  light: string;
  dark: string;
};

export type SiteConfig = {
  siteName: string;
  theme: {
    darkMode: boolean;
    color: {
      primary: SiteMode;
      secondary: SiteMode;
    };
  };
};
