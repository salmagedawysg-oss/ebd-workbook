// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter((order) => order.city === "Giza" && order.status === "cancelled");
}
//   loadOrders()        async
//   myOrders(orders)
export function summarize(orders) {
  return orders.reduce((highestSoFar, order) => Math.max(highestSoFar, order.price), 0);
}
//   summarize(orders)
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}
//   describeOrder(id)   async, and must never throw
export function toJsonLines(orders) {
  return JSON.stringify(orders.map((order) => ({ item: order.item, quantity: order.quantity })));
}
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
