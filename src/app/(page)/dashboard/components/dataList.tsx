import DeleteIcon from "@/app/icons/DeleteIcon";
import EditVidCardIcon from "@/app/icons/EditVidCardIcon";
import React from "react";

type DataItem = {
  id: number;
  name: string;
  value: string;
};

type Props = {
  data: DataItem[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function DataList({ data, onEdit, onDelete }: Props) {
  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">
            Value
          </th>
          <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-900 divide-y divide-gray-700">
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
          >
            <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-300">
              {item.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
              {item.value}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
              <button
                className="text-indigo-400 hover:text-indigo-600"
                onClick={() => onEdit(item.id)}
              >
                <EditVidCardIcon width={24} height={24} />
              </button>
              <button
                className="ml-4 text-red-400 hover:text-red-600"
                onClick={() => onDelete(item.id)}
              >
                <DeleteIcon width={24} height={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
