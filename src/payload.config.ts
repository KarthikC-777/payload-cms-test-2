import { payloadCloud } from "@payloadcms/plugin-cloud";
import path from "path";
import { buildConfig } from "payload/config";
import GLOBAL_PREFIX_CONSTANT from "./constants/global-prefix.constant";
import Users from "./collections/Users";
import lOArtistsFile from "./collections/lo-artists-file";
import loCatalogs from "./collections/lo-catalogs";
import loSalesConsultantDescription from "./collections/lo-sales-consultant-description";
import { Media } from "./collections/Media";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  routes: {
    api: GLOBAL_PREFIX_CONSTANT,
  },
  collections: [
    Users,
    lOArtistsFile,
    loCatalogs,
    loSalesConsultantDescription,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
});
