import CgDriverCard from '@/components/CgDriverCard.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof CgDriverCard> = {
  component: CgDriverCard
}
export default meta

type Story = StoryObj<typeof CgDriverCard>

const mockDriver = {
  id: 0,
  name: 'Alea Otte',
  location: 'Bremen'
}

export const Primary: Story = {
  render: (args) => ({
    components: { CgDriverCard },
    setup() {
      return { args }
    },
    template: '<CgDriverCard :driver="args.driver"/>'
  })
}
Primary.args = {
  driver: mockDriver
}
