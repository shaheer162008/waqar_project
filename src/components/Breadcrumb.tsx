import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-gray-600 flex items-center flex-wrap">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
          {item.href ? (
            <Link
              href={item.href}
              className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-gray-800">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
