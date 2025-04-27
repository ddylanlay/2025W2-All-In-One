import { Meteor } from "meteor/meteor";
import { ListingCollection } from "../../database/listing/ListingCollection";

Meteor.methods({
  "listing.insert"(doc) {
    return ListingCollection.insertAsync({
      ...doc,
    });
  },

  "listing.getOne"(listingId: string) {
    return ListingCollection.findOne({ _id: listingId});
  }
});