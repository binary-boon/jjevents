import type { CollectionConfig } from "payload";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  admin: { useAsTitle: "name", group: "Content" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "bio", type: "textarea" },
    { name: "funFact", type: "text", label: "Fun Fact" },
    {
      name: "socials",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "linkedin", type: "text" },
        { name: "twitter", type: "text" },
      ],
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
