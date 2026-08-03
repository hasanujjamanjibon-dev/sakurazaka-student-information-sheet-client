import { X, Trash2 } from "lucide-react";

export default function DeleteModal({ open, onClose, onDelete, loading }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">Delete Student</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-6">
          <div className="w-16 h-16 rounded-full bg-red-100 mx-auto flex items-center justify-center">
            <Trash2 className="text-red-600" size={32} />
          </div>

          <h3 className="text-center text-xl font-bold mt-5">Are you sure?</h3>

          <p className="text-center text-gray-500 mt-2">
            This student information will be permanently deleted.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8">
            <button onClick={onClose} className="h-11 rounded-lg border">
              Cancel
            </button>

            <button
              onClick={onDelete}
              disabled={loading}
              className="h-11 rounded-lg bg-red-600 text-white"
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
