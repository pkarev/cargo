import type { Meta, StoryObj } from '@storybook/vue3'
import CgTours from '@/components/CgTours.vue'

const meta: Meta<typeof CgTours> = {
  component: CgTours
}

export default meta
type Story = StoryObj<typeof CgTours>

export const Primary: Story = {
  render: () => ({
    components: { CgTours },
    template: '<CgTours />'
  })
}
