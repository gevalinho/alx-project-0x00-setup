import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
   
    <main className="flex flex-col h-screen justify-center items-center space-y-4">
      <h1 className="text-3xl font-bold mb-6">Landing Page Buttons</h1>

       <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>

      {/* Small buttons */}
      <div className="flex gap-4">
        <Button title="Small Sm" size="small" shape="rounded-sm" />
        <Button title="Small Md" size="small" shape="rounded-md" />
        <Button title="Small Full" size="small" shape="rounded-full" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4">
        <Button title="Medium Sm" size="medium" shape="rounded-sm" />
        <Button title="Medium Md" size="medium" shape="rounded-md" />
        <Button title="Medium Full" size="medium" shape="rounded-full" />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button title="Large Sm" size="large" shape="rounded-sm" />
        <Button title="Large Md" size="large" shape="rounded-md" />
        <Button title="Large Full" size="large" shape="rounded-full" />
      </div>
    </main>
  )
}
export default Landing