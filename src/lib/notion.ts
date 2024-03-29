// https://samuelkraft.com/blog/building-a-notion-blog-with-public-api

import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  DatabaseObjectResponse,
  PartialDatabaseObjectResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const NOTION_BLOG_DB_ID = process.env.NOTION_BLOG_DB_ID ?? "";
const notion = new Client({ auth: process.env.NOTION_API_KEY ?? "" });

const n2m = new NotionToMarkdown({ notionClient: notion });

// Type guard based on https://github.com/makenotion/notion-sdk-js/blob/241fcf1df946f1c91540a582bea4c47768110bdf/src/helpers.ts#L100-L104
function isFullPage(
  response:
    | DatabaseObjectResponse
    | PartialDatabaseObjectResponse
    | PageObjectResponse
    | PartialPageObjectResponse,
): response is PageObjectResponse {
  return "url" in response;
}

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
    const { publishedAt, slug, createdAt, status, updatedAt, tagline, title } =
      // Don't understand why typing is failing here. Maybe this blog post can help later.
      // https://www.alanjohn.dev/blog/Building-a-Developer-Portfolio-Creating-a-NextJS-blog-in-typescript-using-Notion-API
      properties as any;

    return {
      id,
      slug: slug?.rich_text?.[0]?.plain_text ?? id,
      publishedAt: publishedAt.date.start,
      createdAt: createdAt.created_time,
      status: status.status.name,
      updatedAt: updatedAt.last_edited_time,
      tagline: tagline?.rich_text?.[0]?.plain_text ?? null,
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
