import type { Meta, StoryObj } from '@storybook/vue3'
import type { Tour } from '@/model'
import CgToursItem from '@/components/CgToursItem.vue'

const meta: Meta<typeof CgToursItem> = {
  component: CgToursItem
}

export default meta
type Story = StoryObj<typeof CgToursItem>

const demoTour: Tour = {
  id: 0,
  customer: 'Grosskopf Gruppe',
  shipmentDate: '10/21/2099',
  from: 'Heilbronn',
  to: 'Menden (Sauerland)',
  driver: {
    id: 19,
    name: 'Leana Herweg',
    location: 'Elmshorn'
  }
}

export const Primary: Story = {
  render: (args) => ({
    components: { CgToursItem },
    setup() {
      return { args }
    },
    template: '<CgToursItem :tour="args.tour" />'
  }),
  args: {
    tour: demoTour
  }
}
