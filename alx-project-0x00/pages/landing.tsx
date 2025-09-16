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
        <Button styles="Small Sm" size="small" shape="rounded-sm" />
        <Button styles="Small Md" size="small" shape="rounded-md" />
        <Button styles="Small Full" size="small" shape="rounded-lg" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4">
        <Button styles="Medium Sm" size="medium" shape="rounded-sm" />
        <Button styles="Medium Md" size="medium" shape="rounded-md" />
        <Button styles="Medium Full" size="medium" shape="rounded-lg" />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button styles="Large Sm" size="large" shape="rounded-sm" />
        <Button styles="Large Md" size="large" shape="rounded-md" />
        <Button styles="Large Full" size="large" shape="rounded-lg" />
      </div>
    </main>
  )
}
export default Landing