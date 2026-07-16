import React, { createContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: {
    children: React.ReactNode
}) => {

    const [theme, setTheme] = useState<"light" | "dark">("dark");


    useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

