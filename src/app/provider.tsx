'use client'

import { ThemeProvider, useTheme } from 'next-themes'

export function Providers({ children }) {
    const { theme, setTheme } = useTheme();
    if (theme !== 'dark' && theme !== 'light') {
        setTheme('dark')
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
