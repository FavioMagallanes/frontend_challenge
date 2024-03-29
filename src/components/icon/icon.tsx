import { FC } from "react";
import { icons } from "lucide-react";

type IconNames = keyof typeof icons;

interface IconProps {
  name: IconNames;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};
