import { EditorPreview } from "@/components/editor-preview"

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32
          sm:items-start"
      >
        <EditorPreview />
      </main>
    </div>
  )
}
