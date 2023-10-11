"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "../../icons/ThemeIcons";

const modes = [
  { name: "light", icon: Sun },
  { name: "dark", icon: Moon },
];

const initialMode = modes.find((mode) => {
  if (localStorage?.getItem("theme") === "dark") {
    return mode.name === "dark";
  } else {
    return mode.name === "light";
  }
})!;

type ModeIconProps = {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};

function ModeIcon({ icon: Icon }: ModeIconProps) {
  return (
    <Icon className="h-5 w-5 stroke-gray-900 group-hover:stroke-emerald-500" />
  );
}

export default function ThemeSwitcher() {
  const [selectedMode, setSelectedMode] = useState(initialMode);

  function handleClick() {
    if (selectedMode.name === "light") {
      setSelectedMode(modes[1]);
      localStorage.setItem("theme", "dark");
      let bodyElement = document.querySelector("body") as HTMLBodyElement;
      bodyElement.setAttribute("data-theme", "dark");
    } else {
      setSelectedMode(modes[0]);
      localStorage.removeItem("theme");
      let bodyElement = document.querySelector("body") as HTMLBodyElement;
      bodyElement.setAttribute("data-theme", "light");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      let bodyElement = document.querySelector("body") as HTMLBodyElement;
      bodyElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className="group cursor-default rounded-md p-1 bg-backgroundPrimary border border-primary"
    >
      <ModeIcon icon={selectedMode.icon} />
    </button>
  );
}
