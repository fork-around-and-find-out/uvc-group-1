# UXD Testing Plan

## 1. Goals

We want to find out whether:

1. The Director SCM can quickly see which orders have problems in the Control Tower.
2. Users can find the status of an order at each partner (Hong Kong, Warehouse, PRINTZ, DHL).
3. Customers can order a product, see the delivery time, and report a problem in the webshop.

## 2. Participants

| Role | Who | Number |
|---|---|---|
| Director SCM (Control Tower) | Logistics students, classmates, or the client at demos | at least 3 |
| Customer (webshop) | Students, friends or family who shop online |  |

## 3. Methods

- **Usability test (main method, as in UVE):** the participant does tasks and thinks out loud. One person guides, one takes notes.
- **Heuristic evaluation:** before testing with users, the team checks the wireframes against Nielsen's 10 heuristics.
- **Client feedback:** we note the client's reactions at every sprint demo.

---

## 4. Test script

**Sprint:** [number] **Date:** [date] **Tested version:** Figma prototype (situations 1–6)

**Before the session:** open the prototype in Present mode. The moderator starts each situation from the start screen and hands over on the first screen, so the participant doesn't see the situation names.

**Intro:**
> "We're testing our design, not you, so there are no wrong answers. Please think out loud while you work. Is it okay if we take notes?"

**Role:**
> "You are a Director of Supply Chain Management at GIFTS-4-U. You use the Control Tower to keep an eye on orders, stock and partners. It's the Christmas season."

**Tasks** (read out loud and give on a card; change the order per participant):

| # | Situation | Task (what we say) | Success when… |
|---|---|---|---|
| T1 | 1 Christmas rush | "You just opened the Control Tower. Something needs your attention. Make sure it gets solved." | Opens the task and sends an urgent purchase order of 300 mugs to Hong Kong |
| T2 | 2 SKU shortage | "Our supplier has a problem with one of the products. Find out which customers are affected and when their orders will arrive." | Finds the 4 affected orders and the new arrival date (12 Dec) |
| T3 | 3 B2B priority | "A big business order just came in. Make sure it's handled correctly and find out what happens to the other customers." | Reserves stock for the B2B order, sees the delayed B2C orders and reorders mugs |
| T4 | 4 Printer fault | "There's a problem at the printing company. Find out which order is affected and when the customer will get it." | Finds PR-211 / ORD-5530 and the new date (28 Nov) |
| T5 | 5 DHL late shipment | "Some deliveries are running late. Find out why, and what the customer of shipment SH-882 sees." | Finds the DHL undercapacity, SH-882 +1 day, and the customer's new date |
| T6 | 6 Return | *(as a customer)* "Your mug arrived with the wrong photo on it. Let the shop know." Then *(as Fiona)*: "Handle the new problem." | Submits the return; as Fiona, requests a reprint from PRINTZ |

**During each task:** note where they click first, where they hesitate, and what they say. Only give a hint after about 1 minute of being stuck; that task then counts as "partly".

**After each task:** "How easy or hard was that, from 1 (very hard) to 5 (very easy)?"

**After the tasks:**
1. What did you like most?
2. What was confusing?
3. What would you change?

---

## 5. Results

| Task | P1 | P2 | P3 |
|---|---|---|---|
| T1 | [✓ / ✗ / partly] | | |
| T2 | | | |
| T3 | | | |
| T4 | | | |
| T5 | | | |

**Findings:**

| # | Problem | Seen by | How serious (low / medium / high) | Quote |
|---|---|---|---|---|
| 1 | [e.g. users didn't notice the late shipment] | [P1, P3] | [high] | ["I didn't see that."] |

## 6. Conclusion and next steps

- **What worked:** 
- **What didn't:** 
- **What we'll change next sprint:** 