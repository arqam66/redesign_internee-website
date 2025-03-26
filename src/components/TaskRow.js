import React from "react";

function TaskRow({ index, taskId, category, task, status, isLocked }) {
  return (
    <tr>
      <td className="p-4">{index}</td>
      <td className="p-4">{taskId}</td>
      <td className="p-4">{category}</td>
      <td className="p-4">{task}</td>
      <td
        className={`p-4 ${
          status === "Complete"
            ? "text-green-600"
            : status === "Unlocked"
            ? "text-yellow-500"
            : "text-gray-500"
        }`}
      >
        {status}
      </td>
      <td className="p-4">
        <button
          className={`px-4 py-1 rounded-lg ${
            isLocked
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-green-600 text-white"
          }`}
          disabled={isLocked}
        >
          {isLocked ? "Locked" : "View"}
        </button>
      </td>
    </tr>
  );
}

export default TaskRow;
