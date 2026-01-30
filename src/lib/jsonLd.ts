// JSON-LD structured data generators for schema.org markup

const SITE_URL = "https://andrewho.me";
const AUTHOR_NAME = "Andrew Ho";

export type PersonSchema = {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  image: string;
  jobTitle: string;
  worksFor: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  sameAs: string[];
  description: string;
};

export type WebSiteSchema = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
  description: string;
};

export type BlogPostingSchema = {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
  publisher: {
    "@type": "Person";
    name: string;
    url: string;
  };
  url: string;
  description?: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
};

export type CreativeWorkSchema = {
  "@type": "CreativeWork";
  name: string;
  description: string;
  dateCreated: string;
  url?: string;
  author: {
    "@type": "Person";
    name: string;
  };
};

export type ItemListSchema = {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  numberOfItems: number;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    item: CreativeWorkSchema;
  }>;
};

export function generatePersonSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/andrew-dog.jpg`,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Owner",
      url: "https://www.owner.com",
    },
    sameAs: [
      "https://github.com/andrewh0",
      "https://bsky.app/profile/andrewho.me",
      "https://x.com/andrewlho_codes",
      "https://mastodon.social/@andrewh0",
      "https://linkedin.com/in/andrewh0",
    ],
    description:
      "Software engineer based in the San Francisco Bay Area. Currently building software for local restaurants at Owner.",
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: AUTHOR_NAME,
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    description:
      "Andrew Ho is a software engineer based in the San Francisco Bay Area.",
  };
}

export function generateBlogPostingSchema(post: {
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  tagline?: string | null;
}): BlogPostingSchema {
  const postUrl = `${SITE_URL}/notes/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    url: postUrl,
    ...(post.tagline && { description: post.tagline }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
}

type Project = {
  name: string;
  year: number;
  description: string;
  url?: string;
};

export function generateProjectsSchema(projects: Project[]): ItemListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Andrew Ho",
    description:
      "A collection of software projects, experiments, and creative works by Andrew Ho.",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        dateCreated: `${project.year}`,
        ...(project.url && { url: project.url }),
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
        },
      },
    })),
  };
}
