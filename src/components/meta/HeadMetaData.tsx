import Head from "next/head";
import React from "react";

export const HeadMetaData: React.FC<{
    title?: string;
    metaDescription?: string;
    ogImageUrl?: string;
    pathName?: string;
}> = ({
    title = "Nusa",
    metaDescription,
    ogImageUrl,
    pathName = "",
}) => {
    const defaultTitle = "Nusa UI";

    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ?? "https://localhost:3000";

    const pageUrl = new URL(pathName, baseUrl).toString();

    return (
        <Head>
            <title>{title + " - " + defaultTitle}</title>
            <link rel="icon" href="/" />

            {/* metadata */}
            <meta name="title" content={title + " - " + defaultTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="og:image" content={ogImageUrl} />
            <meta property="og:url" content={pageUrl} />
        </Head>
    )
}