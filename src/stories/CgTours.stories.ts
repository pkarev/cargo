import type { Meta, StoryObj } from '@storybook/vue3'
import CgTours from '@/components/CgTours.vue'
import { tours } from '@/api/fixture'
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
    tours: [tours[0], tours[1], tours[2], tours[3]]
  }
}

Primary.decorators = [vueRouter()]
