const { ticketsMock } = require('../utils/mocks/tickets');

class ticketsServices{
    async getTickets(){
        const tickets = await Promise.resolve(ticketsMock);
        return tickets || [];
    }
    async getTicket(){
        const ticket = await Promise.resolve(ticketsMock[0]);
        return ticket || {};
    }
    async createdTicket(){
        const createdTicketID = await Promise.resolve(ticketsMock[0].id_ticket);
        return createdTicketID || {};
    }
    async updatedTicket(){
        const updatedTicketID = await Promise.resolve(ticketsMock[0].id_ticket);
        return updatedTicketID || {};
    }
    async deletedTicket(){
        const deletedTicketID = await Promise.resolve(ticketsMock[0].id_ticket);
        return deletedTicketID || {};
    }
}

module.exports = ticketsServices;
