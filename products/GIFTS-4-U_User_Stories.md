# GIFTS-4-U Control Tower · User Stories

143 user stories based on the UVC Requirements · 23 November 2026

## About this document

This document breaks the functional and non-functional requirements in UVC-Requirements.md into small user stories. The use case specifications, activity diagrams, persona, journey map, ERD and DFD were used for detail and acceptance criteria.

Every story follows the team template: Title, User Story (As a \[role\], I want \[action/goal\], so that \[benefit\]), Acceptance Criteria and Notes / Context. The Notes / Context field lists the requirements each story traces to, with their MoSCoW priority.

Roles are limited to the eight agreed roles. A story that applies to both the CEO and staff is written for GIFTS-4-U Staff; a story that applies to both business and individual customers is written for Customer (Business & Individual).

NFR15 (microservice architecture) and NFR16 (Svelte 5 and Express.js) are technical constraints on every story, so they are not written as separate user stories.

### Stories per role

| Role                             | Stories | IDs             |
|----------------------------------|---------|-----------------|
| GIFTS-4-U CEO                    | 13      | US-001 – US-013 |
| GIFTS-4-U Staff                  | 57      | US-014 – US-070 |
| Customer (Business & Individual) | 25      | US-071 – US-095 |
| Customer (Business)              | 4       | US-096 – US-099 |
| Customer (Individual)            | 2       | US-100 – US-101 |
| PRINTZ                           | 16      | US-102 – US-117 |
| Hong Kong Novelty Goods Inc.     | 13      | US-118 – US-130 |
| DHL                              | 13      | US-131 – US-143 |
| Total                            | 143     |                 |

## 1. GIFTS-4-U CEO

13 user stories (US-001 – US-013)

### US-001 — Set a re-order threshold per product

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to set a re-order threshold for each product, so that blank stock is replenished before it runs out.

**Acceptance Criteria:**

- I can enter a threshold (a whole number of 0 or more) for any product, identified by its SKU.
- The saved threshold is shown next to the product’s current stock level.
- Products without a threshold are marked “No threshold set”.

**Traces to:** FR6 (Must)

**Notes / Context:** Use case Re-Order Stock, B1. ERD: WAREHOUSE_STOCK.threshold. The requirement names the Director SCM; in this role list that is the GIFTS-4-U CEO.

### US-002 — Change an existing re-order threshold

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to change a product’s re-order threshold, so that I can raise stock buffers ahead of busy periods such as the Christmas rush.

**Acceptance Criteria:**

- I can edit the threshold of a product that already has one.
- The new threshold is used from the next stock check onward.
- The change is stored with my name and a CET timestamp.

**Traces to:** FR6 (Must), NFR5 (Must), NFR7 (Must)

**Notes / Context:** Edge case: if the new threshold is at or above the current stock, a purchase order is created at the next stock check (FR7).

### US-003 — View sales trends per product

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to see sales trends per product over recent periods, so that I can plan purchasing and spot rising demand early.

**Acceptance Criteria:**

- Statistics are calculated automatically from recent orders, with no manual input.
- I can see units sold per product per week and per month.
- I can choose the period shown (last 4 weeks, last 3 months, last 12 months).

**Traces to:** FR9 (Must)

**Notes / Context:** Use case diagram: View Order Statistics (Trends, Dead Stock).

### US-004 — Identify dead stock

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to see a list of products that have not sold within a set period, so that I can stop re-ordering items that only take up warehouse space.

**Acceptance Criteria:**

- The list shows SKU, product name, quantity in stock and date of last sale.
- I can set the period that counts as dead stock (for example 90 days).
- The list is sorted by quantity in stock, highest first.

**Traces to:** FR9 (Must)

**Notes / Context:** The exact definition of dead stock is not in the requirements; confirm the default period with the client.

### US-005 — Re-order early based on predicted demand

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want the system to re-order stock early when sales statistics predict a shortage, so that stock is in the warehouse before a peak period instead of after it.

**Acceptance Criteria:**

- Predictions use the sales statistics calculated for FR9.
- When predicted stock would reach the threshold within the supplier lead time, the system creates a purchase order early.
- Purchase orders created this way are labelled “Predicted” in the Hong Kong section.

**Traces to:** FR29 (Could)

**Notes / Context:** Lead time = 2 weeks’ transport plus any reported delay (FR32).

### US-006 — Generate a production report

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to generate a report of pending, delayed and completed production orders, so that I can judge how reliably PRINTZ delivers.

**Acceptance Criteria:**

- The report groups production orders into Pending, Delayed and Completed, with a count for each.
- I can choose the date range of the report.
- Delayed orders show the original and the current estimated completion date.

**Traces to:** FR47 (Should)

**Notes / Context:** Use case diagram: Generate Production Report.

### US-007 — Keep webshop delivery promises realistic

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want the delivery time shown in the webshop to account for stock levels, supplier delays and busy periods, so that we never promise customers a date we cannot deliver.

**Acceptance Criteria:**

- For products in stock, the shown delivery time is no longer than the 5-working-day dispatch limit (NFR3) plus transport.
- When stock is too low, the delivery time includes the restocking time (2 weeks plus any reported supplier delay).
- During a busy period, the extra handling days for that period are added.

**Traces to:** FR23 (Must), NFR3 (Must)

**Notes / Context:** Persona: “doesn’t want to promise anything the company can’t deliver.” Use case Order Custom Product, B5. The customer’s view of this time is a separate story.

### US-008 — Define busy periods

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to mark busy periods such as the Christmas rush, with a number of extra handling days, so that delivery estimates stay accurate when demand peaks.

**Acceptance Criteria:**

- I can add a busy period with a start date, end date and number of extra days.
- While a busy period is active, the webshop adds those days to every delivery estimate.
- I can edit or remove a busy period.

**Traces to:** FR23 (Must)

**Notes / Context:** FR23 mentions busy periods but not how they are defined; this story proposes a manual setting. Confirm with the client.

### US-009 — Approve the tone of delay emails

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want delay emails to customers to use a polite template that I have approved, so that every customer receives the same courteous and honest message.

**Acceptance Criteria:**

- The template contains a greeting, the order number, the reason for the delay, the new expected delivery date and an apology.
- I can edit the template text; order details are filled in automatically.
- An email never states a delivery date that the system has not calculated.

**Traces to:** FR21 (Must)

**Notes / Context:** Persona and journey map: wants a polite tone and prefers not to lie about the status of an order.

### US-010 — Adjust the polling interval

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to adjust how often the system checks warehouse stock and partner statuses, so that I can balance up-to-date information against system load.

**Acceptance Criteria:**

- The interval is set in minutes in the Control Tower settings.
- A new interval is used from the next check onward.
- Only the CEO can change this setting.

**Traces to:** NFR4 (Must)

**Notes / Context:** DFD: GIFTS-4-U owner sends Settings to the Control Tower.

### US-011 — Create staff accounts with a role

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to create a Control Tower account for each staff member and give it a role, so that every staff member logs in with their own credentials and responsibilities.

**Acceptance Criteria:**

- An account has a unique username, a password and a role.
- A username that already exists is rejected.
- I can deactivate an account so it can no longer log in.

**Traces to:** NFR13 (Must)

**Notes / Context:** ERD: CONTROL_TOWER_STAFF (username, password, role).

### US-012 — Limit what each staff role can access

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want to choose which Control Tower sections and actions each staff role can use, so that staff only see and change what their job requires.

**Acceptance Criteria:**

- For each role I can choose which sections (Warehouse, Webshop, Hong Kong, PRINTZ, DHL) are visible.
- Staff cannot open a section or setting outside their role, including through a direct link.
- Re-order thresholds, polling interval and staff accounts are always CEO-only.

**Traces to:** NFR13 (Must), NFR12 (Must)

### US-013 — Use the Control Tower on my phone

**Role:** GIFTS-4-U CEO

**User Story:** As a GIFTS-4-U CEO, I want the Control Tower to work on my phone, so that I can check orders and stock while I am in meetings.

**Acceptance Criteria:**

- On a phone-sized screen (360 px wide) the layout fits without horizontal scrolling.
- The dashboard, sections and alerts can be read and used by touch.
- Text and colours meet WCAG AA contrast.

**Traces to:** NFR14 (Must)

**Notes / Context:** Persona: uses her phone a lot in meetings. The contrast requirement is the team’s accessibility assumption, not yet confirmed by the client.

## 2. GIFTS-4-U Staff

57 user stories (US-014 – US-070)

### US-014 — Log in to the Control Tower

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to log in to the Control Tower with my own username and password, so that only authorised people can see and change supply chain data.

**Acceptance Criteria:**

- Wrong credentials show an error that does not reveal which field was wrong.
- After logging in, my name is shown in the Control Tower.
- Logging out ends my session.

**Traces to:** NFR13 (Must)

### US-015 — Open on the dashboard after login

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the Control Tower to open on the dashboard after I log in, so that I see the current state of the supply chain straight away.

**Acceptance Criteria:**

- After a successful login, the dashboard is the first screen shown.
- The dashboard shows the number of open orders per status, open tasks and active alerts.

