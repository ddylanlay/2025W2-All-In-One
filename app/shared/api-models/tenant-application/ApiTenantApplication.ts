import { TenantApplicationStatus } from './TenantApplicationStatus';

export type ApiTenantApplication = {
  id: string;
  propertyId: string;
  applicantName: string;
  status: TenantApplicationStatus;
  step: number;
  createdAt: string;
  updatedAt: string;
  agentId: string;
  landlordId: string;
  taskId?: string;
};
