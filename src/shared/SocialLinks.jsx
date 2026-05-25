import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../config/profile";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  {
    ariaKey: "linkedinAria",
    className: "linkedin",
    href: profile.links.linkedin,
    Icon: FaLinkedin,
    titleKey: "linkedinTitle",
  },
  {
    ariaKey: "githubAria",
    className: "github",
    href: profile.links.github,
    Icon: FaGithub,
    titleKey: "githubTitle",
  },
];

const SocialLinks = ({ className = "social-icons" }) => {
  const { content } = useLanguage();

  return (
    <div className={className}>
      {socialLinks.map(({ ariaKey, className, href, Icon, titleKey }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={content.social[ariaKey]}
          className={`icon ${className}`}
          title={content.social[titleKey]}
          key={href}
        >
          <Icon size={30} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