**Traces to:** NFR6 (Should)

### US-016 — See a section for each organisation

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a separate Control Tower section for each organisation in the supply chain, so that I can see the whole chain in one place without switching systems.

**Acceptance Criteria:**

- There are sections for Warehouse, Webshop, Hong Kong Novelty Goods, PRINTZ and DHL.
- Each section shows only the orders and statuses of that organisation.
- Each section can be reached in one click from the dashboard.

**Traces to:** NFR12 (Must)

**Notes / Context:** Persona key task 1; journey map user expectation: “Seeing the whole chain in one place.”

### US-017 — See open orders grouped by status

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want an overview of all open orders grouped by status, so that I can see at a glance where work is piling up.

**Acceptance Criteria:**

- All open customer orders are shown, grouped by status, with a count per group.
- Closed orders are not shown in the overview.
- Clicking a group lists the orders in it.

**Traces to:** FR2 (Must, raised – not yet validated)

### US-018 — Keep the order overview live

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the open-order overview to update by itself, so that I never act on outdated information.

**Acceptance Criteria:**

- Status changes appear within one polling interval without reloading the page.
- A “last updated” time in CET is shown.

**Traces to:** FR2 (Must, raised – not yet validated), NFR4 (Must), NFR7 (Must)

### US-019 — View the status history of an order

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see every status change of an order, with the time and who made it, so that I can explain to a customer or partner exactly what happened.

**Acceptance Criteria:**

- Each entry shows the old status, new status, author and a CET timestamp.
- History is available for customer orders, purchase orders and production orders.
- History entries cannot be edited or deleted.

**Traces to:** NFR5 (Must), NFR7 (Must)

**Notes / Context:** ERD: CONTROL_TOWER_STATUS_CHANGE.

### US-020 — See B2B orders first

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want B2B orders to be clearly marked and listed before B2C orders, so that business customers are served first.

**Acceptance Criteria:**

- Every B2B order carries a visible B2B label in all order lists.
- Within the same status, B2B orders are listed first, then by order date.

**Traces to:** NFR1 (Must), FR22 (Must)

**Notes / Context:** Based on the client context: GIFTS-4-U prioritises B2B orders over B2C orders (persona: “wants B2B customers served first”). An order is B2B when the customer’s account type is Business (Order Custom Product, B4).

### US-021 — See all dates in CET

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want all dates and times in the Control Tower shown in CET, so that partners in other time zones do not cause confusion about deadlines.

**Acceptance Criteria:**

- All dates and times are shown in CET and labelled as such.
- Dates received from partners, such as Hong Kong Novelty Goods, are converted to CET before they are shown.

**Traces to:** NFR7 (Must)

### US-022 — View an up-to-date task list

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a task list of everything that needs action, so that nothing falls through the cracks.

**Acceptance Criteria:**

- Each open task shows a description, the linked order and when it was created.
- Tasks linked to B2B orders are listed at the top.
- The list refreshes automatically.

**Traces to:** FR4 (Must), FR5 (Must, raised – not yet validated)

**Notes / Context:** Use case diagram: View Up-To-Date Task List. ERD: CONTROL_TOWER_TASK.

### US-023 — Close a task with the action taken

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to close a task and record the action I took, so that colleagues can see that an issue has been handled and how.

**Acceptance Criteria:**

- Closing a task requires a short note on the action taken.
- A closed task leaves the open list but stays in the order’s history.
- Closing the follow-up task of a reported order allows that order to be closed.

**Traces to:** NFR5 (Must)

**Notes / Context:** ERD: CONTROL_TOWER_TASK.action. Confirm Order Received / Report, B6.

### US-024 — Get a task when a delivery is delayed

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a task added to my task list automatically when a DHL delivery is delayed, so that I can follow up with the customer without having to spot the delay myself.

**Acceptance Criteria:**

- A task is created as soon as DHL reports a delay.
- The task contains the order number, the DHL status and the new expected delivery date.
- Only one task is created per delay report.

**Traces to:** FR4 (Must)

### US-025 — Get an alert when a delivery is delayed

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want an alert in the Control Tower when a DHL delivery is delayed, so that I know immediately which customer orders will arrive late.

**Acceptance Criteria:**

- The alert appears on the dashboard and in the DHL section.
- The alert shows the order number, the reason and the estimated delay.
- For B2B orders the alert is also sent by email (NFR1).

**Traces to:** FR3 (Must), NFR1 (Must)

### US-026 — Get a task when stock is too low for an order

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a restocking task added automatically when there is not enough stock to complete an order, so that I can arrange stock before the order is held up.

**Acceptance Criteria:**

- The task is created when the order is placed and stock is insufficient.
- The task shows the SKU, the shortfall and the affected order.
- The order is still accepted (Order Custom Product, B5).

**Traces to:** FR5 (Must, raised – not yet validated)

**Notes / Context:** Order Custom Product, A2.2.

### US-027 — See which orders a shortage affects

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see which open orders are waiting on a low or out-of-stock product, so that I can tell those customers early.

**Acceptance Criteria:**

- From a product, I can open a list of open orders that need it, B2B orders first.
- For each order the needed quantity and the quantity in stock are shown.

**Traces to:** FR5 (Must, raised – not yet validated), FR24 (Must)

**Notes / Context:** Persona key task 2: “see which orders they affect, and what is held up.”

### US-028 — Receive email alerts for B2B order issues

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want an email alert whenever something goes wrong with a B2B order, so that business customers’ problems are handled first, even when I am not looking at the Control Tower.

**Acceptance Criteria:**

- An email is sent for delivery delays, stock shortages, production delays or rejections, and customer problem reports on B2B orders.
- The email contains the order number, the customer, the issue and a link to the order.
- The email is sent within one polling interval of the issue.

**Traces to:** NFR1 (Must)

### US-029 — View current warehouse stock

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see the current stock level and threshold of every product, so that I know what is available to sell and to send to PRINTZ.

**Acceptance Criteria:**

- Each product shows SKU, name, quantity in stock, reserved quantity and threshold.
- Products at or below their threshold are highlighted.
- I can search by SKU.

**Traces to:** FR8 (Must), FR6 (Must)

### US-030 — View every stock movement

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a log of every movement of stock into and out of the warehouse, so that I can explain any difference between expected and actual stock.

**Acceptance Criteria:**

- Each movement shows SKU, quantity (+ or −), reason, CET timestamp and author.
- Reasons include: purchase order received, sent to PRINTZ, sent to customer, moved to shop, return and manual correction.
- I can filter the log by SKU and date range.

**Traces to:** FR8 (Must), NFR7 (Must)

### US-031 — Add stock when a purchase order is received

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the full ordered quantity added to stock automatically when a purchase order reaches “received at warehouse”, so that stock levels are correct without manual counting.

**Acceptance Criteria:**

- Stock is only increased once the purchase order has the status “received at warehouse”.
- The full ordered quantity is added (no partial shipments, FR33).
- The increase is recorded in the stock movement log.

**Traces to:** FR8 (Must), FR14 (Must)

**Notes / Context:** Re-Order Stock, B8.

### US-032 — Reserve blank items for customized orders

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want blank items reserved automatically when a customized order is placed, so that the same items are not promised to two orders.

**Acceptance Criteria:**

- The reserved quantity is shown per SKU.
- Available stock = stock in the warehouse minus reserved stock.
- The reservation ends when the items are sent to PRINTZ.

**Traces to:** FR8 (Must)

**Notes / Context:** Order Custom Product, step 8.

### US-033 — Record blank items sent to PRINTZ

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to record when blank items leave the warehouse for PRINTZ, so that stock and the production order both show where the items are.

**Acceptance Criteria:**

- The quantity is removed from stock.
- The movement is linked to the production order and the SKU.
- The PRINTZ section shows the blank items as “sent to PRINTZ”.

**Traces to:** FR8 (Must), FR45 (Must)

**Notes / Context:** Supply chain: Warehouse → DHL → PRINTZ.

### US-034 — Record stock moved to the physical shop

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to record products moved from the warehouse to the physical shop, so that warehouse stock stays accurate.

**Acceptance Criteria:**

- I choose a SKU and a quantity.
- I cannot move more than the available quantity.
- The movement is logged with the reason “moved to shop”.

**Traces to:** FR8 (Must)

**Notes / Context:** Supply chain diagram shows the shop being supplied by the warehouse. Shop stock itself is out of scope.

### US-035 — Add stock by scanning a barcode

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to add stock by scanning a product’s SKU barcode, so that I can book incoming goods quickly and without typing errors.

**Acceptance Criteria:**

- Scanning a barcode opens the matching product.
- I enter the quantity and the stock increases.
- An unknown barcode shows an error and changes nothing.

**Traces to:** FR30 (Could), NFR2 (Must)

### US-036 — Remove stock by scanning a barcode

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to remove stock by scanning a product’s SKU barcode, so that items leaving the warehouse are booked out the moment they leave.

**Acceptance Criteria:**

- I scan the barcode and enter the quantity.
- Stock can never go below zero.
- The removal is recorded in the stock movement log.

