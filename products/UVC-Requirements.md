# UVC Requirements

## Functional Requirements

| # | FR/NFR | Requirement | Priority | SDLC Status | Last Status Change Date | Related Use Case | Owner in Project | Additional Info |
|---|---|---|---|---|---|---|---|---|
| FR1 | FR | The system shall automatically flag orders from Hong Kong as international. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL | |
| FR2 | FR | The system shall show a live overview of all open orders grouped by status. | MUST HAVE | RAISED | 2026-11-13 | Monitor orders | Control Tower | |
| FR3 | FR | The system shall alert the Control Tower when a DHL delivery is delayed. | MUST HAVE | VALIDATED | 2026-11-13 | Track order delivery | DHL | |
| FR4 | FR | The system shall automatically add a task to the Control Tower's task list when a delivery is delayed. | MUST HAVE | VALIDATED | 2026-11-13 | Track order delivery | DHL | |
| FR5 | FR | The system shall automatically add a task to the Control Tower's task list when there is not enough stock to complete an order. | MUST HAVE | RAISED | 2026-11-13 | Track stock availability | Warehouse | |
| FR6 | FR | The system shall allow the Director SCM to set a reorder threshold for each product. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse | |
| FR7 | FR | The system shall automatically reorder a product when it reaches its reorder threshold. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse | |
| FR8 | FR | The system shall track and show every movement of stock into and out of the warehouse. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse | |
| FR9 | FR | The system shall automatically calculate statistics on recent orders, including dead stock and sales trends. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse | |
| FR10 | FR | The system shall add returned products that are undamaged or repaired back to the warehouse stock. | SHOULD HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse | |
| FR11 | FR | The Hong Kong service shall provide the current status of each shipment, so that late shipments can be detected. | MUST HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods | Client: supplier statuses are automated ("Shipped", "In Customs") |
| FR12 | FR | The Hong Kong service shall receive purchase orders from GIFTS-4-U, each with SKU, quantity and requested date. | MUST HAVE | VALIDATED | 2026-11-16 | Order stock from supplier | Hong Kong Novelty Goods | Replaces email |
| FR13 | FR | The Hong Kong service shall provide all purchase orders with their status and expected arrival date through its API. | MUST HAVE | VALIDATED | 2026-11-16 | View supplier orders | Hong Kong Novelty Goods | Shown in the Hong Kong section of the Control Tower (NFR12) |
| FR14 | FR | The Hong Kong service shall record each purchase order's status as one of: ordered, shipped, in customs (Hong Kong), in customs (Netherlands), received at warehouse. | MUST HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods | |
| FR15 | FR | The Hong Kong service shall report an exception: out of stock, unable to fulfil (e.g. a very large order during the Christmas rush), stuck in customs, or an incident such as a fire. | MUST HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods | Scenario A: SKU shortage |
| FR16 | FR | The Hong Kong service shall receive a notification from GIFTS-4-U when one of its shipments is late. | SHOULD HAVE | VALIDATED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods | Flag and email late partners to put pressure on them |
| FR17 | FR | The Hong Kong service shall provide its reported exceptions through its API. | SHOULD HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods | Client: "I want to know where that order is and what is happening" |
| FR18 | FR | The Hong Kong service shall accept purchase orders marked as urgent. | COULD HAVE | VALIDATED | 2026-11-15 | Order stock from supplier | Hong Kong Novelty Goods | Scenario: Christmas rush and B2B priority |
| FR19 | FR | The system shall allow customers to order customizable products (size, letters, colours). | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR20 | FR | The system shall allow customers to view the delivery time of their order. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR21 | FR | The system shall automatically email the customer when their order is delayed, with the reason and the new expected delivery date. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR22 | FR | The system shall allow customers to register as a Consumer or a Business. | MUST HAVE | VALIDATED | 2026-11-16 | Create account on GIFTS-4-U | Webshop | |
| FR23 | FR | The system shall show a delivery time for each product in the webshop, based on stock levels, supplier delays and busy periods. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR24 | FR | The system shall show the warehouse stock level for each product in the webshop. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR25 | FR | The system shall allow customers to confirm in the webshop that their order arrived correctly. | MUST HAVE | VALIDATED | 2026-11-16 | Contact GIFTS-4-U about shipment | Webshop | |
| FR26 | FR | The system shall allow customers to report in the webshop that their order did not arrive, was damaged, or had the wrong quantity. | MUST HAVE | VALIDATED | 2026-11-16 | Contact GIFTS-4-U about shipment | Webshop | |
| FR27 | FR | The system shall allow multiple products in one order. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |
| FR28 | FR | The system shall allow customers to return orders. | MUST HAVE | VALIDATED | 2026-11-16 | Return orders to GIFTS-4-U | Webshop | |
| FR29 | FR | The system shall reorder stock early based on predictions from sales statistics. | COULD HAVE | VALIDATED | 2026-11-16 | Track stock availability | Warehouse | |
| FR30 | FR | The system shall allow staff to add or remove stock by scanning SKU barcodes. | COULD HAVE | VALIDATED | 2026-11-16 | Track stock availability | Warehouse | |
| FR31 | FR | The Hong Kong service shall answer each purchase order with "can fulfil" or "cannot fulfil", and send a delay message when it cannot. | MUST HAVE | VALIDATED | 2026-11-16 | Order stock from supplier | Hong Kong Novelty Goods | |
| FR32 | FR | The Hong Kong service shall calculate a purchase order's expected arrival as 2 weeks' transport plus any reported delay. | MUST HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods | |
| FR33 | FR | The Hong Kong service shall ship a purchase order complete or not at all. | MUST HAVE | VALIDATED | 2026-11-16 | Order stock from supplier | Hong Kong Novelty Goods | Client: all or nothing, no partial shipments |
| FR34 | FR | The system shall automatically send a production request to PRINTZ when a customized order is placed. | MUST HAVE | VALIDATED | 2026-11-16 | Send production request | PRINTZ Production | |
| FR35 | FR | The system shall provide PRINTZ employees with all customization details, including text, images, colors, and product specifications. | MUST HAVE | VALIDATED | 2026-11-16 | Produce customized product | PRINTZ Production | |
| FR36 | FR | The system shall allow PRINTZ employees to update the production status of an order (Pending, In Production, Completed, Delayed). | MUST HAVE | VALIDATED | 2026-11-16 | Manage production order | PRINTZ Production | |
| FR37 | FR | The system shall notify GIFTS-4-U when a production order has been completed. | MUST HAVE | VALIDATED | 2026-11-16 | Track production progress | PRINTZ Production | |
| FR38 | FR | The system shall notify GIFTS-4-U when a production delay may affect the expected delivery date. | MUST HAVE | VALIDATED | 2026-11-16 | Monitor production delays | PRINTZ Production | |
| FR39 | FR | The system shall display all active production orders assigned to PRINTZ. | MUST HAVE | RAISED | 2026-11-16 | View production orders | PRINTZ Production | |
| FR40 | FR | The system shall record the estimated completion date of each production order. | MUST HAVE | VALIDATED | 2026-11-16 | Plan production schedule | PRINTZ Production | |
| FR41 | FR | The system shall allow PRINTZ employees to attach comments or notes to production orders. | SHOULD HAVE | VALIDATED | 2026-11-16 | Update production order | PRINTZ Production | |
| FR43 | FR | The system shall allow PRINTZ to reject production requests that contain missing or invalid customization information. | MUST HAVE | VALIDATED | 2026-11-16 | Validate production request | PRINTZ Production | |
| FR44 | FR | The system shall automatically inform GIFTS-4-U when a production request is rejected. | MUST HAVE | VALIDATED | 2026-11-16 | Handle rejected production request | PRINTZ Production | |
| FR45 | FR | The system shall link each production order to its customer order and SKU. | MUST HAVE | VALIDATED | 2026-11-16 | Trace order fulfilment | PRINTZ Production | |
| FR46 | FR | The system shall allow PRINTZ employees to mark customized products as ready for shipment. | MUST HAVE | VALIDATED | 2026-11-16 | Complete production order | PRINTZ Production | |
| FR47 | FR | The system shall generate production reports showing pending, delayed and completed orders. | SHOULD HAVE | VALIDATED | 2026-11-16 | Generate management report | PRINTZ Production | |
| FR48 | FR | The system shall give B2B production orders priority over B2C orders. | MUST HAVE | VALIDATED | 2026-11-16 | Prioritize production queue | PRINTZ Production | |
| FR50 | FR | The system shall send DHL the details of each order: route, order number, SKUs, expected delivery time, and fragile or non-fragile. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL | |
| FR51 | FR | The system shall receive real-time status updates and issues for orders in transit. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL | |
| FR52 | FR | The system shall alert when an international shipment is held in customs (Hong Kong) or customs (Netherlands). | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL | |
| FR53 | FR | The Control Tower shall show a section for orders in transit. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL | |
| FR54 | FR | The DHL section shall have filters for route, status and international orders. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL | |
| FR55 | FR | The system shall receive an estimated delay from DHL when an issue arises, and add it to the expected delivery time. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL | |
| FR57 | FR | The webshop shall offer pre-made, non-customizable products. | MUST HAVE | VALIDATED | 2026-11-16 | Order products from GIFTS-4-U | Webshop | |

