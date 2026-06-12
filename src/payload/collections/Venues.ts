import type { CollectionConfig } from "payload";

export const Venues: CollectionConfig = {
  slug: "venues",
  admin: { useAsTitle: "name", group: "Content" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "location", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "coverImage", type: "upload", relationTo: "media" },
    {
      name: "gallery",
      type: "array",
      fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
    },
    { name: "capacity", type: "text", admin: { description: 'e.g. "Up to 1000 guests"' } },
    {
      name: "suitableFor",
      type: "select",
      hasMany: true,
      options: [
        { label: "Wedding", value: "wedding" },
        { label: "Corporate", value: "corporate" },
        { label: "Birthday", value: "celebration" },
        { label: "Destination Wedding", value: "destination" },
      ],
    },
    {
      name: "amenities",
      type: "array",
      fields: [{ name: "amenity", type: "text", required: true }],
    },
    {
      name: "coordinates",
      type: "group",
      fields: [
        { name: "lat", type: "number" },
        { name: "lng", type: "number" },
      ],
    },
    { name: "partner", type: "checkbox", defaultValue: false, label: "Partner Venue" },
  ],
};
