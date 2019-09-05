import { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, []);

    useEffect(() => {
        let debWarp = _.debounce(onResize, 300);
        window.addEventListener('resize', debWarp)
        return () => {
            window.removeEventListener('resize', debWarp);
        }
    });

    return size;
}
export default useWinSize;