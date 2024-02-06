import CgSelect from '@/components/CgSelect.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof CgSelect> = {
  component: CgSelect
}

export default meta

type Story = StoryObj<typeof CgSelect>

export const Primary: Story = {
  render: (args) => ({
    components: { CgSelect },
    setup() {
      return { args }
    },
    template:
      '<CgSelect v-model="args.modelValue" :options="args.options" :placeholder="args.placeholder"/>'
  })
}
Primary.args = {
  modelValue: '',
  options: ['first option', 'second option', 'third option'],
  placeholder: 'Select some'
}
