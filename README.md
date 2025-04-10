
Built by https://www.blackbox.ai

---

```markdown
# Location Tracker

## Project Overview
Location Tracker is a real-time friend location tracking application that allows users to share and visualize their geographic locations. By leveraging WebSocket technology through Socket.io, this application provides an interactive and responsive experience as users update their locations and see their friends' locations on a map.

## Installation
To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/location-tracker.git
   cd location-tracker
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the application**:
   Use the following command to start the server:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open your web browser and go to `http://localhost:8000`. You should see the application running.

## Usage
Once you have the application running, users can log in and start sharing their location. The application emits location updates in real time, allowing all connected users to see where their friends are located.

### Routes
- `/`: Serves the main interface for users to view and share their location.
- `/track`: Serves a tracking page where users can visualize their friends' locations.

## Features
- **Real-time location updates**: As users update their locations, the updates are broadcast to all connected clients.
- **WebSocket technology**: Utilizes Socket.io for real-time, bi-directional communication.
- **Dynamic user interface**: Built using Express to serve a dynamic web application.

## Dependencies
The application uses the following dependencies as defined in `package.json`:

- **Express**: A fast web framework for Node.js.
  
  ```json
  "express": "^4.18.2"
  ```

- **Socket.io**: A library for real-time web applications that enables bi-directional communication between web clients and servers.
  
  ```json
  "socket.io": "^4.7.2"
  ```

## Project Structure
The project is structured as follows:

```
location-tracker/
│
├── public/
│   ├── index.html     # Main interface for users
│   └── track.html     # Page to track friends' locations
│
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Locked versions of dependencies
└── server.js          # Main server file
```

- **public/**: Contains the static files served by the Express server.
- **server.js**: The entry point of the application where the Express server and Socket.io are configured.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
```