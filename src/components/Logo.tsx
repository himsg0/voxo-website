import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img src={logoImg} alt="Voxo Media Logo" className="h-32 w-auto object-contain" />
    </Link>
  );
}

