import * as account from "./account";
import * as image from "./image";
import * as post from "./post";
import * as profile from "./profile";
import * as project from "./project";
import * as session from "./session";
import * as user from "./user";
import * as verificationToken from "./verificationToken";

const schema = {
  ...account,
  ...image,
  ...post,
  ...profile,
  ...project,
  ...session,
  ...user,
  ...verificationToken,
};

export default schema;
