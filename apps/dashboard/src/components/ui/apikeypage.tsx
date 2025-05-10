import { Key } from "lucide-react";

export default function ApiKeyInstructions() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Key className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          First, Add Your API Keys
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          To get started with Rise E-commerce, you&apos;ll need to add your API
          keys.
        </p>
        <a className="font-bold underline pt-5" href="https://www.riseonecom.in/contact" target="_blank">
          Contact Now
        </a>
      </div>
    </div>
  );
}
