import React, { useRef, useEffect } from 'react';
import { Tldraw, Editor, TLShape } from 'tldraw';
import '../../index.css';


export default function App() {
  const editorRef = useRef<Editor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      const data = event.dataTransfer?.getData('text/plain');
      const styleData = event.dataTransfer?.getData('application/json');

      if (data === 'button' && containerRef.current && editorRef.current) {
        const canvasBounds = containerRef.current.getBoundingClientRect();
        const x = event.clientX - canvasBounds.left;
        const y = event.clientY - canvasBounds.top;


        const parsedStyleData = styleData ? JSON.parse(styleData) : {};
        const fillColor = parsedStyleData.backgroundColor || 'blue'; // Fallback color
        const text = parsedStyleData.text || ''; // Extract text from style data

        const font = parsedStyleData.fontFamily || 'sans'; // Extract font from style data

        const newShape: TLShape = {
          // @ts-ignore
          id: `shape:${Date.now()}`, // Use the correct ID format
          type: 'geo', // Predefined shape type in tldraw
          props: {
            geo: 'rectangle', // Specify the geometry type
            w: 100,
            h: 50,
            fill: 'solid', // Use 'solid' fill type
            color: fillColor, // Apply color
            text: text, // Add text property
            font: font, // Add font property
          },
          x,
          y,
        };


        editorRef.current?.createShapes([newShape]);
      }
    };

    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
    };

    const canvasElement = containerRef.current;
    if (canvasElement) {
      canvasElement.addEventListener('drop', handleDrop);
      canvasElement.addEventListener('dragover', handleDragOver);

      return () => {
        canvasElement.removeEventListener('drop', handleDrop);
        canvasElement.removeEventListener('dragover', handleDragOver);
      };
    }
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        onMount={(editor) => { editorRef.current = editor }} />
    </div>
  );
}
