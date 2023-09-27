import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { isLoggedIn } from "../access/isLoggedIn";

const lOArtistsFile: CollectionConfig = {
  slug: "lo-artists-files",
  labels: {
    singular: "lO Artists File",
    plural: "lO Artists Files",
  },
  admin: {
    useAsTitle: "file",
  },
  fields: [
    { name: "file", type: "upload", relationTo: "media" },
    { name: "version", type: "number" },
  ],
  access: {
    // Only admins can create users
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isLoggedIn,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin,
  },
};

export default lOArtistsFile;
