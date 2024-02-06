import { config } from '@vue/test-utils'
import { FindHelpersPlugin } from '@/components/__tests__/setup/find-helpers-plugin'

config.plugins.VueWrapper.install(FindHelpersPlugin)
