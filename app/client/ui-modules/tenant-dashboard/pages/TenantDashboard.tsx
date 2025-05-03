import React from "react";
import { SideNavBar } from "../../navigation-bars/side-nav-bars/SideNavbar";
import { tenantLinks } from "../../navigation-bars/side-nav-bars/side-nav-link-definitions";
import {
  FaMoneyBill,
  FaFileContract,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import TenantCard from "/app/client/ui-modules/tenant-dashboard/components/TenantCard";
import UpcomingTasks from "/app/client/ui-modules/tenant-dashboard/components/UpcomingTasks";
import PaymentHistory from "/app/client/ui-modules/tenant-dashboard/components/PaymentHistory";
import PropertyDetails from "/app/client/ui-modules/tenant-dashboard/components/PropertyDetails";

function TenantDashboard() {
  const [isSidebarOpen, onSideBarOpened] = React.useState(false);

  // Dummy data for upcoming tasks
  const dummyTasks = [
    {
      id: "1",
      title: "Rent Payment Due",
      address: "123 Main St",
      dateTime: "April 1, 11:59 PM",
      status: "due_soon" as const,
    },
    {
      id: "2",
      title: "Maintenance Inspection",
      address: "123 Main St",
      dateTime: "Tomorrow, 10:00 AM",
      status: "upcoming" as const,
    },
    {
      id: "3",
      title: "Lease Renewal Discussion",
      address: "123 Main St",
      dateTime: "Mar 28, 3:30 PM",
      status: "upcoming" as const,
    },
  ];

  // Dummy data for payment history
  const dummyPayments = [
    {
      id: "1",
      month: "March Rent",
      amount: 1500,
      paidOn: "Mar 1, 2025",
      status: "paid" as const,
    },
    {
      id: "2",
      month: "February Rent",
      amount: 1500,
      paidOn: "Feb 1, 2025",
      status: "paid" as const,
    },
    {
      id: "3",
      month: "January Rent",
      amount: 1500,
      paidOn: "Jan 1, 2025",
      status: "paid" as const,
    },
  ];

  // Dummy data for property details
  const dummyPropertyDetails = {
    // propertyImage: "/path/to/image.jpg", // Optional - will show placeholder if not provided
    address: {
      street: "123 Main St",
      apt: "4B",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    propertyType: "Apartment",
    squareFootage: 850,
    bedrooms: 2,
    bathrooms: 1,
    features: [
      { id: "1", name: "Air Conditioning" },
      { id: "2", name: "Dishwasher" },
      { id: "3", name: "Washer/Dryer" },
      { id: "4", name: "Hardwood Floors" },
    ],
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-64 border-2 h-full">
        <SideNavBar
          isOpen={isSidebarOpen}
          onClose={() => onSideBarOpened(false)}
          navLinks={tenantLinks}
        />
      </div>

      <div className="flex-1">
        <div className="py-4 px-6 border-b border-gray-200 bg-white shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">
            Tenant Dashboard
          </h3>
        </div>

        <div className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <TenantCard
              title="Next Rent Payment"
              value="$1,500"
              subtitle="Due in 5 days (April 1)"
              icon={<FaMoneyBill />}
              buttonText="Pay Now"
              onButtonClick={() => console.log("Pay now clicked")}
            />

            <TenantCard
              title="Lease Status"
              value="9 months"
              subtitle="Remaining on current lease"
              icon={<FaFileContract />}
              progressPercentage={90}
            />

            <TenantCard
              title="Maintenance"
              value="2 Active"
              subtitle="1 scheduled for tomorrow"
              icon={<FaTools />}
              buttonText="View Requests"
              onButtonClick={() => console.log("View requests clicked")}
            />

            <TenantCard
              title="Messages"
              value="3 Unread"
              subtitle="Last message 2 hours ago"
              icon={<FaEnvelope />}
              buttonText="View Messages"
              onButtonClick={() => console.log("View messages clicked")}
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            <div className="mt-5">
              <UpcomingTasks tasks={dummyTasks} />
            </div>

            <div className="mt-5">
              <PaymentHistory
                payments={dummyPayments}
                onViewAllClick={() =>
                  console.log("Navigate to payment history page")
                }
              />
            </div>

            <div className="mt-5">
              <PropertyDetails
                {...dummyPropertyDetails}
                onViewDetailsClick={() =>
                  console.log("Navigate to property details page")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenantDashboard;
