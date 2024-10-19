import React, { useState } from "react";

interface ExpenseFormProps {
  onSubmit: (data: ExpenseData) => void; // Function to call when form is submitted
}

interface ExpenseData {
  vendor: string;
  date: string; // YYYY-MM-DD format
  invoiceNumber: string;
  category: string;
  amount: number; // Keep this as number for the expense data
  description: string;
  invoiceAttachment?: File; // Optional file for invoice
}
// Update the errors interface
interface Errors {
  vendor?: string;
  date?: string;
  invoiceNumber?: string;
  category?: string;
  amount?: string; // Change this to string
  description?: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ExpenseData>({
    vendor: "",
    date: "",
    invoiceNumber: "",
    category: "",
    amount: 0,
    description: "",
    invoiceAttachment: undefined,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, invoiceAttachment: e.target.files[0] });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Errors> = {};

    // Basic validation
    if (!formData.vendor) newErrors.vendor = "Vendor is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.invoiceNumber)
      newErrors.invoiceNumber = "Invoice Number is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (formData.amount <= 0)
      newErrors.amount = "Amount must be greater than zero."; // Store as string
    if (!formData.description)
      newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData); // Call the submit function with valid data
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-lg shadow-md w-[70%] justify-center mx-auto"
    >
      <h2 className="text-xl font-semibold">Record an Expense</h2>

      <div>
        <label
          htmlFor="vendor"
          className="block text-sm font-medium text-gray-700"
        >
          Vendor
        </label>
        <input
          type="text"
          name="vendor"
          id="vendor"
          value={formData.vendor}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.vendor ? "border-red-500" : ""
          }`}
        />
        {errors.vendor && (
          <p className="text-red-500 text-sm">{errors.vendor}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.date ? "border-red-500" : ""
          }`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div>
        <label
          htmlFor="invoiceNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Invoice Number
        </label>
        <input
          type="text"
          name="invoiceNumber"
          id="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.invoiceNumber ? "border-red-500" : ""
          }`}
        />
        {errors.invoiceNumber && (
          <p className="text-red-500 text-sm">{errors.invoiceNumber}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.category ? "border-red-500" : ""
          }`}
        >
          <option value="">Select a category</option>
          <option value="travel">Travel</option>
          <option value="office supplies">Office Supplies</option>
          <option value="marketing">Marketing</option>
          {/* Add more categories as needed */}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: parseFloat(e.target.value) })
          }
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.amount ? "border-red-500" : ""
          }`}
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${
            errors.description ? "border-red-500" : ""
          }`}
          rows={3}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="invoiceAttachment"
          className="block text-sm font-medium text-gray-700"
        >
          Attach Invoice (optional)
        </label>
        <input
          type="file"
          name="invoiceAttachment"
          id="invoiceAttachment"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Record Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
