import React from "react";

interface CardProps {
  title: string;
  body: string;
  href: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ body, href, title, description }) => {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>

        <p>{body}</p>

        {description && <p>{description}</p>}
      </a>
    </li>
  );
};

export { Card };

export type { CardProps };
