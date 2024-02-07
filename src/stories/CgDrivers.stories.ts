import type { Meta, StoryObj } from '@storybook/vue3'
import CgDrivers from '@/components/CgDrivers.vue'
import { vueRouter } from 'storybook-vue3-router'
import { mockDrivers } from '@/api/fixture'

const meta: Meta<typeof CgDrivers> = {
  component: CgDrivers
}

export default meta
type Story = StoryObj<typeof CgDrivers>

export const Primary: Story = {
  render: (args) => ({
    components: { CgDrivers },
    setup() {
      return { args }
    },
    template: '<CgDrivers :drivers="args.drivers"/>'
  })
}
Primary.args = {
  drivers: mockDrivers
}
Primary.decorators = [vueRouter()]
