# UVC Requirements

## Functional Requirements

| # | FR/NFR | Requirement | Priority | SDLC Status | Last Status Change Date | Related Use Case | Owner in Project | Additional Info |
|---|---|---|---|---|---|---|---|---|
| FR1 | FR | The system shall automatically flag orders from Hong Kong as international. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL |  |
| FR2 | FR | The system shall show a live overview of all open orders grouped by status. | MUST HAVE | RAISED | 2026-11-13 | Monitor orders | Control Tower |  |
| FR3 | FR | The system shall automatically send alerts when there is a delay in delivery. | MUST HAVE | VALIDATED | 2026-11-13 | Track order delivery | DHL |  |
| FR4 | FR | The system should automatically update the task list when there is a delay in delivery. | MUST HAVE | VALIDATED | 2026-11-13 | Track order delivery | DHL |  |
| FR5 | FR | The system should automatically update the task list when there is not enought stock available to complete an order. | MUST HAVE | RAISED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR6 | FR | The system should allow the business owner to set reorder thresholds for products. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR7 | FR | The system should automatically reorder a product when it reaches the set reorder threshold. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR8 | FR | The system shall keep track of and reflect any movements to and from the warehouse. | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR9 | FR | The system should automatically calculate statistics for the recent orders (dead stock, trends etc). | MUST HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR10 | FR | The system should add returned and repaired/undamaged products to the warehouse stock. | SHOULD HAVE | VALIDATED | 2026-11-13 | Track stock availability | Warehouse |  |
| FR11 | FR | The system shall track inbound shipments from the Hong Kong supplier and alert when one is late. | MUST HAVE | VALIDATED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods | Client: supplier statuses are automated ("Shipped", "In Customs") |
| FR12 | FR | The system shall send each reorder as a purchase order to the Hong Kong supplier, with SKU, quantity and requested date. | MUST HAVE | VALIDATED | 2026-11-15 | Order stock from supplier | Hong Kong Novelty Goods | replaces email |
| FR13 | FR | The Control Tower shall show a Hong Kong section with all purchase orders, their status and expected arrival date. | MUST HAVE | VALIDATED | 2026-11-15 | View supplier orders | Hong Kong Novelty Goods | Part of NFR12 (a section per organisation), no separate interface for the supplier |
| FR14 | FR | The system shall let the supplier update each purchase order’s status: confirmed, in production, shipped,received at warehouse. | MUST HAVE | VALIDATED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods |  |
| FR15 | FR | The system shall let the supplier report an exception: out of stock, unable to fulfil (a very large order during Christmas rush), stuck in customs, or an incident such as a fire. | MUST HAVE | RAISED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods | Scenario A: SKU shortage |
| FR16 | FR | The system shall email the supplier when a shipment is late. | SHOULD HAVE | VALIDATED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods | flag and email late partners to put pressure on them |
| FR17 | FR | The system shall show errors in the supplier service on the supplier’s page. | SHOULD HAVE | RAISED | 2026-11-15 | Track inbound shipment | Hong Kong Novelty Goods | errors show on that company’s page |
| FR18 | FR | The system shall let a purchase order be marked as urgent. | COULD HAVE | VALIDATED | 2026-11-15 | Order stock from supplier | Hong Kong Novelty Goods | Scenario : Christmas rush and B2B priority |
| FR19 | FR | The system shall allow the ordering of customizable items (size, letters, colors) by the customer | MUST HAVE | VALIDATED | 2026-11-16 | Order product from GIFTS-4-U | Webshop |  |
| FR20 | FR | The system shall allow the customer to view their delivery time | MUST HAVE | VALIDATED | 2026-11-16 | Order product from GIFTS-4-U | Webshop |  |
| FR21 | FR | The system shall be able to notify the customer of a wide variety of "shipmant delayed" scenarios | MUST HAVE | VALIDATED | 2026-11-16 | Order product from Gifts-4-U | Webshop |  |
| FR22 | FR | The system shall offer the option to the customer to specify whether the customer is a Consumer or a Business | MUST HAVE | VALIDATED | 2026-11-16 | Account creation on Gifts-4-U | Webshop |  |
| FR23 | FR | The system shall display a delivery time on each webshop's product that is informed by the factors that make up the supply chain (stock delays, busy times, etc.) | MUST HAVE | VALIDATED | 2026-11-16 | Order product from Gifts-4-U | Webshop |  |
| FR24 | FR | The system shall display the amount that is in stock in the warehouse on the webshop's page for each individual product | MUST HAVE | VALIDATED | 2026-11-16 | Order products from Gifts-4-U | Webshop |  |
| FR25 | FR | The system shall allow the customer to specify that their order has been received successfully and satisfactorily via the Webshop | MUST HAVE | VALIDATED | 2026-11-16 | Contact Gifts-4-U about shipment | Webshop |  |
| FR26 | FR | The system shall allow the customer to specify that their order has not been received, been damaged or has not arrived in the correct quantity via the Webshop | MUST HAVE | VALIDATED | 2026-11-16 | Contact Gifts-4-U about shipment | Webshop |  |
| FR27 | FR | The system shall allow the ordering of multiple products in one order | MUST HAVE | VALIDATED | 2026-11-16 | Order products from Gifts-4-U | Webshop |  |
| FR28 | FR | The system shall allow the customer to return orders | MUST HAVE | VALIDATED | 2026-11-16 | Return orders from Gifts-4-U | Webshop |  |
| FR29 | FR | The system shall reorder stock early based on predictions calculated from statistics. | COULD HAVE | VALIDATED | 2026-11-16 | Track stock availability | Warehouse |  |
| FR30 | FR | The system shall allow stock to be added/removed from stock by staff members by scanning the products' SKU barcodes. | COULD HAVE | VALIDATED | 2026-11-16 | Track stock availability | Warehouse |  |
| FR31 | FR | The supplier service shall answer each purchase order with "can fulfil" or "cannot fulfil", and send a delay message when it cannot. | MUST HAVE | VALIDATED | 2026-11-16 | Order stock from supplier | Hong Kong Novelty Goods |  |
| FR32 | FR | The system shall calculate a purchase order's expected arrival as 2 weeks transport plus any delay reported by the supplier. | MUST HAVE | VALIDATED | 2026-11-16 | Track inbound shipment | Hong Kong Novelty Goods |  |
| FR33 | FR | The supplier shall ship a purchase order complete or not at all. | MUST HAVE | VALIDATED | 2026-11-16 | Order stock from supplier | Hong Kong Novelty Goods | Client: all or nothing, no partial shipments |
| FR34 | FR | The system shall automatically send production requests to PRINTZ when a customized order is placed. | MUST HAVE | VALIDATED | 2026-11-16 | Send production request | PRINTZ Production |  |
| FR35 | FR | The system shall provide PRINTZ employees with all customization details, including text, images, colors, and product specifications. | MUST HAVE | VALIDATED | 2026-11-16 | Produce customized product | PRINTZ Production |  |
| FR36 | FR | The system shall allow PRINTZ employees to update the production status of an order (Pending, In Production, Completed, Delayed). | MUST HAVE | VALIDATED | 2026-11-16 | Manage production order | PRINTZ Production |  |
| FR37 | FR | The system shall notify GIFTS-4-U when a production order has been completed. | MUST HAVE | VALIDATED | 2026-11-16 | Track production progress | PRINTZ Production |  |
| FR38 | FR | The system shall notify GIFTS-4-U when a production delay may impact the expected delivery date. | MUST HAVE | VALIDATED | 2026-11-16 | Monitor production delays | PRINTZ Production |  |
| FR39 | FR | The system shall display all active production orders assigned to PRINTZ. | MUST HAVE | RAISED | 2026-11-16 | View production orders | PRINTZ Production |  |
| FR40 | FR | The system shall record the estimated completion date for each production order. | MUST HAVE | VALIDATED | 2026-11-16 | Plan production schedule | PRINTZ Production |  |
| FR41 | FR | The system shall allow PRINTZ employees to attach comments or notes to production orders. | SHOULD HAVE | VALIDATED | 2026-11-16 | Update production order | PRINTZ Production |  |
| FR42 | FR | The system shall maintain a history of status changes for each production order. | SHOULD HAVE | VALIDATED | 2026-11-16 | Audit production activity | PRINTZ Production |  |
| FR43 | FR | The system shall allow PRINTZ to reject production requests that contain missing or invalid customization information. | MUST HAVE | VALIDATED | 2026-11-16 | Validate production request | PRINTZ Production |  |
| FR44 | FR | The system shall automatically inform GIFTS-4-U when a production request is rejected. | MUST HAVE | VALIDATED | 2026-11-16 | Handle rejected production request | PRINTZ Production |  |
| FR45 | FR | The system shall link production orders to the corresponding customer order and SKU. | MUST HAVE | VALIDATED | 2026-11-16 | Trace order fulfillment | PRINTZ Production |  |
| FR46 | FR | The system shall allow PRINTZ employees to mark customized products as ready for shipment. | MUST HAVE | VALIDATED | 2026-11-16 | Complete production order | PRINTZ Production |  |
| FR47 | FR | The system shall generate production reports showing completed, delayed, and pending orders. | SHOULD HAVE | VALIDATED | 2026-11-16 | Generate management report | PRINTZ Production |  |
| FR48 | FR | The system shall prioritize B2B production orders over standard customer orders when required. | COULD HAVE | VALIDATED | 2026-11-16 | Prioritize production queue | PRINTZ Production |  |
| FR49 | FR | The system shall allow Gifts-4-U CEO to set reorder thresholds manually for different products. | MUST HAVE | VALIDATED | 2026-11-17 | Product restock | Control Tower |  |
| FR50 | FR | The system shall send detailed information to DHL about each order, including the trajet, order number, SKUs, expected delivery time, fragile/nonfragile. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL |  |
| FR51 | FR | The system shall receive real-time updates on orders in transit for status changes and issues. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL |  |
| FR52 | FR | The system shall send an alert on international orders being held at the Chinese or the Dutch border. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL |  |
| FR53 | FR | The system shall have a section for orders in transit. | MUST HAVE | VALIDATED | 2026-11-17 | Track order delivery | DHL |  |
| FR54 | FR | The DHL section should have filters for trajet, status, international. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL |  |
| FR55 | FR | The system shall add to estimated delivery time when DHL reports an issue with order. | MUST HAVE | RAISED | 2026-11-17 | Track order delivery | DHL |  |
| FR56 | FR | The system should receive an estimated delay from DHL when an issue with an order arises. | SHOULD HAVE | RAISED | 2026-11-17 | Track order delivery | DHL |  |

