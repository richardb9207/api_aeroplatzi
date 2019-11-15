const MongoLib = require('../lib/mongo');

class ticketsServices{
    constructor(){
        this.collection = 'tickets';
        this.mongoDB = new MongoLib();
    }
    async getTickets({ tags }){
        const query = tags && { tags: { $in: tags } };
        const tickets = await this.mongoDB.getAll(this.collection, query);
        return tickets || [];
    }
    async getTicket({ id_ticket }){
        const ticket = await this.mongoDB.get(this.collection, id_ticket);
        return ticket || {};
    }
    async createdTicket({ ticket }){
        const createdTicketID = this.mongoDB.create(this.collection, ticket);
        return createdTicketID || {};
    }
    async updatedTicket({ id_ticket, ticket } = {}){
        const updatedTicketID = await this.mongoDB.update(this.collection, id_ticket, ticket);
        return updatedTicketID;
    }
    async deletedTicket({ id_ticket }){
        const deletedTicketID = await this.mongoDB.delete(this.collection, id_ticket)
        return deletedTicketID;
    }
}

module.exports = ticketsServices;
