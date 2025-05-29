import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
});

const DownloadBrochureForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Downloading brochure for:", values);
    
    try {
      // Send email via Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'brochure',
          ...values
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: "Failed to send your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Brochure Sent!",
        description: "Check your email for our detailed brochure.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader className="text-center">
        <div className="flex justify-center mb-3">
          <img 
            src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png" 
            alt="Sonai Clara Logo" 
            className="h-16" 
          />
        </div>
        <DialogTitle className="text-2xl text-deepblue">Download Brochure</DialogTitle>
        <DialogDescription>
          Enter your details to receive our detailed project brochure via email.
        </DialogDescription>
      </DialogHeader>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="bg-logo hover:bg-logo-dark text-white">
              Send Me the Brochure
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default DownloadBrochureForm;