**Traces to:** FR30 (Could), NFR2 (Must)

### US-037 — Return undamaged or repaired products to stock

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to add a returned product back to stock once it is checked as undamaged or repaired, so that it can be sold again.

**Acceptance Criteria:**

- I can mark a received return as “undamaged” or “repaired”.
- Only then is the quantity added to stock.
- The movement is logged with the reason “return”.

**Traces to:** FR10 (Should)

### US-038 — Keep unsellable returns out of stock

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to mark a returned product as damaged beyond repair, so that it is never added to sellable stock.

**Acceptance Criteria:**

- A product marked “damaged” is not added to stock.
- The condition and reason are stored on the return.

**Traces to:** FR10 (Should)

**Notes / Context:** Complements FR10, which only adds undamaged or repaired returns.

### US-039 — Ensure every product has a unique SKU

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the system to reject a new product whose SKU already exists, so that every product is identified unambiguously by all partners.

**Acceptance Criteria:**

- A SKU is required for every product.
- A duplicate SKU is rejected with a clear message.
- The SKU must match the agreed standard format.

**Traces to:** NFR2 (Must)

**Notes / Context:** The SKU format still has to be agreed with the partners.

### US-040 — See orders close to the dispatch limit

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see which orders are close to the 5-working-day dispatch limit, so that I can ship them before the limit is passed.

**Acceptance Criteria:**

- Orders with one working day or less left are highlighted.
- Orders past the limit are flagged as overdue.
- Weekends are not counted as working days.

**Traces to:** NFR3 (Must)

**Notes / Context:** Whether Dutch public holidays count as working days is not specified.

### US-041 — Add a product listing to the webshop

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to add a product to the webshop with a title and a short summary, so that customers can find and understand it.

**Acceptance Criteria:**

- The title is limited to 50 characters and the summary to 100 characters.
- A character counter is shown and longer text cannot be saved.
- Each listing is linked to a SKU.

**Traces to:** NFR9 (Must), NFR10 (Must), NFR2 (Must)

### US-042 — Upload a product image

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to upload an image for a product, so that customers can see what they are buying.

**Acceptance Criteria:**

- Images of up to 2 MB are accepted.
- A larger image is rejected with a message that states the limit.

**Traces to:** NFR11 (Must)

### US-043 — Define customization options for a product

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to define the size, letter and colour options of a customizable product, so that customers can only choose options PRINTZ can actually make.

**Acceptance Criteria:**

- I can set the available sizes, colours and the maximum number of letters.
- The product is marked as customizable.
- Only these options are offered on the product page.

**Traces to:** FR19 (Must)

**Notes / Context:** Order Custom Product, pre-condition 2 and B1.

### US-044 — List pre-made products

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to list pre-made products that need no customization, so that customers can buy ready-made gifts that ship straight from the warehouse.

**Acceptance Criteria:**

- Pre-made products have no customization step.
- Orders for pre-made products do not create production requests.
- Pre-made products ship from the warehouse via DHL.

**Traces to:** FR57 (Must)

### US-045 — Create purchase orders at the threshold automatically

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a purchase order created automatically when a product’s stock reaches its re-order threshold, so that I do not have to watch stock levels myself.

**Acceptance Criteria:**

- Stock is checked every polling interval.
- The purchase order contains the SKU, quantity and requested date.
- No second purchase order is created for a SKU while one is still open.

**Traces to:** FR7 (Must), NFR4 (Must)

**Notes / Context:** The rule for the re-order quantity is not defined in the requirements; confirm with the client.

### US-046 — Create a purchase order manually

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to create a purchase order by entering a SKU, quantity and requested date, so that I can restock outside the automatic threshold, for example for a large B2B order.

**Acceptance Criteria:**

- SKU, quantity and requested date are all required.
- The SKU must exist and the requested date cannot be in the past.
- The purchase order is sent through the system, not by email.

**Traces to:** FR12 (Must)

**Notes / Context:** Re-Order Stock, A1.

### US-047 — Mark a purchase order as urgent

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to mark a purchase order as urgent, so that Hong Kong Novelty Goods knows to prioritise it during the Christmas rush or for a B2B order.

**Acceptance Criteria:**

- I can tick “urgent” when creating a purchase order.
- The urgent flag is sent with the purchase order.
- The flag is shown in the Hong Kong section.

**Traces to:** FR18 (Could)

**Notes / Context:** Re-Order Stock, A2.

### US-048 — See when a purchase order could not be sent

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a clear error when a purchase order cannot reach the Hong Kong supplier service, so that I can resend it instead of assuming it was received.

**Acceptance Criteria:**

- The error is shown in the Hong Kong section with the purchase order and the reason.
- The purchase order is marked “not sent”.
- I can resend the purchase order.

**Traces to:** FR12 (Must), FR13 (Must)

**Notes / Context:** Re-Order Stock, E3.

### US-049 — View all purchase orders in the Hong Kong section

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a Hong Kong section listing all purchase orders with their status and expected arrival date, so that I always know what stock is on its way.

**Acceptance Criteria:**

- Each purchase order shows its number, SKU, quantity, requested date, status, expected arrival and urgent flag.
- I can sort by expected arrival date.
- No separate interface for the supplier is needed.

**Traces to:** FR13 (Must), NFR12 (Must)

### US-050 — See expected arrival calculated automatically

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the expected arrival date of each purchase order calculated automatically, so that I can plan without doing date calculations.

**Acceptance Criteria:**

- Expected arrival = 2 weeks of transport + any delay reported by the supplier.
- The date is recalculated when the supplier reports a delay.
- The date is shown in CET.

**Traces to:** FR32 (Must), NFR7 (Must)

**Notes / Context:** The Re-Order Stock use case adds 1 day of processing in Hong Kong; FR32 does not. Align these.

### US-051 — Get an alert when an inbound shipment is late

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want an alert when a purchase order passes its expected arrival date without being received, so that I can act before stock runs out.

**Acceptance Criteria:**

- The purchase order is flagged “late”.
- An alert appears on the dashboard and in the Hong Kong section.

**Traces to:** FR11 (Must)

**Notes / Context:** Re-Order Stock, E2.

### US-052 — Email the supplier about late shipments automatically

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want the system to email Hong Kong Novelty Goods automatically when a shipment is late, so that the supplier is chased without me writing emails by hand.

**Acceptance Criteria:**

- An email is sent once when the purchase order becomes late.
- The email contains the purchase order number, SKU, quantity and expected arrival date.
- The sent email is recorded on the purchase order.

**Traces to:** FR16 (Should)

### US-053 — See supplier exceptions in the Hong Kong section

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want supplier exceptions shown on the affected purchase order in the Hong Kong section, so that I know where an order is and what is happening.

**Acceptance Criteria:**

- The exception type, description and time reported are shown.
- Purchase orders with an exception are highlighted.
- The exception stays visible until the supplier resolves it.

**Traces to:** FR17 (Should), FR15 (Must)

**Notes / Context:** Client: “I want to know where that order is and what is happening.”

### US-054 — Get an alert when a shipment is held in customs

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want an alert when an international shipment is held in customs in Hong Kong or the Netherlands, so that I can expect the delay and inform affected customers.

**Acceptance Criteria:**

- The alert states which customs office (Hong Kong or Netherlands) holds the shipment.
- The alert links to the affected purchase order or customer order.

**Traces to:** FR52 (Must)

### US-055 — See international shipments flagged automatically

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want orders from Hong Kong flagged as international automatically, so that I can see at a glance which shipments go through customs.

**Acceptance Criteria:**

- The international flag is set automatically for shipments from Hong Kong.
- The flag is visible in every list where the shipment appears.

**Traces to:** FR1 (Must, raised – not yet validated)

### US-056 — Track production orders at PRINTZ

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see all production orders at PRINTZ with their status and estimated completion date, so that I know when customized products will be ready.

**Acceptance Criteria:**

- Each production order shows its status (Pending, In Production, Completed, Delayed) and estimated completion date.
- B2B production orders are labelled.
- I can filter by status.

**Traces to:** FR36 (Must), FR40 (Must)

**Notes / Context:** Use case diagram: Track Production Orders.

### US-057 — Trace a production order to its customer order

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want each production order linked to its customer order and SKU, so that I can trace any customized product from the customer to PRINTZ and back.

**Acceptance Criteria:**

- A production order shows its customer order number and SKU, with a link to the customer order.
- A customer order shows all of its production orders.

**Traces to:** FR45 (Must)

**Notes / Context:** Order Custom Product, B2.

### US-058 — Get notified when production is completed

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a notification when PRINTZ completes a production order, so that I know the product can be shipped to the customer.

**Acceptance Criteria:**

- A notification appears on the dashboard with the order number.
- The linked customer order shows that production is completed.

**Traces to:** FR37 (Must)

### US-059 — Get notified when a production delay affects delivery

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a notification when a production delay could push an order past its expected delivery date, so that I can warn the customer in time.

**Acceptance Criteria:**

- The notification is triggered when PRINTZ sets “Delayed” or a new completion date later than planned.
- It shows the old and new estimated dates.
- The customer’s delay email (FR21) is triggered.

