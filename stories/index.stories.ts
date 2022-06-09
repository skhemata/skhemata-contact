import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-contact.js';

export default {
  title: 'General/SkhemataContact',
  component: 'skhemata-contact',
  argTypes: {
    api: { control: 'object' },
    description: 'api config',
    table: {
      category: 'HTML Attributes'
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  parameters?: any;
}

interface ArgTypes {
  api?: {
    url?: string
  }
}

const Template: Story<ArgTypes> = ({
  api = {
    url: 'https://www.devradius.com/api/service/restv1/contact'
  },
}: ArgTypes) => html`
  <skhemata-contact
    .api=${api}
  ></skhemata-contact>
`;

export const Example = Template.bind({});
Example.args = {
  api: {
    url: 'https://www.devradius.com/api/service/restv1/contact'
  }
}
Example.parameters = {
  source: {
    code: `
      <skhemata-contact
        api="${JSON.stringify(Example.args.api, null, 2)}"
      ></skhemata-contact>
    `
  }
}
