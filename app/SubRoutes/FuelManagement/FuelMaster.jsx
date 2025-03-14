const FuelMaster = () => {
  const fuels = [
    { id: 1, code: "VPR", name: "Shell V-Power Racing", details: "Fuel Specifications etc.", color: "bg-red-400" },
    { id: 2, code: "VPG", name: "Shell V-Power Gasoline", details: "Fuel Specifications etc.", color: "bg-green-400" },
    { id: 3, code: "VPD", name: "Shell V-Power Diesel", details: "Fuel Specifications etc.", color: "bg-yellow-400" },
    { id: 4, code: "FSG", name: "Fuel Specification Gas", details: "Fuel Specifications etc.", color: "bg-teal-400" },
    { id: 5, code: "FSD", name: "Fuel Specification Diesel", details: "Fuel Specifications etc.", color: "bg-cyan-400" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Fuels</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">+ Add new</button>
      </div>
      <table className="w-full border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">No.</th>
            <th className="p-2 border">Fuel Code</th>
            <th className="p-2 border">Fuel Name</th>
            <th className="p-2 border">Details</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {fuels.map((fuel) => (
            <tr key={fuel.id} className="text-center border">
              <td className="p-2 border">{fuel.id}</td>
              <td className="p-2 border">
                <span className={`px-3 py-1 text-white rounded-lg ${fuel.color}`}>{fuel.code}</span>
              </td>
              <td className="p-2 border">{fuel.name}</td>
              <td className="p-2 border">{fuel.details}</td>
              <td className="p-2 border">
                <button className="px-3 py-1 bg-blue-200 text-blue-800 rounded hover:bg-blue-300">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelMaster;