**Traces to:** FR38 (Must), FR21 (Must)

### US-060 — Get notified when PRINTZ rejects a request

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to be told when PRINTZ rejects a production request, and why, so that I can fix the details quickly.

**Acceptance Criteria:**

- A notification and a task are created with PRINTZ’s reason.
- For B2B orders an email alert is also sent (NFR1).

**Traces to:** FR44 (Must), NFR1 (Must)

### US-061 — Correct and resend a rejected production request

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to correct the customization details of a rejected production request and resend it, so that production can start without the customer placing a new order.

**Acceptance Criteria:**

- I can edit the fields PRINTZ marked as missing or invalid.
- The resent request is linked to the rejected one.
- Nothing is produced until corrected details are sent (Order Custom Product, B6).

**Traces to:** FR44 (Must)

**Notes / Context:** If the correct details must come from the customer, how staff contact them is not yet defined.

### US-062 — Read PRINTZ notes on production orders

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to read the notes PRINTZ adds to a production order, so that I understand production issues without having to call PRINTZ.

**Acceptance Criteria:**

- Notes are shown on the production order with author and time.
- New notes are marked as unread.

**Traces to:** FR41 (Should)

### US-063 — View orders in transit

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a section listing all orders currently in transit with DHL, so that I can see what is on the road.

**Acceptance Criteria:**

- Each order shows its order number, route, current DHL status, expected delivery date and international flag.
- The list updates when DHL sends an update.

**Traces to:** FR53 (Must)

### US-064 — Filter orders in transit by route

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to filter orders in transit by route, so that I can focus on one leg of the chain, such as PRINTZ to customer.

**Acceptance Criteria:**

- I can choose one or more routes.
- Only orders on the selected routes are shown.

**Traces to:** FR54 (Must, raised – not yet validated)

### US-065 — Filter orders in transit by status

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to filter orders in transit by DHL status, so that I can quickly find, for example, every delayed shipment.

**Acceptance Criteria:**

- I can choose one or more statuses.
- The filter can be combined with the route filter.

**Traces to:** FR54 (Must, raised – not yet validated)

### US-066 — Show only international shipments

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to show only international shipments in the DHL section, so that I can keep an eye on shipments that pass through customs.

**Acceptance Criteria:**

- A single filter shows only orders flagged as international.
- The filter can be combined with the route and status filters.

**Traces to:** FR54 (Must, raised – not yet validated), FR1 (Must, raised – not yet validated)

### US-067 — See DHL’s latest status on each order

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want DHL’s latest status and any reported issue shown on each order, so that I can answer customer questions without contacting DHL.

**Acceptance Criteria:**

- The latest status and its time are shown on the order.
- Reported issues are highlighted.
- Earlier statuses are kept in the status history.

**Traces to:** FR51 (Must), NFR5 (Must)

### US-068 — Update delivery dates with DHL delays

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a delay reported by DHL added to the order’s expected delivery time automatically, so that the dates in the Control Tower and the webshop are always current.

**Acceptance Criteria:**

- New expected delivery = previous expected delivery + DHL’s estimated delay.
- The new date is shown in the Control Tower and in the customer’s “My Orders”.
- The customer’s delay email (FR21) is triggered.

**Traces to:** FR55 (Must, raised – not yet validated)

### US-069 — Follow up on customer problem reports

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want a follow-up task for every customer report of a damaged, missing or incomplete order, so that every complaint gets handled.

**Acceptance Criteria:**

- The task contains the report reference, problem type, affected SKUs, quantities and description.
- Reports from B2B customers are listed first.
- The order keeps the status “Issue Reported” until the task is closed.

**Traces to:** FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, A1.5, B5 and B6.

### US-070 — Register incoming returns

**Role:** GIFTS-4-U Staff

**User Story:** As GIFTS-4-U Staff, I want to see incoming returns and register them when they arrive, so that I can inspect them and decide whether they go back into stock.

**Acceptance Criteria:**

- Each return is linked to its order and SKUs.
- A return moves through the statuses Requested, In transit and Received.
- On arrival I record the condition: undamaged, repaired or damaged.

**Traces to:** FR28 (Must), FR10 (Should)

## 3. Customer (Business & Individual)

25 user stories (US-071 – US-095)

### US-071 — Log in to my webshop account

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to log in to my webshop account, so that I can place orders and follow them.

**Acceptance Criteria:**

- I log in with my username and password.
- Wrong credentials show an error.
- My account type (Consumer or Business) is applied to every order I place.

**Traces to:** FR22 (Must)

**Notes / Context:** Pre-condition of both customer use cases.

### US-072 — Browse pre-made products

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to browse pre-made gifts, so that I can buy a ready-made gift without designing it myself.

**Acceptance Criteria:**

- Pre-made products are listed with title, summary, image and price.
- Pre-made products are labelled as such.
- I can open a product to see its details.

**Traces to:** FR57 (Must)

### US-073 — See the stock level of a product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to see how many of a product are in stock, so that I know whether it is available before I order.

**Acceptance Criteria:**

- The number in stock is shown on the product page.
- Products low on stock show “Low stock”; products with none show “Out of stock”.
- The stock shown is refreshed every polling interval.

**Traces to:** FR24 (Must), NFR4 (Must)

### US-074 — See the delivery time of a product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to see the estimated delivery time of each product before I order, so that I know whether my gift will arrive in time.

**Acceptance Criteria:**

- The estimated delivery time is shown on every product page.
- The time reflects stock levels, supplier delays and busy periods.
- Dates are shown in CET.

**Traces to:** FR23 (Must), NFR7 (Must)

### US-075 — Order an out-of-stock product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to still order a product that is out of stock, while seeing the longer delivery time, so that I can decide whether waiting is worth it.

**Acceptance Criteria:**

- I can add an out-of-stock product to the cart.
- The longer delivery time, including restocking, is shown before I check out.
- My order confirmation shows the extended delivery time.

**Traces to:** FR23 (Must), FR24 (Must)

**Notes / Context:** Order Custom Product, A2 and B5.

### US-076 — Choose the size of a customized product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to choose the size of a customizable product, so that the gift has the size I need.

**Acceptance Criteria:**

- Only the sizes offered for that product can be chosen.
- A size must be chosen before the product can be added to the cart.

**Traces to:** FR19 (Must)

### US-077 — Enter the letters for a customized product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to enter the letters or text to be printed on my product, so that the gift is personal.

**Acceptance Criteria:**

- The maximum number of letters for the product is shown while I type.
- Text longer than the maximum cannot be entered.
- Letters are required before the product can be added to the cart.

**Traces to:** FR19 (Must)

### US-078 — Choose the colours of a customized product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to choose the colours of my customized product, so that the gift matches the recipient’s taste.

**Acceptance Criteria:**

- Only the colours offered for that product can be chosen.
- Colours must be chosen before the product can be added to the cart.

**Traces to:** FR19 (Must)

### US-079 — Add my own image to a customized product

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to add my own image to a customized product, so that I can print a photo or logo on the gift.

**Acceptance Criteria:**

- I can upload an image in a common format (JPG or PNG).
- The image is shown with the product in my cart and order summary.
- The image is sent to PRINTZ with the other customization details.

**Traces to:** FR35 (Must)

**Notes / Context:** FR35 and the ERD (WEBSHOP_ORDER_PART_IMAGE) include images, but FR19 only names size, letters and colours. Confirm scope and upload limits with the client.

### US-080 — Be told when my customization is incomplete

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to be told which customization fields I still need to fill in, so that I do not order a product that cannot be made.

**Acceptance Criteria:**

- Missing fields are highlighted and the product is not added to the cart.
- The values I already entered are kept.

**Traces to:** FR19 (Must)

**Notes / Context:** Order Custom Product, E1 and B1.

### US-081 — Order several products at once

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to add several products to one order, so that I can buy everything I need in a single checkout.

**Acceptance Criteria:**

- The cart can hold several products.
- Customized and pre-made products can be combined in one order.
- Each product has its own quantity and customization.

**Traces to:** FR27 (Must)

**Notes / Context:** Order Custom Product, A1.

### US-082 — Check my order before placing it

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want an order summary showing every product, its customization and quantity, plus the delivery time of the whole order, so that I can check everything before I place the order.

**Acceptance Criteria:**

- Each product is listed with its customization details and quantity.
- The delivery time of the order is the latest delivery time of its products.
- I can go back and change the order before placing it.

**Traces to:** FR27 (Must), FR23 (Must)

**Notes / Context:** Order Custom Product, step 6.

### US-083 — Receive an order confirmation

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want an order confirmation with my order number and estimated delivery time, so that I have proof of my order and know when to expect it.

**Acceptance Criteria:**

- The confirmation is shown immediately after I place the order.
- It contains a unique order number and the estimated delivery time.
- The order appears in “My Orders”.

**Traces to:** FR20 (Must)

**Notes / Context:** Order Custom Product, step 11.

### US-084 — View my orders

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want a list of my orders with their current status, so that I can follow all my orders in one place.

