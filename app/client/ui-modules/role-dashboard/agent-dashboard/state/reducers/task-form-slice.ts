import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "/app/client/store";
import { TaskFormUIState } from "../TaskFormUIState";
import { getAllLandlords } from "/app/client/library-modules/domain-models/user/role-repositories/landlord-repository";
import { Landlord } from "/app/client/library-modules/domain-models/user/Landlord";
import { getProfileDataById } from "/app/client/library-modules/domain-models/user/role-repositories/profile-data-repository";

import { TaskFeatureDocument } from "/app/server/database/Task/models/TaskFeatureDocument";
import { getAllTaskFeatures } from "/app/client/library-modules/domain-models/Task/repositories/feature-respository";
import { insertTask } from "/app/client/library-modules/domain-models/Task/repositories/Task-repository";
import { BlobNamePrefix, UploadResults } from "/app/shared/azure/blob-models";
import {
  getImageUrlsFromUploadResults,
  uploadFilesHandler,
} from "/app/client/library-modules/apis/azure/blob-api";
import { ListingStatus } from "/app/shared/api-models/Task-listing/ListingStatus";
import { insertTaskListing } from "/app/client/library-modules/domain-models/Task-listing/repositories/listing-repository";
import { insertTaskPrice } from "/app/client/library-modules/domain-models/Task-price/Task-price-repository";
import { FormSchemaType } from "../../components/FormSchema";
import { mapFormSchemaToTaskInsertData } from "/app/client/library-modules/domain-models/Task/repositories/mappers/Task-mapper";

const initialState: TaskFormPageUiState = {
  TaskId: "",
  landlords: [],
  features: [],
  featureOptions: [],
};

export const TaskFormSlice = createSlice({
  name: "TaskForm",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, action) => {
      state.landlords = action.payload.landlordsWithProfileData;
      state.features = action.payload.features;
      state.featureOptions = action.payload.features.map((feature) => ({
        value: feature._id,
        label: feature.name,
      }));
    });
    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.TaskId = action.payload.TaskId;
    });
  },
});

export const load = createAsyncThunk("TaskForm/load", async () => {
  const landlords: Landlord[] = await getAllLandlords();
  const features: TaskFeatureDocument[] = await getAllTaskFeatures();
  const landlordsWithProfileData = await Promise.all(
    landlords.map(async (landlord) => {
      const profile = await getProfileDataById(landlord.profileDataId);

      return {
        ...landlord,
        firstName: profile.firstName,
        lastName: profile.lastName,
      };
    })
  );
  return { landlordsWithProfileData, features };
});

export const submitForm = createAsyncThunk(
  "TaskForm/insertTask",
  async (TaskFormData: FormSchemaType) => {
    const { TaskInsertData, monthly_rent, images } =
      await mapFormSchemaToTaskInsertData(TaskFormData);

    const TaskId = await insertTask(TaskInsertData);
    await insertTaskPrice(TaskId, monthly_rent);

    const uploadResults: UploadResults = await uploadFilesHandler(
      images,
      BlobNamePrefix.TASK
    );
    const imageUrls = getImageUrlsFromUploadResults(uploadResults);
    await insertTaskListing(TaskId, imageUrls, ListingStatus.DRAFT);
    return { TaskId };
  }
);

export const selectTaskFormUiState = (state: RootState) =>
  state.TaskForm;
