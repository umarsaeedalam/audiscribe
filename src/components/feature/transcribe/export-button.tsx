"use client"

import { MdEdit, MdDone } from "react-icons/md";
import { Input } from "@nextui-org/input";
import { TranscriptUtterance } from "assemblyai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/shadcn/form"
import { updateSpeakerLabel } from "@/lib/functions";
import { Status } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/shadcn/popover"
import { FaFileWord } from "react-icons/fa";
import { exportTranscriptDoc } from "@/lib/functions";

type Props = {
    utterances: TranscriptUtterance[] | null | undefined
}

const classNames = {
    label: 'font-semibold mb-1'
}

const formSchema = z.object({
    documentName: z.string()
        .min(1, "Document name cannot be empty")
        .max(30, "Document name cannot exceed 30 characters")
        .refine(
            (value) => value.trim().length > 0 && /[a-zA-Z]/.test(value),
            "Document name must contain at least one letter"
        )
})

function ExportTranscript({ utterances }: Props) {  
    const [open, setOpen] = useState(false)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    function handleModalClose() {
        form.reset({ documentName: '' });
    };

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (utterances) {
            exportTranscriptDoc(utterances, values.documentName)
        }

        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={() => { setOpen(!open); handleModalClose() }}>
            <PopoverTrigger className="p-2 max-[1000px]:p-[7px] max-[700px]:p-[6px] rounded-md bg-secondary-500 hover:bg-secondary-400 text-primary-50 transition-all ease-in-out duration-200 transform active:scale-90" >
                <FaFileWord className="text-xl max-[1000px]:text-md max-[700px]:text-17" />
            </PopoverTrigger>

            <PopoverContent onOpenAutoFocus={(e) => {e.preventDefault()}} className="rounded-md p-2 bg-white backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white/40">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                        <FormField control={form.control} name="documentName" render={({ field, fieldState: { error } }) => (
                            <FormItem className="grow">                                            
                                <FormControl>
                                    <Input 
                                        radius="sm" 
                                        label="Document Name" 
                                        {...field}
                                        classNames={classNames} 
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}/>

                        <button type="submit" className="py-1 px-2 rounded-md h-[56px] bg-accent-600 hover:bg-accent-800 text-primary-50 transition-all ease-in-out duration-200 transform active:scale-90">
                            <MdDone />
                        </button>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>

    )
}

export default ExportTranscript;