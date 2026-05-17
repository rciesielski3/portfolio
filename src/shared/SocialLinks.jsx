import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../config/profile";

const socialLinks = [
  {
    ariaLabel: "Open LinkedIn profile",
    className: "linkedin",
    href: profile.links.linkedin,
    Icon: FaLinkedin,
    title: "Open LinkedIn",
  },
  {
    ariaLabel: "Open GitHub profile",
    className: "github",
    href: profile.links.github,
    Icon: FaGithub,
    title: "Open GitHub",
  },
];

const SocialLinks = ({ className = "social-icons" }) => (
  <div className={className}>
    {socialLinks.map(({ ariaLabel, className, href, Icon, title }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`icon ${className}`}
        title={title}
        key={href}
      >
        <Icon size={30} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
