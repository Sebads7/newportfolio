"use client";

// IMPORTS FROM ZOD AND REACT-HOOK-FORM
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// IMPORTS FROM SHADCN COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  //states declarations
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Please enter your full name.",
    }),
    phonenumber: z
      .string()
      .min(10, {
        message: "Please enter a valid phone number.",
      })
      .max(14, {
        message: "Please enter a valid phone number.",
      }),
    city: z.string().min(2, {
      message: "Please enter your city.",
    }),
    emailAddress: z.string().email({
      message: "Please enter a valid email address.",
    }),
    textarea: z.string().min(2, {
      message: "Please enter your message.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phonenumber: "",
      city: "",
      emailAddress: "",
      textarea: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log("Form Values:", value);

    setSubmitting(true);
    setSubmitError("");

    try {
      // Direct validation in submit handler
      const isValid = await form.trigger();
      if (!isValid) {
        setSubmitting(false);
        setSubmitError("Please fill out all required fields.");
        return;
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with status ${response.status}: ${errorText}`,
        );
      }

      console.log("Email sent successfully");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Error sending email. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8   ">
          <div className="lg:grid lg:grid-cols-2 xs:flex xs:flex-col  pb-3 gap-5 xs:px-5 md:px-10 m-0 w-full xs:text-sm lg:text-base  ">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="xs:text-sm lg:text-base "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="mobile:text-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="textarea"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Textarea
                      placeholder="Please, enter your message"
                      className="xs:h-[9rem] md:h-[12.5rem] mobile:text-xs"
                      {...field}
                      value={field.value as string} // explicitly set the type of the value property to string
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="h-12 col-span-2 relative xs:text-sm lg:text-base "
              disabled={submitting}
            >
              {submitting && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {submitting ? "Sending..." : "Submit"}
            </Button>
          </div>

          {submitError && <div className="text-red-500">{submitError}</div>}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
