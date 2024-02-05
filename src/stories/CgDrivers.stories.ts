import type { Meta, StoryObj } from '@storybook/vue3'
import CgDrivers from '@/components/CgDrivers.vue'

const meta: Meta<typeof CgDrivers> = {
  component: CgDrivers
}

export default meta
type Story = StoryObj<typeof CgDrivers>

export const Primary: Story = {
  render: () => ({
    components: { CgDrivers },
    template: '<CgDrivers />'
  })
}
