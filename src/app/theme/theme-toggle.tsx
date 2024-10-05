"use client";

import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Switch
                    checked={theme === "dark"}
                    onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
                />
            </motion.div>
            <Moon className="h-4 w-4" />
            <span className="sr-only">Alternar tema</span>
        </div>
    );
}
