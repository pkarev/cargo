import type { Meta, StoryObj } from '@storybook/vue3'
import CgTours from '@/components/CgTours.vue'
import { mockTours } from '@/api/fixture'
import { vueRouter } from 'storybook-vue3-router'

const meta: Meta<typeof CgTours> = {
  component: CgTours
}

export default meta
type Story = StoryObj<typeof CgTours>

export const Primary: Story = {
  render: (args) => ({
    components: { CgTours },
    setup() {
      return { args }
    },
    template: '<CgTours :tours="args.tours"/>'
  }),
  args: {
    tours: [mockTours[0], mockTours[1], mockTours[2], mockTours[3]]
  }
}

Primary.decorators = [vueRouter()]
