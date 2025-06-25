"use client";

import { FolderOpen, Terminal } from "lucide-react";
import Navbar from "../_components/navbar";
import ShowcaseItem from "./_components/ShowcaseItem";

const showcaseProjects = [
	{
		title: "gl1.chat",
		description:
			"An ai platform focused on speed, reliability and advanced workflows powered by trpc, drizzle, vite, elysia, tanstack router",
		imageUrl: "https://gl1.chat/social-share-image.png",
		liveUrl: "https://gl1.chat/?ref=better-t-stack",
		tags: ["tRPC", "Drizzle", "Elysia", "Vite", "TanStack Router"],
	},
	{
		title: "Look Crafted",
		description: "✨ Transform Your Selfies into Stunning Headshots with AI",
		imageUrl: "https://www.lookcrafted.com/opengraph-image.png",
		liveUrl: "http://lookcrafted.com",
		tags: [
			"oRPC",
			"Next.js",
			"Hono",
			"Bun",
			"Neon",
			"Drizzle",
			"Better Auth",
			"Biome",
			"Husky",
			"Turborepo",
		],
	},
];

const ogImage =
	"https://api.screenshothis.com/v1/screenshots/take?api_key=ss_live_NQJgRXqHcKPwnoMTuQmgiwLIGbVfihjpMyQhgsaMyNBHTyesvrxpYNXmdgcnxipc&url=https%3A%2F%2Fbetter-t-stack.dev%2Fshowcase&width=1200&height=630&block_ads=true&block_cookie_banners=true&block_trackers=true&device_scale_factor=0.75&prefers_color_scheme=dark&is_cached=true";

export const metadata: Metadata = {
	title: "Better-T Stack",
	description:
		"A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations",
	keywords: [
		"TypeScript",
		"project scaffolding",
		"boilerplate",
		"type safety",
		"Drizzle",
		"Prisma",
		"hono",
		"elysia",
		"turborepo",
		"trpc",
		"orpc",
		"turso",
		"neon",
		"Better-Auth",
		"convex",
		"monorepo",
		"Better-T Stack",
		"create-better-t-stack",
	],
	authors: [{ name: "Better-T Stack Team" }],
	creator: "Better-T Stack",
	publisher: "Better-T Stack",
	formatDetection: {
		email: false,
		telephone: false,
	},
	metadataBase: new URL("https://better-t-stack.dev/showcase"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Better-T Stack",
		description:
			"A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations",
		url: "https://better-t-stack.dev",
		siteName: "Better-T Stack",
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: "Better-T Stack - Showcase",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Better-T Stack",
		description:
			"A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations",
		images: [ogImage],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-video-preview": -1,
			"max-snippet": -1,
		},
	},
	category: "Technology",
	icons: {
		icon: "/logo.svg",
	},
};

export default function ShowcasePage() {
	return (
		<>
			<Navbar />
			<main className="flex min-h-svh flex-col items-center bg-background px-4 pt-24 pb-10 sm:px-6 md:px-8 md:pt-28 lg:pt-32">
				<div className="mx-auto w-full max-w-6xl">
					<div className="mb-8">
						<div className="mb-6 flex items-center gap-2">
							<Terminal className="h-4 w-4 text-primary" />
							<span className="font-bold font-mono text-lg">
								PROJECT_SHOWCASE.EXE
							</span>
							<div className="h-px flex-1 bg-border" />
							<span className="font-mono text-muted-foreground text-xs">
								[{showcaseProjects.length} PROJECTS FOUND]
							</span>
						</div>

						<div className="terminal-block-hover mb-8 rounded border border-border bg-muted/20 p-4">
							<div className="flex items-center gap-2 text-sm">
								<span className="text-primary">$</span>
								<span className="font-mono text-foreground">
									user@dev-machine:~/showcase$ ls -la
								</span>
							</div>
							<div className="mt-2 flex items-center gap-2 text-sm">
								<span className="text-primary">$</span>
								<span className="font-mono text-muted-foreground">
									# Discover amazing projects built with Better-T-Stack
								</span>
							</div>
							<div className="mt-2 flex items-center gap-2 text-sm">
								<span className="text-primary">$</span>
								<span className="font-mono text-muted-foreground">
									# Real-world implementations showcasing stack capabilities
								</span>
							</div>
						</div>

						<div className="terminal-block-hover rounded border border-border bg-background p-3">
							<div className="flex items-center gap-2 font-mono text-sm">
								<FolderOpen className="h-4 w-4 text-blue-400" />
								<span className="text-foreground">/showcase/projects/</span>
								<div className="ml-auto text-muted-foreground text-xs">
									drwxr-xr-x {showcaseProjects.length} items
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{showcaseProjects.map((project, index) => (
							<ShowcaseItem key={project.title} {...project} index={index} />
						))}
					</div>

					<div className="mt-8">
						<div className="terminal-block-hover rounded border border-border bg-muted/20 p-4">
							<div className="flex items-center gap-2 text-sm">
								<span className="text-primary">$</span>
								<span className="font-mono text-muted-foreground">
									# Want to showcase your project? Submit via GitHub issues
								</span>
							</div>
							<div className="mt-2 flex items-center gap-2 text-sm">
								<span className="text-primary">$</span>
								<span className="font-mono text-foreground">
									echo &quot;Built something amazing? We&apos;d love to feature
									it!&quot;
								</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
