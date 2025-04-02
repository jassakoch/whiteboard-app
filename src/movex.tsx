import { Movex } from "movex";
import { io } from "socket.io-client";

console.log("Movex import:", Movex);

// Set up WebSocket connection
const socket = io("http://localhost:5000"); // Change to your backend URL if needed

export const movex = new Movex(socket);
