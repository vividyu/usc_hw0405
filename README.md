Your task is to implement two components using Styled Components in React.

Requirements
Use Styled Components to define both components. Don't create any new React components, it's unnecessary.

Tag component
Accept two properties: color (default value: red) and borderRadius (default value: 1em).
The Tag component should use a span element.
The Tag component should have:
display equal to inline-block;
padding equal to 0.5em;
background color equal to the color property;
border radius equal to the borderRadius property.
Remember to export your component with the name Tag, as it's necessary for the tests to pass.

Icon component
The Icon component should use an img element.
The Icon component should be blurred (6px blur).
If the Icon component is used inside the Tag component, remove the blur while hovering over the icon (using Styled Components).
Remember to export your component with the name Icon, as it's necessary for the tests to pass.

Available tools/packages
JavaScript ES2020
Styled Components v5.2.1

Example usage of your MyTabsComponent component:

<MyTabsComponent>
  <div title={"Section title 1"}>Content of section 1</div>
  <div title={"Section title 2"}>Content of section 2</div>
</MyTabsComponent>
The above example should render this structure:

    <div class="tabs">
        <button class="btn-active">Section title 1</button>
        <button class="btn">Section title 2</button>
        <div class="view">
            Content of section 1
        </div>
    </div>
