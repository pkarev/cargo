import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import CgNav from '@/components/CgNav.vue'

const meta: Meta<typeof CgNav> = {
  component: CgNav
}

export default meta
type Story = StoryObj<typeof CgNav>

export const Primary: Story = {
  render: () => ({
    components: { CgNav },
    template: '<CgNav />'
  })
}

Primary.decorators = [vueRouter()]
