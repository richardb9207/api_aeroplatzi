const express = require('express');
const TicketsServices = require('../services/tickets');

function ticktsApi(app){
  const router = express.Router();
  app.use("/api/tickets",router);
	const ticketsServices = new TicketsServices();
	router.get("/", async function(req,res,next){
		const { tags } = req.query;
    try{
			const tickets = await ticketsServices.getTickets({ tags });
			res.status(200).json({
				data: tickets,
				message: 'tickets listed'
			})
    }catch(err){
					next(err);
        }
		});
	router.get("/:id_ticket", async function(req,res,next){
		const{ id_ticket } = req.params;
			try{
				const ticket = await ticketsServices.getTicket({ id_ticket });
				res.status(200).json({
					data: ticket,
					message: 'tickets retrive'
				})
			}catch(err){
						next(err);
					}
			});
	router.post("/", async function(req, res, next){
		const { body: ticket } = req;
    try{
			const createTicketId = await ticketsServices.createdTicket({ ticket });
			res.status(201).json({	
				data: createTicketId,
				message: 'tickets create'
			})
    }catch(err){
					next(err);
        }
		});
	router.put("/:id_ticket", async function(req,res,next){
		const{ id_ticket } = req.params;
		const { body: ticket } = req;
			try{
				const updateTicketId = await ticketsServices.updatedTicket({ id_ticket,ticket });
				res.status(200).json({
					data: updateTicketId,
					message: 'ticket update'
				})
			}catch(err){
						next(err);
					}
			});
			router.delete("/:id_ticket", async function(req,res,next){
			const{ id_ticket } = req.params;
				try{
					const deleteTicketId = await ticketsServices.deletedTicket({ id_ticket });
					res.status(200).json({
						data: deleteTicketId,
						message: 'tickets deleted'
					})
				}catch(err){
							next(err);
						}
				});
}

module.exports = ticktsApi;