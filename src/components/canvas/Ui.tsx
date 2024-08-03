// UI.tsx
import React from 'react';
import { SketchPicker } from 'react-color';
import { TLUiOverrides } from 'tldraw';

// Define the ColorPicker component for toolbar integration
const ColorPicker: React.FC<{ onColorChange: (color: string) => void }> = ({ onColorChange }) => {
  const handleChangeComplete = (color: any) => {
    onColorChange(color.hex);
  };

  return <SketchPicker color="#ffffff" onChangeComplete={handleChangeComplete} />;
};

// Define toolbar overrides
const myOverrides: TLUiOverrides = {
  tools(editor, tools) {
    console.log('Available tools:', tools); // Log all rendered tools once per setup

    tools.colorSelector = {
      id: 'colorSelector',
      icon: 'color',
      label: 'Select Color',
      kbd: 'c',
      onSelect: () => {
        console.log('Color selector tool selected');
        // Logic to display the ReactColor component or handle tool selection
      },
    };

    return tools;
  },
};

export { myOverrides, ColorPicker };
