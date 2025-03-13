import React, { useState } from "react";
import FuelMaster from "./Components/FuelMaster";
import FuelPrice from "./Components/FuelPrice";
import FuelDelivery from "./Components/FuelDelivery";

const FuelManagement = () => {
  const [activeTab, setActiveTab] = useState("fuelMaster"); 

  return (
    <div className="p-6">
      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === "fuelMaster" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("fuelMaster")}
        >
          Fuel Master
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "fuelPrice" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("fuelPrice")}
        >
          Fuel Price
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "fuelDelivery" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("fuelDelivery")}
        >
          Fuel Delivery
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "fuelAdjustment" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("fuelAdjustment")}
        >
          Fuel Adjustment
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "lubesMaster" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("lubesMaster")}
        >
          Lubes Master
        </button>
        
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "fuelMaster" && <FuelMaster />}
        {activeTab === "fuelPrice" && <FuelPrice />}
        {activeTab === "fuelDelivery" && <FuelDelivery />}
        {activeTab === "fuelAdjustment" && <div></div>}
        {activeTab === "lubesMaster" && <div></div>}
      </div>
    </div>
  );
};

export default FuelManagement;
