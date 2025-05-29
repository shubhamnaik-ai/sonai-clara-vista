
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  planType?: string;
  message?: string;
  interest?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormEmailRequest = await req.json();
    console.log("Received form data:", formData);

    // Generate email content based on form type
    let emailSubject = "";
    let emailContent = "";

    switch (formData.formType) {
      case "brochure":
        emailSubject = "New Brochure Download Request - Sonai Clara";
        emailContent = `
          <h2>New Brochure Download Request</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      case "site-visit":
        emailSubject = "New Site Visit Booking - Sonai Clara";
        emailContent = `
          <h2>New Site Visit Booking</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Preferred Date:</strong> ${formData.preferredDate || 'Not specified'}</p>
          <p><strong>Plan Type:</strong> ${formData.planType || 'Not specified'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      case "enquiry":
        emailSubject = "New Enquiry - Sonai Clara";
        emailContent = `
          <h2>New Customer Enquiry</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Plan Type:</strong> ${formData.planType || 'Not specified'}</p>
          ${formData.preferredDate ? `<p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>` : ''}
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      case "contact":
        emailSubject = "New Contact Form Submission - Sonai Clara";
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.interest ? `<p><strong>Interest:</strong> ${formData.interest}</p>` : ''}
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      default:
        emailSubject = "New Form Submission - Sonai Clara";
        emailContent = `
          <h2>New Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `;
    }

    // Send email to sales team
    const emailResponse = await resend.emails.send({
      from: "Sonai Clara Website <onboarding@resend.dev>",
      to: ["sales@sonairealty.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
