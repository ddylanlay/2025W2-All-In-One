import { Mongo } from "meteor/mongo";
import { ListingDocument } from "./ListingDocument";

export const ListingCollection: Mongo.Collection<ListingDocument> = new Mongo.Collection("listings");