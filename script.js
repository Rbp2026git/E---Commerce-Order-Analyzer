let orders = [
    {id: 1, customer: "Raushan Bhai Patel", amount: 1200, status: "completed" }, 
    {id: 2, customer: "Adrina Patel", amount: 800, status: "pending" },
    {id: 3, customer: "Archi Kumari", amount: 1500, status: "completed" },
    {id: 4, customer: "Abhijeet Kumar", amount: 600, status: "cancelled" },
    {id: 5, customer: "Abhishekh Kumar", amount: 2000, status: "completed" },
    {id: 6, customer: "Niraj Patel", amount: 1300, status: "pending" },
];
console.log(orders);

for(let i = 0; i < orders.length; i++){
    console.log(orders[i]);
};

//Print All orders
orders.forEach(function(order){
    console.log(`${order.customer} ordered for ${order.amount} rupees.`);
});

//Create new array of customer names
let customers = orders.map(function(order){
    return order.customer;
});
console.log(customers);

//Get only completed Orders
let completedOrder = orders.filter(function(order){
    return order.status === "completed";
});
console.log(completedOrder);

//Get Only pending Orders
let pendingOrder = orders.filter(function(order){
    return order.status === "pending";
});
console.log(pendingOrder);

//Calculate total revenue
let totalRevenue = orders.reduce(function(total, order){
    return total + order.amount;
}, 0);// here initial value = 0
console.log(totalRevenue);

//Loop through Order
for(let order of orders){
    console.log(`${order.customer} - ${order.status}`)
};