"use server";
import { redirect } from "next/navigation";

export const submitSendData = async(prevState:any,formData:FormData)=>{
    console.log("run server")
    const message = formData.get("message");
    console.log(message)
    await fetch("http://localhost:3000/api/typeofmbti",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message}),
    });
    redirect('/analysis');
  }