"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Page() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    dob: "",
    salary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New Team Member:", formData);
    setOpen(false);
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h1 className="text-4xl font-semibold mb-10">Manage your Team</h1>
      <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
        <div>
          <div className="flex items-center justify-start pb-10">
            {/* Add Team Member Button */}
            <Button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mr-10"
            >
              + Add New Team Member
            </Button>

            {/* Modal Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Team Member</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Role Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <Input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* DOB Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <Input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Salary Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Salary ($)
                    </label>
                    <Input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Add Member
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
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