## Non-Functional Requirements

| # | FR/NFR | Requirement | Priority | SDLC Status | Last Status Change Date | Related Use Case | Owner in Project | Additional Info |
|---|---|---|---|---|---|---|---|---|
| NFR1 | NFR | The alert when any issues arise with B2B orders should be in the form of an email. | MUST HAVE | VALIDATED | 2026-11-13 | N/A |  |  |
| NFR2 | NFR | The system shall identify products by their SKU (which should be a list of unique and standardized identifiers). | MUST HAVE | VALIDATED | 2026-11-13 | N/A | ? |  |
| NFR3 | NFR | The system shall have the maximum delivery time set to 5 working days from the order. | MUST HAVE | VALIDATED | 2026-11-13 | N/A |  |  |
| NFR4 | NFR | The system shall have an adjustable polling time (forwarehouse stock checks for example). | MUST HAVE | VALIDATED | 2026-11-13 | N/A |  |  |
| NFR5 | NFR | The system shall store every purchase order status change with a timestamp. | MUST HAVE | VALIDATED | 2026-11-15 | N/A |  |  |
| NFR6 | NFR | The system shall have the dashboard displayed as the default page when logging in the control tower system. | SHOULD HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR7 | NFR | The system's time zone must be standardized to CET | MUST HAVE | VALIDATED | 2026-11-16 | N/A | ? |  |
| NFR8 | NFR | The system's default language should be in English | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR9 | NFR | A product's title on the webshop shall have a 50 char limit | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop |  |
| NFR10 | NFR | A product's summary in the webshop shall have a 100 char limit | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop |  |
| NFR11 | NFR | A product's image on the webshop shall have a 2 MegaByte size limit | MUST HAVE | VALIDATED | 2026-11-16 | N/A | Webshop |  |
| NFR12 | NFR | The system shall contain a section for each organization in the suplly chain. | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR13 | NFR | The system shall allow staff members limited access to the control tower. | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR14 | NFR | The system's UI shall support mobile devices (specifically mobile phones). | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR15 | NFR | The system shall be built as a microservice architecture. | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR16 | NFR | the system shall be developed using Svelte 5 for the frontend and Express.js for the backend. | MUST HAVE | VALIDATED | 2026-11-16 | N/A |  |  |
| NFR17 | NFR | The system shall feature a variety of pre-made non-customizable products in the webshop | MUST HAVE | VALIDATED | 2026-11-16 | Order product from Gifts-4-U | Webshop |  |
