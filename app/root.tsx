import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ondrej Luknár - AI Platform Architect & Software Engineer</title>
        <meta
            name="description"
            content="AI Platform Architect and Senior Software Engineer with 10+ years experience in Angular, Spring Boot, microservices, and enterprise solutions. Based in Bratislava, Slovakia."
        />
        <meta
            name="keywords"
            content="solution architect, software engineer, angular, spring boot, microservices, java, typescript, bratislava, slovakia, fullstack developer, enterprise solutions, ondrej luknar"
        />
        <meta name="author" content="Ondrej Luknár" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ondrej Luknár - AI Platform Architect & Software Engineer" />
        <meta property="og:description" content="AI Platform Architect with hands-on expertise in enterprise software development. Specializing in Angular, Spring Boot, and microservices architecture." />
        <meta property="og:url" content="https://ondrej-luknar.eu" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ondrej Luknár Portfolio" />

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ondrej-luknar.eu" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
