
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
});

const DownloadBrochureForm = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
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
    try {
      console.log("Downloading brochure for:", values);
      
      // Here you would integrate with your backend to send emails with brochure attached
      // This is a simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Brochure Sent!",
        description: "Check your email for our detailed brochure.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending brochure:", error);
      toast({
        title: "Download Failed",
        description: "There was an error sending the brochure. Please try again.",
        variant: "destructive",
      });
    }
  };

  const FormContent = (
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
                  <Input placeholder="John" {...field} />
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
                  <Input placeholder="Doe" {...field} />
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
                <Input placeholder="john@example.com" {...field} />
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
                <Input placeholder="+1 (555) 000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold-dark text-white"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Me the Brochure"}
          </Button>
        </div>
      </form>
    </Form>
  );

  if (isMobile) {
    return (
      <DrawerContent className="px-4">
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-2xl text-deepblue">Download Brochure</DrawerTitle>
          <DrawerDescription>
            Enter your details to receive our detailed project brochure via email.
          </DrawerDescription>
        </DrawerHeader>
        {FormContent}
        <DrawerFooter className="pt-2 pb-8" />
      </DrawerContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl text-deepblue">Download Brochure</DialogTitle>
        <DialogDescription>
          Enter your details to receive our detailed project brochure via email.
        </DialogDescription>
      </DialogHeader>
      {FormContent}
      <DialogFooter className="pt-2" />
    </DialogContent>
  );
};

export default DownloadBrochureForm;
