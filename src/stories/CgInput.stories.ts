import type { Meta, StoryObj } from '@storybook/vue3'
import CgInput from '@/components/CgInput.vue'

const meta: Meta<typeof CgInput> = {
  component: CgInput
}

export default meta
type Story = StoryObj<typeof CgInput>

export const Primary: Story = {
  render: (args) => ({
    components: { CgInput },
    setup: () => {
      return { args }
    },
    template: '<CgInput v-model="args.modelValue" :placeholder="args.placeholder"/>'
  })
}
Primary.args = {
  modelValue: '',
  placeholder: 'Placeholder'
}
