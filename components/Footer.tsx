import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Twitter / X", href: "https://twitter.com", icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 flex flex-col gap-4 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      {/* Copyright + Legal Links */}
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-x-4">
        {/* Copyright */}
        <p>
          Copyright &copy; {year}{" "}
          <span className="font-medium text-ink-700">Peterdraw</span>
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-ink-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-7 w-7 items-center justify-center rounded-full text-ink-400 hover:bg-ink-50 hover:text-ink-700"
          >
            <social.icon size={14} />
          </a>
        ))}
      </div>
    </footer>
  );
}