**Acceptance Criteria:**

- “My Orders” lists the order number, order date, status and expected delivery date.
- The newest order is shown first.

**Traces to:** FR20 (Must)

**Notes / Context:** Confirm Order Received / Report, steps 1–2.

### US-085 — See the expected delivery date of my order

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to see the expected delivery date of an order I placed, so that I can make sure someone is there to receive it.

**Acceptance Criteria:**

- The expected delivery date is shown in the order details.
- The date is updated when a delay is reported.
- The date is shown in CET.

**Traces to:** FR20 (Must), FR55 (Must, raised – not yet validated), NFR7 (Must)

### US-086 — Follow my order’s delivery status

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to see DHL’s latest delivery status for my order, so that I know where my order is.

**Acceptance Criteria:**

- The latest DHL status and its time are shown in the order details.
- The status changes as DHL sends updates.

**Traces to:** FR51 (Must)

### US-087 — Receive an email when my order is delayed

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want an email when my order is delayed, with the reason and the new expected delivery date, so that I am not left guessing.

**Acceptance Criteria:**

- The email is sent automatically when a delivery, production or stock delay changes my delivery date.
- The email states the reason and the new expected delivery date.
- Only one email is sent per change of date.

**Traces to:** FR21 (Must)

**Notes / Context:** Journey map: staff sometimes forget to tell customers; this removes the manual step.

### US-088 — Confirm that my order arrived correctly

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to confirm in the webshop that my order arrived complete and undamaged, so that GIFTS-4-U knows the order is done.

**Acceptance Criteria:**

- “Confirm Order Received” is available on shipped orders.
- After I confirm, the order status becomes “Received” and the confirmation is stored with a CET timestamp.
- An order can only be confirmed once.

**Traces to:** FR25 (Must), NFR7 (Must)

**Notes / Context:** Confirm Order Received / Report, basic path and B2.

### US-089 — Report damaged products

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to report that products in my order arrived damaged, so that GIFTS-4-U can put it right.

**Acceptance Criteria:**

- I select the damaged products by SKU and enter how many are damaged.
- A description of the damage is required.
- After submitting, I receive a report reference number.

**Traces to:** FR26 (Must), NFR2 (Must)

**Notes / Context:** Confirm Order Received / Report, A1, B4 and E2.

### US-090 — Report an order that did not arrive

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to report that my order did not arrive, so that GIFTS-4-U can trace it with DHL.

**Acceptance Criteria:**

- The report is only possible once DHL has marked the order as delivered or the expected delivery date has passed.
- The last DHL status is shown before I confirm the report.
- I can add a comment.

**Traces to:** FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, A2, B3 and E1.

### US-091 — Report a wrong quantity

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to report that my order arrived with the wrong quantity, so that GIFTS-4-U can send what is missing.

**Acceptance Criteria:**

- I enter the quantity actually received for each affected product.
- The difference with the ordered quantity is stored in the report.
- I receive a report reference number.

**Traces to:** FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, A3.

### US-092 — Keep my input when saving fails

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want my entered details kept if my confirmation or report cannot be saved, so that I do not have to type everything again.

**Acceptance Criteria:**

- An error message asks me to try again later.
- The details I entered stay filled in.
- The order status is not changed.

**Traces to:** FR25 (Must), FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, E3.

### US-093 — Return an order

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to request a return for an order, so that I can send back products I do not want.

**Acceptance Criteria:**

- I choose the order, the products and the quantities to return, and give a reason.
- I receive a return reference and instructions.
- Problems found after confirming receipt are handled as a return (Confirm Order Received / Report, B2).

**Traces to:** FR28 (Must)

**Notes / Context:** Return window and conditions are not specified; confirm with the client.

### US-094 — Order from my phone

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want to customize and order products on my phone, so that I can shop wherever I am.

**Acceptance Criteria:**

- Every step from product page to order confirmation works on a phone-sized screen.
- No horizontal scrolling is needed.

**Traces to:** NFR14 (Must)

**Notes / Context:** UVC-Requirements NFR14 only names the Control Tower; the Order Custom Product use case extends it to the webshop. Confirm.

### US-095 — Use the webshop in English

**Role:** Customer (Business & Individual)

**User Story:** As a Customer (Business & Individual), I want the webshop to be in English by default, so that customers of any nationality can use it.

**Acceptance Criteria:**

- All webshop pages, emails and messages are in English.

**Traces to:** NFR8 (Must)

## 4. Customer (Business)

4 user stories (US-096 – US-099)

### US-096 — Register as a business

**Role:** Customer (Business)

**User Story:** As a Customer (Business), I want to register my account as a Business, so that my orders are treated as B2B and get priority.

**Acceptance Criteria:**

- I can choose the account type “Business” when registering.
- Every order from a Business account is marked as B2B.

**Traces to:** FR22 (Must)

**Notes / Context:** Order Custom Product, B4.

### US-097 — Have my orders produced first

**Role:** Customer (Business)

**User Story:** As a Customer (Business), I want my customized orders produced ahead of consumer orders, so that large company orders arrive on time.

**Acceptance Criteria:**

- My production requests are placed ahead of all B2C requests.
- Requests from businesses that ordered earlier stay ahead of mine.

**Traces to:** FR48 (Must)

**Notes / Context:** Order Custom Product, A3 and B3.

### US-098 — Have my problem reports handled first

**Role:** Customer (Business)

**User Story:** As a Customer (Business), I want my problem reports handled with priority, so that issues with large orders are solved quickly.

**Acceptance Criteria:**

- Reports from a Business account are marked as priority.
- An email alert is sent to GIFTS-4-U immediately (NFR1).
- Priority reports are handled before reports from consumers.

**Traces to:** FR26 (Must), NFR1 (Must)

**Notes / Context:** Confirm Order Received / Report, A4 and B5.

### US-099 — Let colleagues confirm or report on our orders

**Role:** Customer (Business)

**User Story:** As a Customer (Business), I want any user of our Business account to be able to confirm or report on our orders, so that whoever receives the goods can respond.

**Acceptance Criteria:**

- Users of the same Business account see all of the account’s orders.
- Each of them can confirm receipt or report a problem.

**Traces to:** FR25 (Must), FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, B1. The ERD has one user per WEBSHOP_CUSTOMER, so multi-user business accounts need a data model change.

## 5. Customer (Individual)

2 user stories (US-100 – US-101)

### US-100 — Register as a consumer

**Role:** Customer (Individual)

**User Story:** As a Customer (Individual), I want to register my account as a Consumer, so that I can order gifts for myself and others.

**Acceptance Criteria:**

- I can choose the account type “Consumer” when registering.
- Every order from a Consumer account is marked as B2C.

**Traces to:** FR22 (Must)

### US-101 — Keep my orders private

**Role:** Customer (Individual)

**User Story:** As a Customer (Individual), I want only my own account to be able to see and act on my orders, so that my personal order details stay private.

**Acceptance Criteria:**

- Other accounts cannot see my orders.
- Only I can confirm receipt of or report a problem with my orders.

**Traces to:** FR25 (Must), FR26 (Must)

**Notes / Context:** Confirm Order Received / Report, B1.

## 6. PRINTZ

16 user stories (US-102 – US-117)

### US-102 — Receive production requests automatically

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to receive a production request automatically when a customized order is placed, so that we no longer depend on emails or spreadsheets.

**Acceptance Criteria:**

- A request arrives as soon as the order is placed.
- Each customized product in an order gets its own request.
- Each request contains the order number and SKU.

**Traces to:** FR34 (Must)

**Notes / Context:** Order Custom Product, B2. Journey map insight: an automatic flow between partners replaces spreadsheets and email.

### US-103 — See all customization details

**Role:** PRINTZ

**User Story:** As PRINTZ, I want all customization details (text, colours and size) on each production request, so that we make the product exactly as ordered.

**Acceptance Criteria:**

- Text is shown exactly as entered, including capitals and special characters.
- Colours and size are shown with their names as offered in the webshop.

**Traces to:** FR35 (Must)

### US-104 — Download customer images

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to view and download images supplied with a production request, so that we can print them at the right quality.

**Acceptance Criteria:**

- Images can be viewed and downloaded at their original resolution.
- Each image is linked to the product it belongs to.

**Traces to:** FR35 (Must)

**Notes / Context:** Depends on the scope of customer image uploads (see the customer story “Add my own image to a customized product”).

### US-105 — See the product specification and blank SKU

**Role:** PRINTZ

**User Story:** As PRINTZ, I want the product specification and the SKU of the blank item on each production request, so that we use the correct blank item.

**Acceptance Criteria:**

- Each request shows the blank item’s SKU, product name and specification.

**Traces to:** FR35 (Must), NFR2 (Must)

### US-106 — View our active production orders

**Role:** PRINTZ

**User Story:** As PRINTZ, I want a list of all active production orders assigned to us, so that we can plan our work.

**Acceptance Criteria:**

- All production orders that are not completed are listed.
- Each shows its status, estimated completion date and B2B label.
- Completed orders are hidden by default.

**Traces to:** FR39 (Must, raised – not yet validated)

