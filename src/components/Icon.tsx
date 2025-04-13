import {
  Rocket,
  LineChart,
  Leaf,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { JSX } from "react";
type Props = {
  iconName: string;
  iconColor: string;
  size?: number;
};
const iconMap: Record<string, JSX.ElementType> = {
  Rocket,
  LineChart,
  Leaf,
  Mail,
  Github,
  Linkedin,
  Phone,
};
export default function Icon({ iconName, iconColor, size }: Readonly<Props>) {
  const LucideIcon = iconMap[iconName] || Leaf;
  return (
    <LucideIcon size={size ?? 50} color={`${iconColor}`} className="text-4xl" />
  );
}
