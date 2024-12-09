import {
	SEO_DESCRIPTION,
	SEO_KEY_WORDS,
	SITE_NAME,
} from "@/constants/seo/seo.constants";

import { THEME_COLOR } from "@/config/_variables.config";

const Head = () => {
	
	const meta_name = [
		{
			name: "theme-color",
			content: THEME_COLOR,
		},
		{
			name: "google-site-verification",
			content: "fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY",
		},
		{
			name: "apple-mobile-web-app-status-bar-style",
			content: "black-translucent",
		},
		{
			name: "title",
			content: SITE_NAME,
		},
		{
			name: "description",
			content: SEO_DESCRIPTION,
		},
		{
			name: "robots",
			content: "index, follow",
		},
	];

	const meta_property = [
		{
			property: "og:title",
			content: SITE_NAME,
		},
		{
			property: "og:description",
			content: SEO_DESCRIPTION,
		},
	];

	const meta_link = [
		{
			rel: "manifest",
			href: "/manifest.json",
		},
		{
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/icons/icon-192x192.png",
		},
	];

	return (
		<head>
			{meta_name.map((el, index) => (
				<meta key={index} name={el.name} content={el.content} />
			))}

			{meta_property.map((el, index) => (
				<meta key={index} name={el.property} content={el.content} />
			))}

			{meta_link.map((el, index) => (
				<link key={index} rel={el.rel} sizes={el.sizes} href={el.href} type={el.type} />
			))}
		</head>
	);
};

export default Head;
