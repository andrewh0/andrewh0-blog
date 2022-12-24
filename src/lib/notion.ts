// https://samuelkraft.com/blog/building-a-notion-blog-with-public-api

import { Client, isFullPage } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const NOTION_BLOG_DB_ID = process.env.NOTION_BLOG_DB_ID ?? "";
const notion = new Client({ auth: process.env.NOTION_API_KEY ?? "" });

const n2m = new NotionToMarkdown({ notionClient: notion });

const listPosts = async () => {
  const posts: QueryDatabaseResponse = await notion.databases.query({
    database_id: NOTION_BLOG_DB_ID,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
    sorts: [
      {
        property: "publishedAt",
        direction: "descending",
      },
    ],
  });

  return posts.results.filter(isFullPage).map(({ properties, id }) => {
    const { publishedAt, createdAt, status, updatedAt, tagline, title } =
      // Don't understand why typing is failing here. Maybe this blog post can help later.
      // https://www.alanjohn.dev/blog/Building-a-Developer-Portfolio-Creating-a-NextJS-blog-in-typescript-using-Notion-API
      properties as any;

    return {
      id,
      publishedAt: publishedAt.date,
      createdAt: createdAt.created_time,
      status: status.status.name,
      updatedAt: updatedAt.last_edited_time,
      tagline: tagline.rich_text[0].plain_text ?? null,
      title: title.title[0].plain_text,
    };
  });
};

const showPost = async (notionPageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(notionPageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString;
};

export { listPosts, showPost };
