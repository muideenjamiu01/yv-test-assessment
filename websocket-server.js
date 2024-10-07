// websocket-server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Define pools of different users, actions, invoices, and clients
  const users = [
    "Famous Ehichioya",
    "Timothy Akinyelu",
    "Chinedu Ohagwu",
    "Prosper Eravwuvieke",
    "Chima Ilo",
  ];
  const actions = [
    "Created invoice",
    "Updated invoice",
    "Deleted invoice",
    "Sent invoice",
    "Approved invoice",
  ];
  const invoices = ["00238434", "00567890", "00112233", "00987654", "00334455"];
  const clients = [
    "Acme Corp",
    "Globex Inc",
    "Initech",
    "Umbrella Corp",
    "Wayne Enterprises",
  ];

  // Helper function to get a random element from an array
  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  // Helper function to get the current time in HH:MM AM/PM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  // Simulate new activities being pushed every 5 seconds
  setInterval(() => {
    const activity = {
      id: Math.floor(Math.random() * 1000),
      user: getRandomElement(users),
      time: `Today, ${getCurrentTime()}`, // Current time
      action: getRandomElement(actions),
      invoice: getRandomElement(invoices),
      client: getRandomElement(clients),
    };

    ws.send(JSON.stringify({ type: "NEW_ACTIVITY", data: activity }));
  }, 5000);

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