### US-107 — Work through the queue in priority order

**Role:** PRINTZ

**User Story:** As PRINTZ, I want the production queue ordered with B2B requests first, then by arrival, so that we always work on the right order next.

**Acceptance Criteria:**

- B2B requests are placed before all B2C requests.
- Requests of the same type are ordered by arrival time.

**Traces to:** FR48 (Must)

**Notes / Context:** Order Custom Product, B3.

### US-108 — Accept a production request

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to accept a production request after checking its details, so that GIFTS-4-U knows we will produce it.

**Acceptance Criteria:**

- I can accept a request; it then stays “Pending” in the queue until production starts.
- The acceptance is stored with a timestamp.

**Traces to:** FR36 (Must), NFR5 (Must)

**Notes / Context:** Order Custom Product, step 12.

### US-109 — Reject an incomplete or invalid request

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to reject a production request with missing or invalid customization details, so that we do not produce something that cannot be made correctly.

**Acceptance Criteria:**

- A reason is required, naming the missing or invalid fields.
- GIFTS-4-U is informed automatically (FR44).
- The request is not produced until corrected details arrive.

**Traces to:** FR43 (Must), FR44 (Must)

**Notes / Context:** Order Custom Product, B6.

### US-110 — Start production

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to set a production order to “In Production”, so that GIFTS-4-U can see that work has started.

**Acceptance Criteria:**

- Only a Pending order can be set to In Production.
- The change is stored with a timestamp.

**Traces to:** FR36 (Must), NFR5 (Must)

### US-111 — Mark production as completed

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to set a production order to “Completed”, so that GIFTS-4-U knows the product is finished.

**Acceptance Criteria:**

- Only an order In Production or Delayed can be set to Completed.
- GIFTS-4-U is notified automatically (FR37).

**Traces to:** FR36 (Must), FR37 (Must)

### US-112 — Report a production delay

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to set a production order to “Delayed” with a reason and a new estimated completion date, so that GIFTS-4-U can inform the customer in time.

**Acceptance Criteria:**

- A reason and a new estimated completion date are required.
- GIFTS-4-U is notified when the delay may affect the delivery date (FR38).

**Traces to:** FR36 (Must), FR38 (Must)

### US-113 — Enter an estimated completion date

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to enter and update the estimated completion date of each production order, so that GIFTS-4-U can give customers a realistic delivery date.

**Acceptance Criteria:**

- Every accepted production order has an estimated completion date.
- The date cannot be in the past.
- Each change is stored in the status history.

**Traces to:** FR40 (Must), NFR5 (Must)

### US-114 — Add notes to a production order

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to add comments or notes to a production order, so that GIFTS-4-U knows about details that do not fit a status.

**Acceptance Criteria:**

- A note is free text and is stored with author and time.
- Notes are visible to GIFTS-4-U staff.

**Traces to:** FR41 (Should)

### US-115 — Mark a product ready for shipment

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to mark a customized product as ready for shipment, so that DHL can collect it and deliver it to the customer.

**Acceptance Criteria:**

- A product can only be marked ready once its production order is Completed.
- DHL receives a pickup notice for the order.

**Traces to:** FR46 (Must)

### US-116 — Know when blank items are on their way

**Role:** PRINTZ

**User Story:** As PRINTZ, I want to see whether the blank items for a production order have been sent from the warehouse, so that we know when we can start production.

**Acceptance Criteria:**

- Each production order shows the blank item status: Reserved, Waiting for restock or Sent to PRINTZ.
- The date the items were sent is shown.

**Traces to:** FR8 (Must), FR45 (Must)

**Notes / Context:** Order Custom Product, A2.3: blank items are shipped once they are back in stock.

### US-117 — See what was corrected in a resent request

**Role:** PRINTZ

**User Story:** As PRINTZ, I want a resent production request linked to the request we rejected, so that we can see what was corrected before accepting it.

**Acceptance Criteria:**

- The resent request links to the rejected one.
- The corrected fields are highlighted.

**Traces to:** FR43 (Must), FR44 (Must)

**Notes / Context:** Order Custom Product, B6.

## 7. Hong Kong Novelty Goods Inc.

13 user stories (US-118 – US-130)

### US-118 — Receive purchase orders digitally

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to receive GIFTS-4-U’s purchase orders through the system, with SKU, quantity and requested date, so that we no longer have to process orders from emails.

**Acceptance Criteria:**

- Each purchase order contains a purchase order number, SKU, quantity and requested date.
- A purchase order arrives as soon as GIFTS-4-U creates it.

**Traces to:** FR12 (Must), NFR2 (Must)

**Notes / Context:** Replaces email.

### US-119 — Answer that we can fulfil a purchase order

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to answer a purchase order with “can fulfil”, so that GIFTS-4-U knows the stock is coming.

**Acceptance Criteria:**

- I can answer “can fulfil” on any new purchase order.
- The answer is shown on the purchase order in GIFTS-4-U’s Hong Kong section.
- GIFTS-4-U’s system calculates the expected arrival date.

**Traces to:** FR31 (Must)

**Notes / Context:** Re-Order Stock, step 4.

### US-120 — Answer that we cannot fulfil a purchase order

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to answer a purchase order with “cannot fulfil” and a delay message, so that GIFTS-4-U knows when to expect the stock instead.

**Acceptance Criteria:**

- A “cannot fulfil” answer requires a delay message with the expected delay in days.
- The delay is added to the expected arrival date (FR32).

**Traces to:** FR31 (Must), FR32 (Must)

**Notes / Context:** Re-Order Stock, A3.

### US-121 — See which purchase orders are urgent

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want urgent purchase orders clearly flagged, so that we can prioritise them during busy periods.

**Acceptance Criteria:**

- Urgent purchase orders carry a visible urgent flag.
- Urgent purchase orders are listed first.

**Traces to:** FR18 (Could)

### US-122 — Mark a purchase order as shipped

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to update a purchase order’s status to “shipped”, so that GIFTS-4-U knows the stock is on its way.

**Acceptance Criteria:**

- “Shipped” can only be set for the complete ordered quantity; partial shipments are not possible.
- The status change is stored with a timestamp.

**Traces to:** FR14 (Must), FR33 (Must)

**Notes / Context:** Client: all or nothing, no partial shipments.

### US-123 — Mark a shipment as in customs

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to update a purchase order’s status to “in customs (Hong Kong)” or “in customs (Netherlands)”, so that GIFTS-4-U can see where the shipment is.

**Acceptance Criteria:**

- I can choose which customs office the shipment is at.
- The status change is stored with a timestamp.

**Traces to:** FR14 (Must)

**Notes / Context:** Client: supplier statuses are automated (“Shipped”, “In Customs”).

### US-124 — Report that we are out of stock

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to report an “out of stock” exception on a purchase order, so that GIFTS-4-U can plan around the shortage.

**Acceptance Criteria:**

- I select the exception type “out of stock” and can add a description.
- I can give an expected delay in days, which is added to the expected arrival date.

**Traces to:** FR15 (Must), FR32 (Must)

**Notes / Context:** Scenario A: SKU shortage.

### US-125 — Report that we cannot fulfil a confirmed order

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to report an “unable to fulfil” exception on a purchase order I already confirmed, for example a very large order during the Christmas rush, so that GIFTS-4-U is warned as early as possible.

**Acceptance Criteria:**

- I select the exception type “unable to fulfil” and add a description.
- The exception appears on the purchase order in the Hong Kong section.

**Traces to:** FR15 (Must)

**Notes / Context:** Different from the “cannot fulfil” answer: this exception comes after the purchase order was confirmed.

### US-126 — Report a shipment stuck in customs

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to report a “stuck in customs” exception, so that GIFTS-4-U can expect the delay.

**Acceptance Criteria:**

- I select the exception type “stuck in customs” and say which customs office.
- GIFTS-4-U staff receive a customs alert (FR52).

**Traces to:** FR15 (Must), FR52 (Must)

### US-127 — Report an incident

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to report an incident, such as a fire, that affects a purchase order, so that GIFTS-4-U knows about serious disruptions immediately.

**Acceptance Criteria:**

- I select the exception type “incident” and add a description.
- The exception is highlighted in the Hong Kong section.

**Traces to:** FR15 (Must)

### US-128 — Report a delay on an existing purchase order

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to report a delay in days on a purchase order, so that the expected arrival date stays correct.

**Acceptance Criteria:**

- I enter the delay in days and a reason.
- The expected arrival date is recalculated (FR32).

**Traces to:** FR32 (Must)

**Notes / Context:** Re-Order Stock, E1.3.

### US-129 — Resolve an exception

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want to mark an exception as resolved, so that GIFTS-4-U knows the purchase order is back on track.

**Acceptance Criteria:**

- I can resolve an exception with a short note.
- The resolved exception is no longer highlighted but stays in the history.

**Traces to:** FR15 (Must), NFR5 (Must)

**Notes / Context:** Re-Order Stock, E1.4.

### US-130 — See dates labelled as CET

**Role:** Hong Kong Novelty Goods Inc.

