import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    group: "Content",
    defaultColumns: ["title", "category", "status", "publishedDate"],
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    { name: "publishedDate", type: "date", label: "Publish Date", admin: { position: "sidebar" } },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Venues", value: "venues" },
        { label: "Trends", value: "trends" },
        { label: "Planning Tips", value: "planning" },
        { label: "Real Weddings", value: "real-weddings" },
        { label: "Décor Ideas", value: "decor" },
        { label: "Budget Guide", value: "budget" },
      ],
    },
    { name: "coverImage", type: "upload", relationTo: "media", required: true },
    { name: "excerpt", type: "textarea", required: true, maxLength: 200 },
    { name: "content", type: "richText", required: true },
    { name: "readTime", type: "text", label: "Read Time", admin: { description: 'e.g. "5 min"' } },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
    },
    { name: "author", type: "relationship", relationTo: "team-members" },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "blog-posts",
      hasMany: true,
      maxRows: 3,
    },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
