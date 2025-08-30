import { TenantApplicationStatus } from "../../../../shared/api-models/tenant-application/TenantApplicationStatus";

export type TenantApplication = {
  id: string;
  propertyId: string;
  applicantName: string;
  status: TenantApplicationStatus;
  step: number;
  createdAt: string; // ISO string to avoid Redux serialization issues
  updatedAt: string; // ISO string to avoid Redux serialization issues
  agentId: string;
  landlordId: string;
  taskId?: string;
};

// min data required to create new tenant application
export type TenantApplicationInsertData = {
  propertyId: string;
  applicantName: string;
  agentId: string;
  landlordId: string;
};
