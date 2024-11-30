import Roles from "@/components/Roles";
import { roles } from "@/data";

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4 pt-12 mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Team Roles Guide</h1>
        <p className="text-gray-600">
          An interactive document to show how different AI team members work together
        </p>
      </div>
      <Roles roles={roles} />
    </>
  );
}
