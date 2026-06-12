import type { CollectionConfig } from 'payload';

/**
 * Collections for the JJ Events site. Register them in payload.config.ts:
 *
 *   import { collections } from '@/payload/collections';
 *   // ...
 *   export default buildConfig({
 *     // ...
 *     collections: [...collections /*, Users, etc. *\/],
 *   });
 *
 * Fields intentionally mirror the types in src/data/index.ts so a section can
 * switch from the static array to `payload.find(...)` with no shape changes.
 */

const publicRead = { read: () => true };

export const Media: CollectionConfig = {
  slug: 'media',
  access: { ...publicRead },
  upload: true, // the @payloadcms/storage-vercel-blob plugin handles the backend
  fields: [{ name: 'alt', type: 'text' }],
};

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'tag', 'order'] },
  access: { ...publicRead },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'tag', type: 'text' },
    {
      name: 'icon',
      type: 'select',
      defaultValue: 'heart',
      options: ['heart', 'landmark', 'music', 'sparkles', 'presentation', 'home'],
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'category', 'order'] },
  access: { ...publicRead },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'category', type: 'text', required: true },
    { name: 'location', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'size', type: 'select', defaultValue: 'half', options: ['tall', 'wide', 'half'] },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: { useAsTitle: 'name' },
  access: { ...publicRead },
  fields: [
    { name: 'quote', type: 'textarea', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Packages: CollectionConfig = {
  slug: 'packages',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'audience', 'price'] },
  access: { ...publicRead },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'audience', type: 'text' },
    { name: 'price', type: 'text', admin: { description: 'e.g. ₹3.5L+ or On Request' } },
    { name: 'priceNote', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'ribbon', type: 'text' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'included', type: 'checkbox', defaultValue: true },
      ],
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'date'] },
  access: { ...publicRead },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'text' },
    { name: 'date', type: 'text', admin: { description: 'Display label, e.g. "12 Months Out"' } },
    { name: 'excerpt', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'body', type: 'richText' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: { useAsTitle: 'q' },
  access: { ...publicRead },
  fields: [
    { name: 'q', type: 'text', required: true },
    { name: 'a', type: 'textarea', required: true },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'eventType', 'status', 'createdAt'] },
  // Public can submit; only logged-in admins can read/update.
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'eventType', type: 'text' },
    { name: 'guests', type: 'text' },
    { name: 'message', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'contacted', 'won', 'closed'],
    },
  ],
};

export const collections: CollectionConfig[] = [
  Media,
  Services,
  Projects,
  Testimonials,
  Packages,
  Posts,
  Faqs,
  Enquiries,
];
