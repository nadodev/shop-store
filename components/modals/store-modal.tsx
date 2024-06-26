"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {


    const [loading, setLoading] = useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
        setLoading(true)
        const res = await axios.post("/api/stores", values)
        toast.success("Store created")
     
    }catch(e) {
       toast.error("An error occurred")
    }finally {
        setLoading(false)
    }
  };

  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Create a new store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) =>  (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="E-commerce" {...field} />
                        </FormControl>
                            <FormMessage/>
                    </FormItem>
                )}
              />
              <div className="space-x-2 pt-6 flex items-center justify-end w-full">
                    <Button variant="outline" type="button" onClick={storeModal.onClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                        Continuar
                    </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
