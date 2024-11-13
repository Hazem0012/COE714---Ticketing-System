const db = require('./database');

// --------- User Functions ---------

// Function to add a new user
function addUser(name, email, role, callback) {
    const query = 'INSERT INTO Users (name, email, role) VALUES (?, ?, ?)';
    db.query(query, [name, email, role], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

// --------- Ticket Functions ---------

// Function to submit a new ticket
function submitTicket(userId, issueDescription, priority, callback) {
    const query = 'INSERT INTO Tickets (user_id, issue_description, status, priority, created_at, updated_at) VALUES (?, ?, "open", ?, NOW(), NOW())';
    db.query(query, [userId, issueDescription, priority], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

// Function to get ticket status by ticket ID
function getTicketStatus(ticketId, callback) {
    const query = 'SELECT status FROM Tickets WHERE ticket_id = ?';
    db.query(query, [ticketId], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // Return the status of the ticket
    });
}

// Function to get all tickets for a specific user
function getUserTickets(userId, callback) {
    const query = 'SELECT * FROM Tickets WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

// Function to update ticket status
function updateTicketStatus(ticketId, status, callback) {
    const query = 'UPDATE Tickets SET status = ?, updated_at = NOW() WHERE ticket_id = ?';
    db.query(query, [status, ticketId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

// --------- Message Functions ---------

// Function to add a message to a ticket (for live chat)
function addMessage(ticketId, senderId, messageDescription, callback) {
    const query = 'INSERT INTO Messages (ticket_id, sender_id, message_description, created_at) VALUES (?, ?, ?, NOW())';
    db.query(query, [ticketId, senderId, messageDescription], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

// Function to get all messages for a ticket (to view live chat history)
function getMessagesForTicket(ticketId, callback) {
    const query = 'SELECT * FROM Messages WHERE ticket_id = ? ORDER BY created_at ASC';
    db.query(query, [ticketId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

module.exports = {
    addUser,
    submitTicket,
    getTicketStatus,
    getUserTickets,
    updateTicketStatus,
    addMessage,
    getMessagesForTicket
};
