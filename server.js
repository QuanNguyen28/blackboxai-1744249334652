const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serve static files from public directory
app.use(express.static('public'));

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for location updates
    socket.on('locationUpdate', (data) => {
        // Broadcast the location to all connected clients except sender
        socket.broadcast.emit('locationUpdate', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Track route
app.get('/track', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'track.html'));
});
