const express = require('express');
const { ticketsMock } = require('../utils/mocks/tickets');

function ticktsApi(app){
  const router = express.Router();
  app.use("/api/tickets",router);
	
	router.get("/", async function(req,res,next){
    try{
			const tickets = await Promise.resolve(ticketsMock);
			res.status(200).json({
				data: tickets,
				message: 'tickets listed'
			})
    }catch(err){
					next(err);
        }
		});
	
	router.get("/:id_ticket", async function(req,res,next){
			try{
				const tickets = await Promise.resolve(ticketsMock[0]);
				res.status(200).json({
					data: tickets,
					message: 'tickets retrive'
				})
			}catch(err){
						next(err);
					}
			});
	
	router.post("/", async function(req,res,next){
    try{
			const createTicketId = await Promise.resolve(ticketsMock[1].id_ticket);
			res.status(201).json({
				data: createTicketId,
				message: 'tickets create'
			})
    }catch(err){
					next(err);
        }
		});
	
	router.put("/:id_ticket", async function(req,res,next){
			try{
				const updateTicketId = await Promise.resolve(ticketsMock[0].id_ticket);
				res.status(200).json({
					data: updateTicketId,
					message: 'ticket update'
				})
			}catch(err){
						next(err);
					}
			});
	
			router.delete("/:id_ticket", async function(req,res,next){
				try{
					const deleteTicketId = await Promise.resolve(ticketsMock[0].id_ticket);
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