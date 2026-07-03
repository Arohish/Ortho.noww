# Task 1 – GTM Event Schema

This document defines the Google Tag Manager (GTM) event tracking strategy for OrthoNow's website. The goal is to capture meaningful user interactions, enable funnel analysis in GA4, and support conversion optimization in Google Ads.


| Event Name | Trigger Type | Key Parameters | GA4 Report / Audience |
|------------|--------------|----------------|------------------------|
| consultation_form_started | User focuses on first form field | form_name, page_location, timestamp | Engagement |
| consultation_form_submitted | Form submitted successfully | patient_name, phone_number, page_location | Conversions |
| phone_click | Click on Call Now button | phone_number, page_location, button_text | Event Report |
| whatsapp_click | WhatsApp widget clicked | page_location, destination_url, timestamp | Engagement |
| patient_guide_download | PDF download | guide_name, page_location, user_type | Downloads |
| clinic_page_view | Clinic page opened | clinic_name, city, page_location | Content Performance |
| blog_scroll_25 | Scroll reaches 25% | article_title, scroll_percentage, page_location | Engagement |
| blog_scroll_50 | Scroll reaches 50% | article_title, scroll_percentage, page_location | Engagement |
| blog_scroll_75 | Scroll reaches 75% | article_title, scroll_percentage, page_location | Engagement |
| blog_scroll_100 | Scroll reaches 100% | article_title, scroll_percentage, page_location | Highly Engaged Users |


### Booking Step 1 – Location & Specialty Selection

```json
{
  "event": "booking_step_complete",
  "step_number": 1,
  "step_name": "location_specialty_selected",
  "clinic_location": "Bengaluru",
  "specialty": "Orthopaedics"
}
```

```json
{
  "event": "booking_step_complete",
  "step_number": 2,
  "step_name": "patient_details_entered",
  "patient_name": "Rahul Sharma",
  "phone_number": "9876543210",
  "preferred_date": "2026-07-10"
}
```

```json
{
  "event": "booking_step_complete",
  "step_number": 3,
  "step_name": "booking_confirmed",
  "booking_status": "success",
  "booking_id": "ORTHO12345"
}
```



## Google Ads Conversion

**Conversion Event:** consultation_form_submitted

**Reason:**

This event represents a completed consultation request, making it the most valuable conversion for optimizing Google Ads campaigns. Unlike clicks or form starts, it reflects a qualified lead with strong business value.