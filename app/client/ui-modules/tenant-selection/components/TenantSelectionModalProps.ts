import { TenantApplication } from '/app/client/library-modules/domain-models/tenant-application/TenantApplication';
import { UserAccount } from '/app/client/library-modules/domain-models/user/UserAccount';

export type TenantSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onReject: (applicationId: string) => void;
  onAccept: (applicationId: string) => void;
  onSendToLandlord: () => void;
  shouldShowSendToLandlordButton: boolean;
  acceptedApplicantCount: number;
  userRole?: UserAccount["role"]
  tenantApplications?: TenantApplication[];
}
