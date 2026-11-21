| Use Case Specification      |       |
| --------------------------- | ----- |
| Use Case Name               | Confirm Order Received / Report Damaged or Missing |
| Actor(s)                    | Customer (B2C Consumer or B2B Business) |
| Summary Description         | The Customer uses the Webshop to confirm that a delivered order arrived complete and undamaged, or to report that the order was not received, arrived damaged, or arrived with an incorrect quantity. GIFTS-4-U uses the confirmation to close the order and the report to follow up with the Customer and DHL (FR26, FR27). |
| Priority                    | Must-Have |
| Status                      | Uncommenced |
| Pre-Condition(s)            | The Customer is logged in to the Webshop with a Consumer or Business account. |
|                             | The Customer has an order that has been shipped by DHL and has not yet been confirmed as received or reported. |
| Post-Condition(s)           | Confirmed: the order status is "Received", the confirmation is stored with a timestamp, and the order is closed. |
|                             | Reported: an issue report linked to the order number and the affected SKUs is stored, the order status is "Issue Reported", and a follow-up task is added to the GIFTS-4-U Staff task list. |
| Basic Path                  | 1. The Customer opens "My Orders" in the Webshop. |
|                             | 2. The System displays the Customer's orders with their current delivery status. |
|                             | 3. The Customer selects the order that has arrived. |
|                             | 4. The System displays the order details (order number, products by SKU, ordered quantities and delivery status) with the options "Confirm Order Received" and "Report a Problem". |
|                             | 5. The Customer selects "Confirm Order Received". |
|                             | 6. The System asks the Customer to confirm that all products arrived undamaged and in the ordered quantity. |
|                             | 7. The Customer confirms. |
|                             | 8. The System sets the order status to "Received", stores the confirmation with a CET timestamp (NFR7), and shows a confirmation message. The use case ends. |
| Alternative Paths           | A1. Damaged order (branches from step 5) |
|                             | A1.1. The Customer selects "Report a Problem" and chooses "Damaged". |
|                             | A1.2. The System lists the products in the order by SKU with the ordered quantities. |
|                             | A1.3. The Customer selects the damaged products, enters the number damaged for each, and describes the damage. |
|                             | A1.4. The Customer submits the report. |
|                             | A1.5. The System stores the report with a CET timestamp (NFR7), sets the order status to "Issue Reported", adds a follow-up task to the GIFTS-4-U Staff task list, and shows the Customer a report reference number. The use case ends. |
|                             | A2. Order not received (branches from step 5) |
|                             | A2.1. The Customer selects "Report a Problem" and chooses "Not Received". |
|                             | A2.2. The System shows the last delivery status received from DHL and asks the Customer to confirm that the order has not arrived. |
|                             | A2.3. The Customer confirms and may add a comment. |
|                             | A2.4. The System continues at A1.5. |
|                             | A3. Incorrect quantity (branches from step 5) |
|                             | A3.1. The Customer selects "Report a Problem" and chooses "Incorrect Quantity". |
|                             | A3.2. The System lists the products in the order by SKU with the ordered quantities. |
|                             | A3.3. The Customer enters the quantity actually received for each affected product and submits the report. |
|                             | A3.4. The System records the difference between the ordered and received quantities in the report and continues at A1.5. |
|                             | A4. Business customer (applies to A1, A2 and A3) |
|                             | A4.1. When the order belongs to a Business account, the System marks the report as priority and automatically sends an email alert to GIFTS-4-U (NFR1). |
| Exception Paths             | E1. Order still within its delivery time (at A2.1) |
|                             | E1.1. DHL has not marked the order as delivered and the expected delivery date has not passed. |
|                             | E1.2. The System shows the current DHL status and the expected delivery date, does not accept the "Not Received" report, and returns to step 4. |
|                             | E2. Incomplete or invalid report (at A1.4 or A3.3) |
|                             | E2.1. The Customer submits a report with no product selected, an invalid quantity, or an empty damage description. |
|                             | E2.2. The System highlights the invalid fields, does not submit the report, and returns to A1.3 or A3.3. |
|                             | E3. Confirmation or report cannot be saved |
|                             | E3.1. The System cannot store the confirmation or report (for example, because a service is unavailable). |
|                             | E3.2. The System shows an error message, keeps the details the Customer entered, leaves the order status unchanged, and asks the Customer to try again later. |
| Business Rules              | B1. Only the Customer who placed the order, or a user of the same Business account, can confirm or report on that order. |
|                             | B2. An order can be confirmed as received only once; any problem found after confirmation is handled through the Return Order use case. |
|                             | B3. "Not Received" can only be reported once DHL has marked the order as delivered or the expected delivery date has passed; the expected delivery date is at most 5 working days after the order (NFR3). |
|                             | B4. A "Damaged" or "Incorrect Quantity" report must identify each affected product by its SKU and state the affected quantity (NFR2). |
|                             | B5. Reports from B2B customers are handled before reports from B2C customers. |
|                             | B6. A reported order stays open until GIFTS-4-U Staff close the follow-up task. |
| Non-Functional Requirements | NFR1. The system shall automatically send an alert in the form of an email when any issues arise with B2B orders. |
|                             | NFR2. The system shall identify products by their SKU (which should be a list of unique and standardized identifiers). |
|                             | NFR3. The system shall have the maximum delivery time set to 5 working days from the order. |
|                             | NFR7. The system's time zone must be standardized to CET. |
|                             | NFR8. The system's default language should be in English. |
|                             | NFR14. The system's UI shall support mobile devices (specifically mobile phones). |
