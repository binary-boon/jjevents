import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "clientName",
    group: "Content",
  },
  access: { read: () => true },
  fields: [
    { name: "clientName", type: "text", required: true, label: "Client Name" },
    { name: "clientPhoto", type: "upload", relationTo: "media" },
    { name: "eventType", type: "text", label: "Event Description", admin: { description: 'e.g. "Royal Wedding, Udaipur"' } },
    { name: "quote", type: "textarea", required: true },
    { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
    { name: "videoUrl", type: "text", label: "Video Testimonial URL" },
    { name: "featured", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    { name: "event", type: "relationship", relationTo: "events" },
  ],
};
