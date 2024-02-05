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
    template: '<CgInput v-model="args.inputValue" :placeholder="args.placeholder"/>'
  }),
  args: {
    modelValue: '',
    placeholder: 'Placeholder'
  }
}
