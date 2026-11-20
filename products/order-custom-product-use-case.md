| Use Case Specification      |       |
| --------------------------- | ----- |
| Use Case Name               | Order Custom Product |
| Actor(s)                    | Customer (Consumer or Business) |
| Summary Description         | The Customer creates a custom gift in the GIFTS-4-U webshop by choosing a blank product (e.g. a white mug or teddy bear) and specifying its size, letters and colors, then places the order after checking the stock level and estimated delivery time. The system automatically sends a production request with all customization details to PRINTZ. The use case covers three decision points: whether the blank item is in stock, whether PRINTZ accepts the customization details, and whether the order is a B2B order that moves ahead in the production queue. |
| Priority                    | Must-Have |
| Status                      | Uncommenced |
| Pre-Condition(s)            | The Customer is logged in to a GIFTS-4-U webshop account registered as either Consumer or Business (see Create Account). |
|                             | The product is offered in the webshop as a customizable item, with its size, letter and color options defined. |
| Post-Condition(s)           | The order is recorded with all customization details, and the Customer has received an order confirmation with the order number and estimated delivery time. |
|                             | PRINTZ has accepted a production request for each customized product in the order, queued with B2B orders ahead of B2C orders. |
|                             | The blank items for the order are reserved in warehouse stock for shipment to PRINTZ, or a restocking task is on the staff task list. |
| Basic Path                  | 1. The Customer opens a customizable product in the GIFTS-4-U webshop. |
|                             | 2. The system displays the product with its customization options for size, letters and colors (FR19), the number of blank items in stock in the warehouse (FR25), and an estimated delivery time based on supply chain factors such as stock levels and busy periods (FR24). |
|                             | 3. The Customer chooses the size, enters the letters, selects the colors and enters the quantity (FR19). |
|                             | 4. The Customer adds the customized product to the cart. |
|                             | 5. The Customer proceeds to checkout. |
|                             | 6. The system displays an order summary listing each product with its customization details and quantity, together with the estimated delivery time for the whole order (FR24, FR28). |
|                             | 7. The Customer confirms and places the order. |
|                             | 8. The system records the order and checks that the warehouse has enough blank items in stock for each customized product. Stock is available, so the system reserves the blank items for shipment to PRINTZ. |
|                             | 9. The system automatically sends a production request to PRINTZ for each customized product (FR35), containing all customization details (letters, colors, size), the product specification, the SKU and the order number (FR36). |
|                             | 10. The system identifies the order as B2C from the Customer's account type and adds the production request to the end of the PRINTZ production queue (B3). |
|                             | 11. The system shows the Customer an order confirmation with the order number and the estimated delivery time. |
|                             | 12. PRINTZ checks the customization details and accepts the production request. The use case ends. |
| Alternative Paths           | A1. Several products in one order (at step 4): |
|                             | A1.1 The Customer continues shopping and repeats steps 1–4 for other customizable products, or adds pre-made products to the cart. |
|                             | A1.2 All products in the cart are placed as one order (FR28). Continue at step 5. |
|                             | A2. Blank item not in stock (at steps 2 and 8): |
|                             | A2.1 At step 2, the system shows that the blank item is out of stock or low on stock (FR25) and displays a longer estimated delivery time that includes restocking (FR24). The Customer can still order the product. |
|                             | A2.2 At step 8, the system finds that the warehouse does not have enough blank items to complete the order and automatically adds a restocking task to the GIFTS-4-U staff task list (FR5). For a B2B order it also sends an email alert (NFR1). |
|                             | A2.3 The system includes the restocking time in the estimated delivery time (B5). Continue at step 9; the blank items are shipped to PRINTZ once they are back in stock, and the confirmation in step 11 shows the extended delivery time. |
|                             | A3. B2B order (at step 10): |
|                             | A3.1 The system identifies the order as B2B because the Customer's account is registered as Business (B4). |
|                             | A3.2 The system places the production request ahead of all B2C requests in the PRINTZ production queue, behind any earlier B2B requests (FR49). Continue at step 11. |
| Exception Paths             | E1. Customization incomplete (at step 4): |
|                             | E1.1 The Customer tries to add the product to the cart without specifying the size, letters or colors. |
|                             | E1.2 The system highlights the missing fields and does not add the product to the cart (B1). Resume at step 3. |
|                             | E2. Production request rejected by PRINTZ (at step 12): |
|                             | E2.1 PRINTZ rejects the production request because the customization details are missing or invalid, and states the reason (FR44). |
|                             | E2.2 The system automatically informs GIFTS-4-U of the rejection and the reason (FR45). For a B2B order it also sends an email alert (NFR1). |
|                             | E2.3 GIFTS-4-U staff contact the Customer to request corrected customization details, and the system updates the estimated delivery time shown to the Customer. |
|                             | E2.4 The Customer supplies the corrected details, and the system sends a new production request to PRINTZ (FR35, FR36), queued as in step 10 or A3. Resume at step 12. |
|                             | E2.5 If the Customer cancels instead, the system cancels the customized product from the order and releases its reserved blank items back to warehouse stock. The use case ends. |
| Business Rules              | B1. A customized product can only be added to the cart once size, letters and colors are all specified, using only the options offered for that product. |
|                             | B2. Each customized product in an order gets its own production request, linked to the order number and the product's SKU. |
|                             | B3. B2B production requests are processed before B2C requests; requests of the same type are processed in order of arrival (FR49). |
|                             | B4. An order is B2B or B2C according to the account type (Business or Consumer) the Customer chose when creating the account. |
|                             | B5. When there are not enough blank items in stock, the order is still accepted, but the estimated delivery time must include the restocking time (FR5, FR24). |
|                             | B6. A rejected production request is not produced until corrected customization details have been received (FR44). |
| Non-Functional Requirements | NFR1. The system shall automatically send an email alert when any issue arises with a B2B order, such as a rejected production request or missing blank stock. |
|                             | NFR2. The system shall identify products by their SKU, a list of unique and standardized identifiers; the production request to PRINTZ refers to the blank item by its SKU. |
|                             | NFR3. The system shall have the maximum delivery time set to 5 working days from the order. In this use case it applies when the blank item is in stock (see B5). |
|                             | NFR4. The system shall have an adjustable polling time for warehouse stock checks, so the stock shown on the product page (FR25) stays current. |
|                             | NFR7. The system's time zone shall be standardized to CET, including for the delivery times shown to the Customer. |
|                             | NFR14. The system's UI shall support mobile devices (specifically mobile phones), so the Customer can customize and order products from a phone. |
