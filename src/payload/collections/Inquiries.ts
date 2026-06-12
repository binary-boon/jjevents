import type { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  admin: {
    useAsTitle: "name",
    group: "Leads",
    defaultColumns: ["name", "eventType", "eventDate", "status", "createdAt"],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    {
      name: "eventType",
      type: "select",
      required: true,
      options: [
        { label: "Wedding", value: "wedding" },
        { label: "Destination Wedding", value: "destination-wedding" },
        { label: "Corporate Event", value: "corporate" },
        { label: "Birthday / Anniversary", value: "celebration" },
        { label: "Engagement / Pre-Wedding", value: "pre-wedding" },
        { label: "Other", value: "other" },
      ],
    },
    { name: "eventDate", type: "date", label: "Tentative Date" },
    {
      name: "guestCount",
      type: "select",
      options: [
        { label: "Under 100", value: "under-100" },
        { label: "100 – 300", value: "100-300" },
        { label: "300 – 500", value: "300-500" },
        { label: "500 – 1000", value: "500-1000" },
        { label: "1000+", value: "1000+" },
      ],
    },
    { name: "message", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "In Discussion", value: "discussion" },
        { label: "Converted", value: "converted" },
        { label: "Closed", value: "closed" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "notes", type: "textarea", admin: { description: "Internal notes about this lead" } },
    {
      name: "source",
      type: "select",
      defaultValue: "website",
      options: [
        { label: "Website", value: "website" },
        { label: "WhatsApp", value: "whatsapp" },
        { label: "Referral", value: "referral" },
        { label: "Instagram", value: "instagram" },
        { label: "Google", value: "google" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
