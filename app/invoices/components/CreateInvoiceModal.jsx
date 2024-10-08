"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { api } from "app/api/invoice";

const CreateInvoiceModal = ({ visible, onClose, refetch }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    customerName: "",
    senderName: "",
    date: "",
    status: "",
    description: "",
    quantity: "",
    unitPrice: "",
    notes: "",
  };

  const validationSchema = Yup.object({
    customerName: Yup.string().required("Name is Required"),
    senderName: Yup.string().required("Sender Name is Required"),
    date: Yup.date().required("Required"),
    status: Yup.string().required("Required"),
    description: Yup.string().required("Description is Required"),
    quantity: Yup.number()
      .required("Quantity is Required")
      .positive("Must be a positive number"),
    unitPrice: Yup.number()
      .required("Unit Price is Required")
      .positive("Must be a positive number"),
    notes: Yup.string(),
  });

  const generateInvoiceNo = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `#322${randomNumber}`;
  };

  const createInvoice = async (values, { resetForm }) => {
    const total = parseFloat(values.quantity) * parseFloat(values.unitPrice);
    const items = [
      {
        description: values.description,
        quantity: parseInt(values.quantity, 10),
        unitPrice: parseFloat(values.unitPrice),
        total,
        notes: values.notes,
      },
    ];
    
    const subTotal = items.reduce((acc, item) => acc + item.total, 0);
    const discount = 2.5; // 2.5%
    const discountAmount = (subTotal * discount) / 100;
    const totalAmountDue = subTotal - discountAmount;

    const payload = {
      id: `INV-2023-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toISOString(),
      items: [
        {
          id: `INV-2023-${Math.floor(Math.random() * 1000)}`,
          number: generateInvoiceNo(),
          amount: `$${totalAmountDue.toLocaleString()}`,
          status: values.status,
          date: new Date().toISOString(),
          details: {
            sender: {
              name: values.senderName,
              phone: "+234 808 371173",
              address: "456 Hart Ridge Road 49426 Gaines, MI",
              email: "hello@yourcompany.com",
              logo: "/path/to/sender-image.png",
            },
            customer: {
              name: values.customerName,
              phone: "+234 805 181 2309",
              email: "info@customer.com",
            },
            invoiceDetails: {
              invoiceNo: generateInvoiceNo(),
              issueDate: new Date().toLocaleDateString(),
              dueDate: values.date,
              billingCurrency: "USD ($)",
            },
            items,
            totals: {
              subTotal,
              discount: discountAmount,
              totalAmountDue,
            },
            paymentInfo: {
              accountName: values.senderName,
              accountNumber: "3223055000",
              achRoutingNo: "123456789",
              bankName: "XYZ Bank",
              bankAddress: "Lagos, Nigeria",
              bankBranch: "Lagos, Nigeria",
            },
            footerNote: {
              note: "Thank you for your patronage",
            },
          },
          invoiceActivities: [
            {
              id: `IVAT-2024-${Math.floor(Math.random() * 1000)}`,
              user: values.customerName,
              time: new Date().toLocaleString(),
              action: "Created invoice",
              invoice: `${Math.floor(Math.random() * 1000)}`,
              client: values.customerName,
            },
          ],
        },
      ],
    };

    setLoading(true);
    try {
      await api.createInvoice(JSON.stringify(payload));
      toast.success("Invoice submitted successfully!");
      refetch()
      onClose();
      resetForm();
    } catch (error) {
      toast.error("Failed to submit invoice. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Invoice"
      open={visible}
      onCancel={() => onClose(null)}
      footer={null}
      width={900}
      style={{ borderRadius: "20px" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={createInvoice}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-3 gap-6 items-start">
              {[
                { id: "customerName", label: "Customer Name", type: "text" },
                { id: "senderName", label: "Sender Name", type: "text" },
                { id: "date", label: "Due Date", type: "date" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <Field
                    id={id}
                    name={id}
                    type={type}
                    className="mt-1 rounded-md border border-gray-300 w-full py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#46B2C8] hover:border-[#46B2C8]"
                    placeholder={`Enter ${label.toLowerCase()}`}
                  />
                  <ErrorMessage name={id} component="p" className="text-red-500 text-xs mt-1" />
                </div>
              ))}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <Field
                  as="select"
                  id="status"
                  name="status"
                  className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#46B2C8] hover:border-[#46B2C8]"
                >
                  <option value="" label="Select status" />
                  <option value="Paid" label="Paid" />
                  <option value="Draft" label="Draft" />
                  <option value="Pending" label="Pending" />
                  <option value="Overdue" label="Overdue" />
                </Field>
                <ErrorMessage name="status" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              {[
                { id: "description", label: "Item Description", type: "text" },
                { id: "quantity", label: "Quantity", type: "number" },
                { id: "unitPrice", label: "Unit Price", type: "number" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <Field
                    id={id}
                    name={id}
                    type={type}
                    className="mt-1 rounded-md border border-gray-300 w-full py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#46B2C8] hover:border-[#46B2C8]"
                    placeholder={`Enter ${label.toLowerCase()}`}
                  />
                  <ErrorMessage name={id} component="p" className="text-red-500 text-xs mt-1" />
                </div>
              ))}

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <Field
                  id="notes"
                  name="notes"
                  as="textarea"
                  className="mt-1 rounded-md border border-gray-300 w-full py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#46B2C8] hover:border-[#46B2C8]"
                  placeholder="Enter any additional notes"
                />
                <ErrorMessage name="notes" component="p" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={loading || isSubmitting}
                className={`bg-primary text-white py-2 px-4 rounded ${loading || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading || isSubmitting ? "Submitting..." : "Submit Invoice"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateInvoiceModal;