**User Story:** As Hong Kong Novelty Goods Inc., I want requested and expected dates on purchase orders labelled as CET, so that we convert them correctly to Hong Kong time.

**Acceptance Criteria:**

- Every date on a purchase order shows “CET”.

**Traces to:** NFR7 (Must)

**Notes / Context:** Re-Order Stock, NFR7: CET applies even though the supplier is in Hong Kong.

## 8. DHL

13 user stories (US-131 – US-143)

### US-131 — Receive the route, order number and SKUs

**Role:** DHL

**User Story:** As DHL, I want to receive the route, order number and SKUs of each order to transport, so that we can plan pickup and delivery.

**Acceptance Criteria:**

- The details are sent automatically when an order is ready to ship.
- They contain the route, order number and SKUs.

**Traces to:** FR50 (Must)

### US-132 — Know whether a shipment is fragile

**Role:** DHL

**User Story:** As DHL, I want every shipment marked as fragile or non-fragile, so that we handle it correctly.

**Acceptance Criteria:**

- Every shipment carries a fragile or non-fragile flag.

**Traces to:** FR50 (Must)

### US-133 — Know the expected delivery time

**Role:** DHL

**User Story:** As DHL, I want the expected delivery time included in the shipment details, so that we know the deadline we are working to.

**Acceptance Criteria:**

- Each shipment includes its expected delivery date.
- We receive an update when GIFTS-4-U changes this date.

**Traces to:** FR50 (Must)

### US-134 — Know when a shipment is international

**Role:** DHL

**User Story:** As DHL, I want shipments from Hong Kong marked as international in the shipment details, so that we can prepare the customs handling.

**Acceptance Criteria:**

- The international flag is part of the shipment details.

**Traces to:** FR1 (Must, raised – not yet validated)

### US-135 — Send real-time status updates

**Role:** DHL

**User Story:** As DHL, I want to send status updates for orders in transit to the GIFTS-4-U system, so that GIFTS-4-U and its customers can see where an order is without calling us.

**Acceptance Criteria:**

- Each update contains the order number, status and time.
- An update for an unknown order number is rejected with an error.

**Traces to:** FR51 (Must)

### US-136 — Report a delivery issue with an estimated delay

**Role:** DHL

**User Story:** As DHL, I want to report an issue with an order in transit, with an estimated delay, so that the expected delivery date can be updated straight away.

**Acceptance Criteria:**

- An issue report contains a description and the estimated delay.
- The delay is added to the expected delivery time (FR55).

**Traces to:** FR51 (Must), FR55 (Must, raised – not yet validated)

### US-137 — Mark an order as delivered

**Role:** DHL

**User Story:** As DHL, I want to mark an order as delivered, so that the customer can confirm receipt and GIFTS-4-U knows the delivery is done.

**Acceptance Criteria:**

- The delivered status is stored with its time.
- After delivery the customer can confirm receipt or report a problem.

**Traces to:** FR51 (Must)

**Notes / Context:** Confirm Order Received / Report, B3.

### US-138 — Report a shipment held in customs

**Role:** DHL

**User Story:** As DHL, I want to report when an international shipment is held in customs in Hong Kong or the Netherlands, so that GIFTS-4-U can warn affected customers early.

**Acceptance Criteria:**

- I state which customs office holds the shipment.
- I can add the expected release date if known.

**Traces to:** FR52 (Must)

### US-139 — Collect inbound shipments from Dutch customs

**Role:** DHL

**User Story:** As DHL, I want to receive pickup details for inbound shipments that have cleared Dutch customs, so that we can deliver them to the warehouse in Middelburg.

**Acceptance Criteria:**

- The details contain the purchase order number, quantity, pickup location and warehouse address.

**Traces to:** FR11 (Must), FR14 (Must)

**Notes / Context:** Context: DHL transports from Dutch customs to the GIFTS-4-U warehouse.

### US-140 — Confirm delivery at the warehouse

**Role:** DHL

**User Story:** As DHL, I want to confirm that an inbound shipment was delivered to the warehouse in Middelburg, so that the purchase order can be closed and the stock updated.

**Acceptance Criteria:**

- My confirmation sets the purchase order to “received at warehouse”.
- The confirmation is stored with a timestamp.

**Traces to:** FR14 (Must)

**Notes / Context:** The Re-Order Stock use case has Hong Kong Novelty Goods set this status after DHL delivers. Since DHL makes the delivery, this story proposes DHL confirms it. Align the use case.

### US-141 — Receive transport requests for blank items to PRINTZ

**Role:** DHL

**User Story:** As DHL, I want to receive a transport request when blank items must go from the warehouse to PRINTZ, so that PRINTZ gets the items it needs on time.

**Acceptance Criteria:**

- The request contains the production order number, SKUs, quantities, pickup and delivery address.

**Traces to:** FR50 (Must), FR45 (Must)

**Notes / Context:** Supply chain: Warehouse → DHL → PRINTZ.

### US-142 — Get a pickup notice when a product is ready at PRINTZ

**Role:** DHL

**User Story:** As DHL, I want to be notified when a customized product is ready for shipment at PRINTZ, so that we can collect it and deliver it to the customer.

**Acceptance Criteria:**

- The notice is sent when PRINTZ marks the product ready for shipment.
- It contains the order number and the customer’s delivery address.

**Traces to:** FR46 (Must), FR50 (Must)

### US-143 — Receive pickup details for returns

**Role:** DHL

**User Story:** As DHL, I want to receive the details of a customer return to collect, so that we can bring it back to the warehouse.

**Acceptance Criteria:**

- The details contain the return reference, order number, pickup address and SKUs.

**Traces to:** FR28 (Must)

**Notes / Context:** Use case diagram: DHL is linked to Return Order.

## Appendix A. Requirement traceability

Each requirement in UVC-Requirements.md with the user stories that cover it.

