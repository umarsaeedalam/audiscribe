"use client"

import { MdEdit, MdDone } from "react-icons/md";
import { Input } from "@nextui-org/input";
import { Transcript } from "assemblyai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/shadcn/form"
import { updateSpeakerLabel } from "@/lib/functions";
import { Status } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/shadcn/popover"

type Props = {
    transcript: Transcript;
    speaker: string;
    setStatus: Dispatch<SetStateAction<Status>>;
}

const classNames = {
    label: 'font-semibold mb-1'
}

const formSchema = z.object({
    speakerName: z.string()
        .min(1, "Speaker label cannot be empty")
        .max(20, "Speaker label cannot exceed 20 characters")
        .refine(
            (value) => value.trim().length > 0 && /[a-zA-Z]/.test(value),
            "Speaker label must contain at least one letter"
        )
})

function EditSpeaker({ transcript, speaker, setStatus }: Props) {  
    const [open, setOpen] = useState(false)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          speakerName: speaker,
        },
    })

    function handleModalClose() {
        form.reset({ speakerName: speaker });
    };

    function onSubmit(values: z.infer<typeof formSchema>) {
        const updatedTranscript = updateSpeakerLabel(transcript, speaker, values.speakerName);

        setStatus({
            status: 'Done',
            transcript: updatedTranscript
        })

        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={() => { setOpen(!open); handleModalClose() }}>
            <PopoverTrigger className="bg-accent-600 hover:bg-accent-800 text-primary-50 rounded p-1 max-[700px]:p-[3px] transition-all ease-in-out duration-200 transform active:scale-90" >
                    <MdEdit />
            </PopoverTrigger>

            <PopoverContent onOpenAutoFocus={(e) => {e.preventDefault()}} className="rounded-md p-2 bg-white backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white/40">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                        <FormField control={form.control} name="speakerName" render={({ field, fieldState: { error } }) => (
                            <FormItem className="grow">                                            
                                <FormControl>
                                    <Input 
                                        radius="sm" 
                                        label="Speaker Label" 
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

export default EditSpeaker;