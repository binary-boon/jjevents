import { buildConfig } from "payload";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import sharp from "sharp";
import { collections } from './collections';

// Collections
import { Media } from "./collections/Media";
import { Events } from "./collections/Events";
import { Services } from "./collections/Services";
import { Testimonials } from "./collections/Testimonials";
import { BlogPosts } from "./collections/BlogPosts";
import { TeamMembers } from "./collections/TeamMembers";
import { Venues } from "./collections/Venues";
import { Inquiries } from "./collections/Inquiries";
import { FAQ } from "./collections/FAQ";
import { Packages } from "./collections/Packages";
import { Users } from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — JJ Events Admin",
      favicon: "/favicon.ico",
      ogImage: "/og-image.jpg",
    },
    components: {},
  },

  editor: lexicalEditor(),

  collections: [
    Users,
    Media,
    Events,
    Services,
    Testimonials,
    BlogPosts,
    TeamMembers,
    Venues,
    Inquiries,
    FAQ,
    ...collections,
  ],

  // ─── Vercel Postgres ───
  // Uses POSTGRES_URL from Vercel environment automatically.
  // For local dev, set POSTGRES_URL in your .env file
  // (grab it from Vercel Dashboard → Storage → your database → .env.local tab)
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),

  plugins: [
    // ─── Vercel Blob Storage for media uploads ───
    // Uses BLOB_READ_WRITE_TOKEN from Vercel environment.
    // For local dev, grab the token from Vercel Dashboard → Storage → Blob → Tokens
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),

    // ─── Alternative: Cloudflare R2 (uncomment to use instead of Vercel Blob) ───
    // import { s3Storage } from "@payloadcms/storage-s3";
    // s3Storage({
    //   collections: { media: { prefix: "media" } },
    //   bucket: process.env.S3_BUCKET || "",
    //   config: {
    //     credentials: {
    //       accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
    //       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
    //     },
    //     endpoint: process.env.S3_ENDPOINT || "",
    //     region: process.env.S3_REGION || "auto",
    //     forcePathStyle: true,
    //   },
    // }),
  ],

  secret: process.env.PAYLOAD_SECRET || "CHANGE-THIS-SECRET",
  sharp,
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
