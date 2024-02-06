import { DOMWrapper } from '@vue/test-utils';

declare module '@vue/test-utils' {
  export class VueWrapper {
    findElementByText(
      searchedElement: string,
      text: string
    ): DOMWrapper<any> | undefined

    findInputByPlaceholder(
      placeholder: string
    ): DOMWrapper<HTMLInputElement>
  }
}
