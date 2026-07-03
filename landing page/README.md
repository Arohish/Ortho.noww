# Task 3 – Integration Design

## Objective

When a patient submits the consultation form, the system should:

1. Create or update the patient in HubSpot CRM.
2. Send a WhatsApp confirmation message via Karix within 2 minutes.
3. Record the conversion in Google Ads for campaign optimization.

User
      │
      ▼
Landing Page (HTML + JavaScript)
      │
      ▼
Backend API (Node.js / Express)
      │
      ├────────────► HubSpot CRM API
      │
      ├────────────► Google Ads Conversion
      │
      └────────────► Karix WhatsApp Business API

    
## End-to-End Workflow
When a patient submits the consultation form on the OrthoNow landing page, the frontend validates the input and sends the data securely to a backend API over HTTPS. The backend acts as the central integration layer and coordinates all downstream services.

The backend first checks HubSpot for an existing contact using the submitted phone number. Since HubSpot does not deduplicate contacts by phone by default, this lookup is necessary to avoid creating duplicate records. If a matching contact is found, the existing record is updated; otherwise, a new contact is created. The contact is stored with the patient's name, phone number, clinic preference, source as "Google Ads – Consultation Landing Page", and lead status as "New Enquiry."

After the CRM operation is successful, the backend records the consultation_form_submitted conversion so Google Ads can optimize campaigns based on completed consultation requests rather than simple page visits or button clicks.

Finally, the backend sends a request to the Karix WhatsApp Business API, which delivers a confirmation message to the patient within two minutes. This message confirms that the enquiry has been received and that a representative will contact the patient shortly.



## The biggest failure point

The biggest failure point is contact creation in HubSpot. Because the landing page does not collect an email address, relying on HubSpot's default deduplication could create duplicate contacts. To prevent this, the backend searches for an existing contact using the phone number before deciding whether to create or update a record.

If any API call fails due to a network issue or temporary outage, the request should be retried automatically. If retries fail, the request is stored in a queue and logged for manual review, ensuring no patient enquiry is lost.


## SLA Monitoring

To ensure the WhatsApp confirmation is delivered within two minutes, API response times, queue length, and delivery status should be monitored continuously. Alerts should be triggered if message delivery exceeds the defined SLA or if repeated API failures occur. Centralized logging and dashboards help the operations team quickly identify and resolve issues.



## Why This Approach

This architecture separates the frontend from external services, improving security, maintainability, and scalability. Using a backend API allows business logic such as validation, deduplication, retries, and monitoring to be implemented in one place while keeping sensitive API keys secure.