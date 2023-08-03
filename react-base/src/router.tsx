import { createElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AppProps {
    child?: any;
}

function RouteComponent({ child }: AppProps) {
    const [component, setComponent] = useState(null);
    const location = useLocation();

    useEffect(() => {
        let paths = location.pathname.substring(1).split('/');
        let componentPath = '';

        async function load() {
            paths.forEach(async (path: string, index: number) => {
                componentPath += '/';

                if (index === 0) {
                    componentPath += path;
                } else {
                    const dynamicValue = path.substring(1);
                    componentPath += `[:params]`;
                }
            })

            const { default: C } = await import(`./pages${componentPath}`);
            setComponent(() => C);
        }

        load();
    }, [])

    return (
        <div className='body-wrapper'>
            {component && createElement(component)}
        </div>
    );
}

export default RouteComponent;
