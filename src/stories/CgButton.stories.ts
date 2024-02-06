import CgButton from '@/components/CgButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof CgButton> = {
  component: CgButton
}

export default meta

type Story = StoryObj<typeof CgButton>

export const Main: Story = {
  render: (args) => ({
    components: { CgButton },
    setup: () => {
      return { args }
    },
    template: '<CgButton :theme="args.theme">Main</CgButton>'
  })
}
Main.args = {
  theme: 'Main'
}

export const Invert: Story = {
  render: (args) => ({
    components: { CgButton },
    setup: () => {
      return { args }
    },
    template: '<CgButton :theme="args.theme">Invert</CgButton>'
  })
}
Invert.args = {
  theme: 'Invert'
}
