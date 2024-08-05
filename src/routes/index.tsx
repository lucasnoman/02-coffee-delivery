import { createFileRoute } from '@tanstack/react-router'

import { Intro } from '@/components/intro'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Intro />
    </div>
  )
}
