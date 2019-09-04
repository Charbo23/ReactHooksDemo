import React from 'react';
import { ColorContext } from './Color';
function TextArea() {
    return (
        <ColorContext.Consumer>
            {
                ({ state }) => (
                    <h2>
                        字体颜色为
                        <span style={{ color: state.get('colorHex') }}>{state.get('colorText')}</span>
                    </h2>
                )

            }
        </ColorContext.Consumer >
    );
}
export default TextArea;
