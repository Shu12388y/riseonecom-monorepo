import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h1 className="text-4xl font-semibold mb-10">Manage your Team</h1>
      <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Date of Birth
              </th>
              <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Salary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            <tr>
              <td className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                John Doe
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                Web Developer
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                $120,000
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Jane Doe
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                04/11/1980
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                Web Designer
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                $100,000
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-3 font-medium text-gray-900">
                Gary Barlow
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                Singer
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-gray-700">
                $20,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
