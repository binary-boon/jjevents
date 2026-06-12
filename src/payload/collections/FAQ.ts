import type { CollectionConfig } from "payload";

export const FAQ: CollectionConfig = {
  slug: "faq",
  admin: { useAsTitle: "question", group: "Content" },
  access: { read: () => true },
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "category",
      type: "select",
      options: [
        { label: "General", value: "general" },
        { label: "Pricing", value: "pricing" },
        { label: "Planning", value: "planning" },
        { label: "Logistics", value: "logistics" },
      ],
      defaultValue: "general",
    },
  ],
};
