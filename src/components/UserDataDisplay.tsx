import { UserFormData } from "./GetStartedModal";
import Checkbox from "@/components/ui/Checkbox";

interface UserDataDisplayProps {
  users: UserFormData[];
}

export const UserDataDisplay = ({ users }: UserDataDisplayProps) => {
  if (users.length === 0) return null;

  const getLanguages = (languages: UserFormData["languages"]) => {
    const selected = [];
    if (languages.english) selected.push("English");
    if (languages.hindi) selected.push("Hindi");
    if (languages.marathi) selected.push("Marathi");
    return selected.join(" ,");
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden min-w-[600px]">
            <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 bg-gray-50 border-b font-semibold text-gray-700">
              <div></div>
              <div>Name</div>
              <div>Gender</div>
              <div>Language</div>
              <div>Email</div>
            </div>

            {users.map((user, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 border-b last:border-b-0 items-center hover:bg-gray-50 transition-colors"
              >
                <div>
                  <Checkbox />
                </div>
                <div className="text-gray-700">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-gray-600 capitalize">{user.gender}</div>
                <div className="text-gray-600">{getLanguages(user.languages)}</div>
                <div className="text-gray-600">{user.email}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
