'use client'

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AddTeamMember() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    dob: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Team Member:", formData);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Add Team Member Button */}
      <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
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
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            {/* Role Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <Input type="text" name="role" value={formData.role} onChange={handleChange} required />
            </div>

            {/* DOB Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <Input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>

            {/* Salary Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Salary ($)</label>
              <Input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <Button type="button" onClick={() => setOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Add Member
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddTeamMember;
