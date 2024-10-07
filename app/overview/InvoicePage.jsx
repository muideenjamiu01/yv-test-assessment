'uce client'
import { useEffect, useRef } from "react";
import io from "socket.io-client";

export default function InvoicePage() {
  // Use useRef to store the socket instance across renders
  const socketRef = useRef(null);

  useEffect(() => {
    // Fetch the socket route to establish the WebSocket connection
    fetch("/api/socket").finally(() => {
      // Initialize the socket connection
      socketRef.current = io();

      socketRef.current.on("connect", () => {
        console.log("Connected to WebSocket");

        socketRef.current.on("invoiceUpdated", (data) => {
          console.log("Invoice updated:", data);
        });
      });

      return () => socketRef.current.disconnect(); // Cleanup the connection on unmount
    });
  }, []);

  // Update function
  const sendUpdate = () => {
    if (socketRef.current) {
      const data = { invoiceId: "12345", status: "Paid" };
      socketRef.current.emit("invoiceUpdate", data); // Emit the update event
    } else {
      console.error("Socket not initialized yet");
    }
  };

  return (
    <div>
      <h1>Invoice Page</h1>
      <button onClick={sendUpdate}>Update Invoice</button>
    </div>
  );
}
