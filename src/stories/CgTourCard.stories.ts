import type { Meta, StoryObj } from '@storybook/vue3'
import CgTourCard from '@/components/CgTourCard.vue'
import type { Tour } from '@/model'
import { vueRouter } from 'storybook-vue3-router'

const meta: Meta<typeof CgTourCard> = {
  component: CgTourCard
}

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

export default meta
type Story = StoryObj<typeof CgTourCard>

export const Primary: Story = {
  render: (args) => ({
    components: { CgTourCard },
    setup() {
      return { args }
    },
    template: '<CgTourCard :tour="args.tour"/>'
  }),
  args: {
    tour: demoTour
  }
}

Primary.decorators = [vueRouter()]
