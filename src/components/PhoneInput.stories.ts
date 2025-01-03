// @ts-nocheck
import PhoneInput from "./PhoneInput.vue";
 
export default {
  title: "Components/PhoneInput",
  component: PhoneInput,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary"] },
    variant: { control: "select", options: ["flat", "outline"], description: "Button style variant" },
    disabled: { control: "boolean", default: false },
    loading: { control: "boolean", description: "Display loading spinner" },
    isExternal: { control: "boolean" },
    url: { control: "text" },
  },
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: { PhoneInput },
  setup() {
    return { args };
  },
  template: `<PhoneInput v-bind="args">Primary Button</PhoneInput>`,
});

export const Default = Template.bind({});
Default.args = {
  variant: "flat",
  color: "primary",
  size: "md",
  disabled: false,
  loading: false,
  url: "",
};

export const ButtonWithLink = () => ({
  components: { PhoneInput },
  template: `
    <div class="flex gap-4">
      <PhoneInput v-bind="args" url="/home" :isExternal="false">
        Internal Link
      </PhoneInput>
      <PhoneInput v-bind="args" url="https://example.com" :isExternal="true">
        External Link
      </PhoneInput>
    </div>
  `,
});

export const Sizes = () => ({
  components: { PhoneInput },
  template: `
    <div class="flex gap-4">
      <PhoneInput size="sm" color="primary">Small Button</PhoneInput>
      <PhoneInput size="md" color="primary">Medium Button</PhoneInput>
      <PhoneInput size="lg" color="primary">Large Button</PhoneInput>
    </div>
  `,
});

export const Variants = () => ({
  components: { PhoneInput },
  template: `
    <div class="flex gap-4">
      <PhoneInput variant="flat" color="primary">Flat Button</PhoneInput>
      <PhoneInput variant="outline" color="primary">Outline Button</PhoneInput>
    </div>
  `,
});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  variant: "flat",
  color: "primary",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: "flat",
  color: "primary",
  size: "md",
  url: "",
};

export const WithIcons = () => ({
  components: { PhoneInput, Plus },
  template: `
    <div class="flex gap-4">
      <PhoneInput color="primary" variant="flat">
        <template #iconStart>
          <Plus />
        </template>
        Left Icon
      </PhoneInput>

      <PhoneInput color="primary" variant="outline">
        Right Icon
        <template #iconEnd>
          <Plus />
        </template>
      </PhoneInput>
    </div>
  `,
});