| Req.  | Priority | Requirement                                                                                                                                                                           | User stories                                                                   |
|-------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| FR1   | Must     | The system shall automatically flag orders from Hong Kong as international.                                                                                                           | US-055, US-066, US-134                                                         |
| FR2   | Must     | The system shall show a live overview of all open orders grouped by status.                                                                                                           | US-017, US-018                                                                 |
| FR3   | Must     | The system shall alert the Control Tower when a DHL delivery is delayed.                                                                                                              | US-025                                                                         |
| FR4   | Must     | The system shall automatically add a task to the Control Tower's task list when a delivery is delayed.                                                                                | US-022, US-024                                                                 |
| FR5   | Must     | The system shall automatically add a task to the Control Tower's task list when there is not enough stock to complete an order.                                                       | US-022, US-026, US-027                                                         |
| FR6   | Must     | The system shall allow the Director SCM to set a reorder threshold for each product.                                                                                                  | US-001, US-002, US-029                                                         |
| FR7   | Must     | The system shall automatically reorder a product when it reaches its reorder threshold.                                                                                               | US-045                                                                         |
| FR8   | Must     | The system shall track and show every movement of stock into and out of the warehouse.                                                                                                | US-029, US-030, US-031, US-032, US-033, US-034, US-116                         |
| FR9   | Must     | The system shall automatically calculate statistics on recent orders, including dead stock and sales trends.                                                                          | US-003, US-004                                                                 |
| FR10  | Should   | The system shall add returned products that are undamaged or repaired back to the warehouse stock.                                                                                    | US-037, US-038, US-070                                                         |
| FR11  | Must     | The system shall track inbound shipments from Hong Kong Novelty Goods and alert when one is late.                                                                                     | US-051, US-139                                                                 |
| FR12  | Must     | The system shall send each reorder as a purchase order to Hong Kong Novelty Goods, with SKU, quantity and requested date.                                                             | US-046, US-048, US-118                                                         |
| FR13  | Must     | The Control Tower shall show a Hong Kong section with all purchase orders, their status and expected arrival date.                                                                    | US-048, US-049                                                                 |
| FR14  | Must     | The system shall record each purchase order's status as one of: ordered, shipped, in customs (Hong Kong), in customs (Netherlands), received at warehouse.                            | US-031, US-122, US-123, US-139, US-140                                         |
| FR15  | Must     | The Hong Kong service shall report an exception: out of stock, unable to fulfil (e.g. a very large order during the Christmas rush), stuck in customs, or an incident such as a fire. | US-053, US-124, US-125, US-126, US-127, US-129                                 |
| FR16  | Should   | The system shall email Hong Kong Novelty Goods when a shipment is late.                                                                                                               | US-052                                                                         |
| FR17  | Should   | The Control Tower shall show supplier exceptions in the Hong Kong section.                                                                                                            | US-053                                                                         |
| FR18  | Could    | The system shall allow a purchase order to be marked as urgent.                                                                                                                       | US-047, US-121                                                                 |
| FR19  | Must     | The system shall allow customers to order customizable products (size, letters, colours).                                                                                             | US-043, US-076, US-077, US-078, US-080                                         |
| FR20  | Must     | The system shall allow customers to view the delivery time of their order.                                                                                                            | US-083, US-084, US-085                                                         |
| FR21  | Must     | The system shall automatically email the customer when their order is delayed, with the reason and the new expected delivery date.                                                    | US-009, US-059, US-087                                                         |
| FR22  | Must     | The system shall allow customers to register as a Consumer or a Business.                                                                                                             | US-020, US-071, US-096, US-100                                                 |
| FR23  | Must     | The system shall show a delivery time for each product in the webshop, based on stock levels, supplier delays and busy periods.                                                       | US-007, US-008, US-074, US-075, US-082                                         |
| FR24  | Must     | The system shall show the warehouse stock level for each product in the webshop.                                                                                                      | US-027, US-073, US-075                                                         |
| FR25  | Must     | The system shall allow customers to confirm in the webshop that their order arrived correctly.                                                                                        | US-088, US-092, US-099, US-101                                                 |
| FR26  | Must     | The system shall allow customers to report in the webshop that their order did not arrive, was damaged, or had the wrong quantity.                                                    | US-069, US-089, US-090, US-091, US-092, US-098, US-099, US-101                 |
| FR27  | Must     | The system shall allow multiple products in one order.                                                                                                                                | US-081, US-082                                                                 |
| FR28  | Must     | The system shall allow customers to return orders.                                                                                                                                    | US-070, US-093, US-143                                                         |
| FR29  | Could    | The system shall reorder stock early based on predictions from sales statistics.                                                                                                      | US-005                                                                         |
| FR30  | Could    | The system shall allow staff to add or remove stock by scanning SKU barcodes.                                                                                                         | US-035, US-036                                                                 |
| FR31  | Must     | The Hong Kong service shall answer each purchase order with "can fulfil" or "cannot fulfil", and send a delay message when it cannot.                                                 | US-119, US-120                                                                 |
| FR32  | Must     | The system shall calculate a purchase order's expected arrival as 2 weeks' transport plus any delay reported by the supplier.                                                         | US-050, US-120, US-124, US-128                                                 |
| FR33  | Must     | Hong Kong Novelty Goods shall ship a purchase order complete or not at all.                                                                                                           | US-122                                                                         |
| FR34  | Must     | The system shall automatically send a production request to PRINTZ when a customized order is placed.                                                                                 | US-102                                                                         |
| FR35  | Must     | The system shall provide PRINTZ employees with all customization details, including text, images, colors, and product specifications.                                                 | US-079, US-103, US-104, US-105                                                 |
| FR36  | Must     | The system shall allow PRINTZ employees to update the production status of an order (Pending, In Production, Completed, Delayed).                                                     | US-056, US-108, US-110, US-111, US-112                                         |
| FR37  | Must     | The system shall notify GIFTS-4-U when a production order has been completed.                                                                                                         | US-058, US-111                                                                 |
| FR38  | Must     | The system shall notify GIFTS-4-U when a production delay may affect the expected delivery date.                                                                                      | US-059, US-112                                                                 |
| FR39  | Must     | The system shall display all active production orders assigned to PRINTZ.                                                                                                             | US-106                                                                         |
| FR40  | Must     | The system shall record the estimated completion date of each production order.                                                                                                       | US-056, US-113                                                                 |
| FR41  | Should   | The system shall allow PRINTZ employees to attach comments or notes to production orders.                                                                                             | US-062, US-114                                                                 |
| FR43  | Must     | The system shall allow PRINTZ to reject production requests that contain missing or invalid customization information.                                                                | US-109, US-117                                                                 |
| FR44  | Must     | The system shall automatically inform GIFTS-4-U when a production request is rejected.                                                                                                | US-060, US-061, US-109, US-117                                                 |
| FR45  | Must     | The system shall link each production order to its customer order and SKU.                                                                                                            | US-033, US-057, US-116, US-141                                                 |
| FR46  | Must     | The system shall allow PRINTZ employees to mark customized products as ready for shipment.                                                                                            | US-115, US-142                                                                 |
| FR47  | Should   | The system shall generate production reports showing pending, delayed and completed orders.                                                                                           | US-006                                                                         |
| FR48  | Must     | The system shall give B2B production orders priority over B2C orders.                                                                                                                 | US-097, US-107                                                                 |
| FR50  | Must     | The system shall send DHL the details of each order: route, order number, SKUs, expected delivery time, and fragile or non-fragile.                                                   | US-131, US-132, US-133, US-141, US-142                                         |
| FR51  | Must     | The system shall receive real-time status updates and issues for orders in transit.                                                                                                   | US-067, US-086, US-135, US-136, US-137                                         |
| FR52  | Must     | The system shall alert when an international shipment is held in customs (Hong Kong) or customs (Netherlands).                                                                        | US-054, US-126, US-138                                                         |
| FR53  | Must     | The Control Tower shall show a section for orders in transit.                                                                                                                         | US-063                                                                         |
| FR54  | Must     | The DHL section shall have filters for route, status and international orders.                                                                                                        | US-064, US-065, US-066                                                         |
| FR55  | Must     | The system shall receive an estimated delay from DHL when an issue arises, and add it to the expected delivery time.                                                                  | US-068, US-085, US-136                                                         |
| FR57  | Must     | The webshop shall offer pre-made, non-customizable products.                                                                                                                          | US-044, US-072                                                                 |
| NFR1  | Must     | The system shall send alerts about issues with B2B orders by email.                                                                                                                   | US-020, US-025, US-028, US-060, US-098                                         |
| NFR2  | Must     | The system shall identify every product by a unique, standardized SKU.                                                                                                                | US-035, US-036, US-039, US-041, US-089, US-105, US-118                         |
| NFR3  | Must     | The warehouse shall dispatch an order within 5 working days of the order.                                                                                                             | US-007, US-040                                                                 |
| NFR4  | Must     | The system shall have an adjustable polling time (for example, for warehouse stock checks).                                                                                           | US-010, US-018, US-045, US-073                                                 |
| NFR5  | Must     | The system shall store every status change of every order (customer, purchase and production orders) with a timestamp.                                                                | US-002, US-019, US-023, US-067, US-108, US-110, US-113, US-129                 |
| NFR6  | Should   | The Control Tower shall open on the dashboard after login.                                                                                                                            | US-015                                                                         |
| NFR7  | Must     | The system shall show all dates and times in CET.                                                                                                                                     | US-002, US-018, US-019, US-021, US-030, US-050, US-074, US-085, US-088, US-130 |
| NFR8  | Must     | The system's default language shall be English.                                                                                                                                       | US-095                                                                         |
| NFR9  | Must     | A product's title in the webshop shall be at most 50 characters.                                                                                                                      | US-041                                                                         |
| NFR10 | Must     | A product's summary in the webshop shall be at most 100 characters.                                                                                                                   | US-041                                                                         |
| NFR11 | Must     | A product image in the webshop shall be at most 2 MB.                                                                                                                                 | US-042                                                                         |
| NFR12 | Must     | The Control Tower shall have a section for each organisation in the supply chain.                                                                                                     | US-012, US-016, US-049                                                         |
| NFR13 | Must     | The system shall give staff members limited access to the Control Tower.                                                                                                              | US-011, US-012, US-014                                                         |
| NFR14 | Must     | The Control Tower's UI shall work on mobile phones.                                                                                                                                   | US-013, US-094                                                                 |
| NFR15 | Must     | The system shall be built as a microservice architecture.                                                                                                                             | Technical constraint (all stories)                                             |
| NFR16 | Must     | The system shall be developed with Svelte 5 for the frontend and Express.js for the backend.                                                                                          | Technical constraint (all stories)                                             |

## Appendix B. Points to check with the client and team

While writing the stories, these gaps and inconsistencies between the source documents came up. The stories follow UVC-Requirements.md where sources disagree.

- Requirement numbers in the use case specifications do not match UVC-Requirements.md. For example, the use cases cite FR25 for stock level (FR24 in the requirements), FR35 for the production request (FR34), FR49 for B2B priority (FR48, and FR49 does not exist), and FR50 for re-order thresholds (FR6; FR50 is the DHL shipment details).
- Purchase order statuses differ. FR14 lists ordered, shipped, in customs (Hong Kong), in customs (Netherlands) and received at warehouse; the Re-Order Stock use case lists Confirmed, In Production, Shipped and Received at Warehouse.
- Expected arrival of a purchase order: FR32 is 2 weeks plus any delay; the Re-Order Stock use case adds 1 day of processing in Hong Kong.
- Who sets “received at warehouse”: the use case has Hong Kong Novelty Goods set it after DHL delivers. The stories propose that DHL confirms the delivery.
- NFR14 names only the Control Tower for mobile use; the Order Custom Product use case also expects the webshop to work on phones.
- Customer image uploads appear in FR35 and the ERD but not in FR19 (size, letters and colours only).
- Business accounts with several users (Confirm Order Received / Report, B1) are not supported by the ERD, which has one user per WEBSHOP_CUSTOMER.
- Not yet defined: the re-order quantity, how busy periods are set, the dead-stock period, the return window, the SKU format, and whether Dutch public holidays count as working days.
- FR6 names the Director SCM; the persona (Fiona Koevoets, Director SCM) is treated as the GIFTS-4-U CEO role.
