import { DOMWrapper } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

export const FindHelpersPlugin = (wrapper: VueWrapper) => {
  function findInputByPlaceholder(placeholder: string): DOMWrapper<HTMLInputElement> {
    return wrapper.find(`input[placeholder=${placeholder}`)
  }

  function findElementByText(searchedElement: string, text: string): DOMWrapper<any> | undefined {
    return wrapper
      .findAll(searchedElement)
      .filter((c) => {
        return c.text() === text
      })
      .at(0)
  }

  function findByTestId(selector: string): DOMWrapper<any> {
    const dataSelector = `[data-testid='${selector}']`
    const element = wrapper.element.querySelector(dataSelector)

    return new DOMWrapper(element)
  }

  return {
    findInputByPlaceholder,
    findElementByText,
    findByTestId
  }
}
