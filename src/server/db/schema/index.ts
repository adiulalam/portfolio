import * as account from "./account";
import * as post from "./post";
import * as session from "./session";
import * as user from "./user";
import * as verificationToken from "./verificationToken";

const schema = {
  ...account,
  ...post,
  ...session,
  ...user,
  ...verificationToken,
};

export default schema;
