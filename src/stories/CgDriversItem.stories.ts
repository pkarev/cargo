import type { Meta, StoryObj } from '@storybook/vue3'
import CgDriversItem from '@/components/CgDriversItem.vue'
import { mockDrivers } from '@/api/fixture'

const meta: Meta<typeof CgDriversItem> = {
  component: CgDriversItem
}

export default meta

type Story = StoryObj<typeof CgDriversItem>

export const Primary: Story = {
  render: (args) => ({
    components: { CgDriversItem },
    setup() {
      return { args }
    },
    template: '<CgDriversItem :driver="args.driver" />'
  })
}

Primary.args = {
  driver: mockDrivers[0]
}
