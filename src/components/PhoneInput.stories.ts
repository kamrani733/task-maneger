 import { Meta, StoryFn } from '@storybook/vue3';
import PhoneInput from './PhoneInput.vue';
import '../index.css';  

export default {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  argTypes: {
    modelValue: { control: 'text', description: 'The phone number value bound to the input' },
    placeholder: { control: 'text', description: 'The placeholder text for the input field' },
    id: { control: 'text', description: 'The id attribute for the input field' },
    name: { control: 'text', description: 'The name attribute for the input field' },
    label: { control: 'text', description: 'The label text for the input field' },
    errorMessage: { control: 'text', description: 'An error message to display below the input field' },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PhoneInput },
  setup() {
    return { args };
  },
  template: '<PhoneInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  placeholder: 'Enter your phone number',
  label: 'Mobile Number',
};

export const WithError = Template.bind({});
WithError.args = {
  modelValue: '12345',
  placeholder: 'Enter your phone number',
  label: 'Mobile Number',
  errorMessage: 'Incorrect phone number',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  modelValue: '',
  placeholder: 'Enter contact info',
  label: 'Custom Label',
};

export const PreFilled = Template.bind({});
PreFilled.args = {
  modelValue: '+123456789',
  placeholder: 'Enter your phone number',
  label: 'Mobile Number',
};
