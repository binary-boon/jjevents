import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    group: "Content",
    defaultColumns: ["title", "category", "location", "featured", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Wedding", value: "wedding" },
        { label: "Destination Wedding", value: "destination-wedding" },
        { label: "Corporate", value: "corporate" },
        { label: "Birthday & Anniversary", value: "celebration" },
        { label: "Engagement & Pre-Wedding", value: "pre-wedding" },
        { label: "Social Gathering", value: "social" },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "gallery",
      type: "array",
      label: "Gallery Images",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
    {
      name: "videoUrl",
      type: "text",
      label: "Highlight Video URL",
      admin: {
        description: "YouTube or Vimeo embed URL",
      },
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "venue",
      type: "relationship",
      relationTo: "venues",
    },
    {
      name: "guestCount",
      type: "text",
      label: "Guest Count",
      admin: {
        description: 'e.g. "500+"',
      },
    },
    {
      name: "eventDate",
      type: "date",
      label: "Event Date",
    },
    {
      name: "clientBrief",
      type: "textarea",
      label: "Client Brief",
      admin: {
        description: "What the client wanted",
      },
    },
    {
      name: "ourApproach",
      type: "richText",
      label: "Our Approach",
      admin: {
        description: "How we made it happen — the case study narrative",
      },
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
      admin: {
        description: "Link a client testimonial for this event",
      },
    },
    // SEO
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", label: "Meta Title" },
        { name: "description", type: "textarea", label: "Meta Description" },
        { name: "image", type: "upload", relationTo: "media", label: "OG Image" },
      ],
    },
  ],
};
