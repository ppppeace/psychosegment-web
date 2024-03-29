"use server";
import { redirect } from "next/navigation";

export const submitSendData = async(prevState:any,formData:FormData)=>{
    const message = formData.get("message");
    await fetch("/api/typeofmbti",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message}),
    });
    redirect('/analysis');
  }