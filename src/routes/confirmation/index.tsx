import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/confirmation/')({
  component: ConfirmationPage,
})

export function ConfirmationPage() {
  return (
    <div className="mx-40 flex justify-between border">
      <div className="w-[640px] border border-red-500 p-10">AAAAAA</div>
      <div className="w-[448px] border border-green-500">BBBBBB</div>
    </div>
  )
}