## Non-Functional Requirements

| # | FR/NFR | Requirement | Priority | SDLC Status | Last Status Change Date | Related Use Case | Owner in Project | Additional Info |
|---|---|---|---|---|---|---|---|---|
| NFR1 | NFR | The system shall send alerts about issues with B2B orders by email. | MUST HAVE | VALIDATED | 2026-11-13 | N/A | Control Tower | |
| NFR2 | NFR | The system shall identify every product by a unique, standardized SKU. | MUST HAVE | VALIDATED | 2026-11-13 | N/A | Whole team | |
| NFR3 | NFR | The warehouse shall dispatch an order within 5 working days of the order. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Warehouse | |
| NFR4 | NFR | The system shall have an adjustable polling time (for example, for warehouse stock checks). | MUST HAVE | VALIDATED | 2026-11-13 | N/A | Control Tower | |
| NFR5 | NFR | The system shall store every status change of every order (customer, purchase and production orders) with a timestamp. | MUST HAVE | VALIDATED | 2026-11-15 | N/A | Whole team | |
| NFR6 | NFR | The Control Tower shall open on the dashboard after login. | SHOULD HAVE | VALIDATED | 2026-11-16 | N/A | Control Tower | |
| NFR7 | NFR | The system shall show all dates and times in CET. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Whole team | |
| NFR8 | NFR | The system's default language shall be English. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Whole team | |
| NFR9 | NFR | A product's title in the webshop shall be at most 50 characters. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop | |
| NFR10 | NFR | A product's summary in the webshop shall be at most 100 characters. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop | |
| NFR11 | NFR | A product image in the webshop shall be at most 2 MB. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop | |
| NFR12 | NFR | The Control Tower shall have a section for each organisation in the supply chain. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Control Tower | |
| NFR13 | NFR | The system shall give staff members limited access to the Control Tower. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Control Tower | |
| NFR14 | NFR | The Control Tower's UI shall work on mobile phones. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Control Tower | |
| NFR15 | NFR | The system shall be built as a microservice architecture. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Whole team | |
| NFR16 | NFR | The system shall be developed with Svelte 5 for the frontend and Express.js for the backend. | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Whole team | |
