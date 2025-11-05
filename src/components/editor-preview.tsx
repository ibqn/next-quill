"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const SnowEditor = dynamic(() => import("@/components/snow-editor").then((mod) => mod.SnowEditor), { ssr: false })
const BubbleEditor = dynamic(() => import("@/components/bubble-editor").then((mod) => mod.BubbleEditor), {
  ssr: false,
})

export const EditorPreview = () => {
  const [value, setValue] = useState<string | null>('{"ops":[{"insert":"Hello, Quill!"}]}')

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <SnowEditor value={value} onChange={setValue} />
      <pre className="flex text-wrap">{value}</pre>
      <div className="my-4 border border-gray-300">
        <BubbleEditor value={value} />
      </div>
    </div>
  )
}
