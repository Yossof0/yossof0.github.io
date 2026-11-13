import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    HeadContent,
    Link,
    Outlet,
    Scripts,
    createRootRouteWithContext,
    useRouter,
    type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import portfolioCss from "../portfolio/portfolio.css?url";
import PortfolioShell from "../portfolio/PortfolioShell";
import premiumCss from "../portfolio/premium.css?url";
import appCss from "../styles.css?url";

function NotFoundComponent() {
    return (
        <div className="flex min-h-screen cursor-auto items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-7xl font-bold text-foreground">404</h1>
                <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
    console.error(error);
    const router = useRouter();
    useEffect(() => {
        reportLovableError(error, { boundary: "tanstack_root_error_component" });
    }, [error]);

    return (
        <div className="flex min-h-screen cursor-auto items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Something went wrong on our end. You can try refreshing or head back home.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                        Go home
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1" },
            { title: "Youssef Abdelwahed (Yossof Abdelwahed) — Web Developer" },
            {
                name: "description",
                content:
                    "Frontend & Full-Stack Web Developer based in Cairo, Egypt. Creator of the STEM El Fayoum School website and modern bilingual web apps. Skilled in React, TypeScript, Tailwind CSS, and more. Passionate about building high-quality web experiences. Available for freelance projects and collaborations.",
            },
            { name: "author", content: "Youssef Abdelwahed" },
            { name: "robots", content: "index, follow" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "https://yossof0.vercel.app" },
            { property: "og:site_name", content: "Youssef Abdelwahed Portfolio" },
            { property: "og:title", content: "Youssef Abdelwahed (Yossof Abdelwahed) — Web Developer" },
            {
                property: "og:description",
                content:
                    "Frontend & Full-Stack Web Developer based in Cairo, Egypt. Creator of the STEM El Fayoum School website and modern bilingual web apps.",
            },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Youssef Abdelwahed (Yossof Abdelwahed) — Web Developer" },
            {
                name: "twitter:description",
                content:
                    "Frontend & Full-Stack Web Developer based in Cairo, Egypt. Creator of the STEM El Fayoum School website and modern bilingual web apps.",
            },
        ],
        scripts: [
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebSite",
                            "@id": "https://yossof0.vercel.app#website",
                            name: "Youssef Abdelwahed Portfolio",
                            alternateName: "Yossof Abdelwahed Portfolio",
                            url: "https://yossof0.vercel.app",
                            publisher: {
                                "@id": "https://yossof0.vercel.app#person",
                            },
                        },
                        {
                            "@type": "Person",
                            "@id": "https://yossof0.vercel.app#person",
                            name: "Youssef Abdelwahed",
                            alternateName: [
                                "Yossof Abdelwahed",
                                "Youssef Abdelwahed Mohamed",
                                "Yossof0",
                                "يوسف عبد الواحد",
                                "يوسف عبدالواحد",
                            ],
                            jobTitle: "Full-Stack Web Developer",
                            url: "https://yossof0.vercel.app",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Cairo",
                                addressCountry: "EG",
                            },
                            sameAs: ["https://github.com/yossof0", "https://github.io", "https://wa.me/201050684777"],
                            knowsAbout: [
                                "React",
                                "TypeScript",
                                "TanStack Router",
                                "Next.js",
                                "Tailwind CSS",
                                "Full-Stack Web Development",
                                "UI/UX Design",
                                "Web Performance Optimization",
                            ],
                        },
                        {
                            "@type": "ProfessionalService",
                            "@id": "https://yossof0.vercel.app#service",
                            name: "Youssef Abdelwahed — Web Development Services",
                            url: "https://yossof0.vercel.app",
                            provider: {
                                "@id": "https://yossof0.vercel.app#person",
                            },
                            priceRange: "$$",
                            areaServed: "Worldwide",
                            serviceType: [
                                "Custom Web Applications",
                                "High-Converting Landing Pages",
                                "Portfolio & Business Websites",
                            ],
                        },
                        {
                            "@type": "CreativeWork",
                            name: "STEM El Fayoum School Official Website",
                            url: "https://stemelfayoum.vercel.app",
                            creator: {
                                "@id": "https://yossof0.vercel.app#person",
                            },
                            author: {
                                "@id": "https://yossof0.vercel.app#person",
                            },
                        },
                    ],
                }),
            },
        ],
        links: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Nunito:wght@400;500;600;700;800;900&display=swap",
            },
            { rel: "stylesheet", href: appCss },
            { rel: "stylesheet", href: portfolioCss },
            { rel: "stylesheet", href: premiumCss },
            { rel: "icon", href: "/favicon.png", type: "image/png" },
        ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
    return (
        <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body suppressHydrationWarning>
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function RootComponent() {
    const { queryClient } = Route.useRouteContext();

    return (
        <QueryClientProvider client={queryClient}>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <PortfolioShell>
                <Outlet />
            </PortfolioShell>
        </QueryClientProvider>
    );
}
