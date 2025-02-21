import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "~/tests/example.test"

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

const runBareMinimumClient = () => {
  /*
    Trying to run a bare minimum example on the client side:
    In the negative sample, `ah` returns an empty header object. 
    This shows in the msw update, the Headers copy constructor is no longer working.
    However, it works fine in this experiment.
  */
    const h = new Headers();
    h.set("Content-Type", "application/json");
    console.log(h);
    const ah = new Headers(h);
    console.log(ah);
}

export default function App() {
  runBareMinimumClient();
  return <Outlet />;
}
