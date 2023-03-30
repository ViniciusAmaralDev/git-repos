import { ownerSchema } from "./Owner";
import { ownerEmbedded } from "./Repository";
import { repositorySchema } from "./Repository";

const schema = [ownerSchema, repositorySchema, ownerEmbedded];
export default schema;
