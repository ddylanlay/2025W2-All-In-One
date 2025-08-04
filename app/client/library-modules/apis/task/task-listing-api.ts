import { ApiTaskListing } from "/app/shared/api-models/task-listing/ApiTaskListing";
import { ApiInsertTaskListingPayload } from "/app/shared/api-models/task-listing/TaskListingInsertData";
import { MeteorMethodIdentifier } from "/app/shared/meteor-method-identifier";

export async function apiGetListingForProperty(
  propertyId: string
): Promise<ApiTaskListing> {
  const fetchedListing = await Meteor.callAsync(
    MeteorMethodIdentifier.LISTING_GET_FOR_TASK,
    propertyId
  );

  return fetchedListing;
}

export async function apiGetAllListedListings(): Promise<ApiTaskListing[]> {
  const fetchedListings: ApiTaskListing[] = await Meteor.callAsync(
    MeteorMethodIdentifier.LISTING_GET_ALL_LISTED
  );

  return fetchedListings;
}

export async function apiInsertTasListing(
  taskId: string
) {
  const data: ApiInsertTaskListingPayload = {
    task_id: taskId
  };
  const insertedListing: string = await Meteor.callAsync(
    MeteorMethodIdentifier.INSERT_TASK_LISTING,
    data,
  );
  return insertedListing;
}

export async function apiGetListingStatusByName(name: string): Promise<string> {
  const listingStatusId = await Meteor.callAsync(
    MeteorMethodIdentifier.LISTING_STATUS_GET_BY_NAME,
    name
  );
  return listingStatusId;
}
export async function apiSubmitDraftListing(propertyId: string): Promise<void> {
  await Meteor.callAsync(
    MeteorMethodIdentifier.LISTING_SUBMIT_DRAFT,
    propertyId
  );
}
