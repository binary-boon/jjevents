import type { CollectionConfig } from "payload";

export const Packages: CollectionConfig = {
  slug: "packages",
  admin: { useAsTitle: "name", group: "Content" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "tagline", type: "text", required: true },
    { name: "price", type: "text", required: true, admin: { description: 'Display price e.g. "₹6,50,000"' } },
    { name: "priceNote", type: "text", defaultValue: "Starting price • Customizable" },
    {
      name: "tier",
      type: "select",
      required: true,
      options: [
        { label: "Silver", value: "silver" },
        { label: "Gold", value: "gold" },
        { label: "Platinum", value: "platinum" },
      ],
    },
    { name: "popular", type: "checkbox", defaultValue: false, label: "Mark as Popular" },
    {
      name: "features",
      type: "array",
      required: true,
      fields: [{ name: "feature", type: "text", required: true }],
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
