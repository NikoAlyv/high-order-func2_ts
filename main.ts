


// interface Customer {
//   id: number;
//   name: string;
//   email: string;
//   location: {
//     city: string;
//     country: string;
//   };
// }

// const customers: Customer[] = [
//     {
//       id: 1,
//       name: "Alice",
//       email: "alice@example.com",
//       location: { city: "New York", country: "USA" },
//     },
//     {
//       id: 2,
//       name: "Bob",
//       email: "bob@example.com",
//       location: { city: "Paris", country: "France" },
//     },
//     {
//       id: 3,
//       name: "Walker",
//       email: "walker@example.com",
//       location: { city: "Warsaw", country: "Poland" },
//     },
//     {
//       id: 4,
//       name: "Jane",
//       email: "jane@example.com",
//       location: { city: "Roma", country: "Italy" },
//     },
//   ];
  
//    interface Order{
//     orderId: number;
//     customerId: number;
//     product: string;
//     quantity: number;
//     price: number;
// }
//   const orders: Order[] =  [
//     { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
//     {
//       orderId: 102,
//       customerId: 2,
//       product: "Smartphone",
//       quantity: 2,
//       price: 800,
//     },
//     { orderId: 103, customerId: 3, product: "Watch", quantity: 4, price: 300 },
//     { orderId: 104, customerId: 4, product: "Earphone", quantity: 3, price: 200 },
//   ];
  
  //! numbers of price higher than 1000$
    // const orderCount:Order[] = orders.filter((count)=>count.price>=1000)
    // console.log(orderCount);
  
  //! find by customer name
  
    // const customerFind:Customer[] = customers.filter((customer)=>customer.name.toLowerCase()==="alice")
    // console.log(customerFind);
  
  //! find index in orders
  
  // const  orderFind:number = orders.findIndex((order)=>order.orderId===102)
  // console.log(orderFind);
  
  //! find order
  // const customerFind:Customer[] = customers.filter((customer)=>{
  //     if(customer.location.country === 'USA'){
  //        orders.filter((order) => {
  //           if (order.customerId === customer.id) {
  //         console.log(order)
  //           }
  //       })
  //     }
  // });
  
  //! enter the customer name and the corresponding text using foreach
  
  // customers.forEach((customer) =>
  //   orders.forEach((order) => {
  //     if ((customer.id === order.customerId)) {
  //       console.log(
  //         `Order ${order.orderId} by ${customer.name}: ${order.quantity} x ${order.product} for ${order.price} each`
  //       );
  //     }
  //   }
  // ));  
  //! sort by name
  //
  // const sortedCustomers:Customer[] = customers.sort( (a,b)=>{
  //     if(a.name>b.name){
  //         return 1
  //     }else if(a.name<b.name){
  //         return -1
  //     }else{
  //         return 0
  //     }
  // }
  // )
  // console.log(sortedCustomers);