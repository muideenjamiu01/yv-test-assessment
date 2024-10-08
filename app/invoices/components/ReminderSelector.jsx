import { useState } from 'react';

const ReminderSelector = () => {
  // Set up initial reminder intervals with selection states
  const reminders = [
    { id: 1, label: '14 days before due date', selected: false },
    { id: 2, label: '7 days before due date', selected: true },
    { id: 3, label: '3 days before due date', selected: false },
    { id: 4, label: '24 hrs before due date', selected: true }
  ];

  // State for tracking selected reminders
  const [selectedReminders, setSelectedReminders] = useState(reminders);

  // Toggle the reminder selection state
  const toggleSelection = (id) => {
    setSelectedReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, selected: !reminder.selected }
          : reminder
      )
    );
  };

  return (
    <div className="flex  gap-4 items-center p-4 border border-[#E3E6EF] rounded-3xl w-fit">
      <h4 className="text-grey400 font-normal uppercase">Reminders</h4>
      <div className="flex space-x-3">
        {selectedReminders.map((reminder) => (
          <button
            key={reminder.id}
            onClick={() => toggleSelection(reminder.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium 
              border transition-all duration-300
              ${reminder.selected
                ? 'bg-green-100 border-green-400 text-green-800'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}
          >
            {reminder.label}
            {reminder.selected && (
              <span className="ml-2 text-green-500">✔</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReminderSelector;
