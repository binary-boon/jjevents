import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "icon",
      type: "select",
      required: true,
      options: [
        { label: "Heart", value: "heart" },
        { label: "Globe", value: "globe" },
        { label: "Building", value: "building" },
        { label: "Cake", value: "cake" },
        { label: "Music", value: "music" },
        { label: "Flower", value: "flower" },
        { label: "Camera", value: "camera" },
        { label: "Utensils", value: "utensils" },
        { label: "Star", value: "star" },
      ],
    },
    { name: "shortDescription", type: "textarea", required: true },
    { name: "fullDescription", type: "richText" },
    {
      name: "features",
      type: "array",
      fields: [{ name: "feature", type: "text", required: true }],
    },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "gallery",
      type: "array",
      fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
    },
    { name: "startingPrice", type: "text", label: "Starting Price", admin: { description: 'e.g. "₹2,50,000"' } },
    { name: "order", type: "number", label: "Sort Order", defaultValue: 0 },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
