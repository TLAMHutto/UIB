
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerProps {
  color: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
  const handleChangeComplete = (color: any) => {
    onColorChange(color.hex);
  };

  return <SketchPicker color={color} onChangeComplete={handleChangeComplete} />;
};

const ReactColor: React.FC = () => {
  const [color, setColor] = useState<string>('#ffffff'); // Default color

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div>
      <ColorPicker color={color} onColorChange={handleColorChange} />
    </div>
  );
};

export default ReactColor;
