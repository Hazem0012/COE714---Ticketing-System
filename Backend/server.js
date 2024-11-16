const express = require('express');
const cors = require('cors');
const dbOperations = require('./dbOperations');

const app = express();
app.use(cors());        
app.use(express.json());   

// --------- User Routes ---------

// Add a new user
app.post('/api/users', (req, res) => {
    const { name, email, role } = req.body;
    dbOperations.addUser(name, email, role, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User added', userId: results.insertId });
    });
});

// --------- Ticket Routes ---------

// Submit a new ticket
app.post('/api/tickets', (req, res) => {
    const { userId, issueDescription, priority } = req.body;
    dbOperations.submitTicket(userId, issueDescription, priority, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Ticket submitted', ticketId: results.insertId });
    });
});

// Get the status of a specific ticket
app.get('/api/tickets/:ticketId/status', (req, res) => {
    const { ticketId } = req.params;
    dbOperations.getTicketStatus(ticketId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

// Get all tickets for a specific user
app.get('/api/users/:userId/tickets', (req, res) => {
    const { userId } = req.params;
    dbOperations.getUserTickets(userId, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Update the status of a specific ticket
app.put('/api/tickets/:ticketId/status', (req, res) => {
    const { ticketId } = req.params;
    const { status } = req.body;
    dbOperations.updateTicketStatus(ticketId, status, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Ticket status updated' });
    });
});

// --------- Message Routes ---------

// Get all messages for a specific ticket
app.get('/api/tickets/:ticketId/messages', (req, res) => {
    const { ticketId } = req.params;
    dbOperations.getMessagesForTicket(ticketId, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add a new message to a ticket (live chat)
app.post('/api/tickets/:ticketId/messages', (req, res) => {
    const { ticketId } = req.params;
    const { senderId, messageDescription } = req.body;
    dbOperations.addMessage(ticketId, senderId, messageDescription, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Message added', messageId: results.insertId });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
