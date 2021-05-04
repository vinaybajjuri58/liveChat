import { useState, useEffect } from "react";
import io from "socket.io-client";
export const MessageInput = () => {
  // const [response, setResponse] = useState("");

  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit("join", "Joined a room", (err) => {
      console.log("Error");
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    //
  }, []);

  return (
    <div>
      <h2>hii</h2>
    </div>
  );
};
