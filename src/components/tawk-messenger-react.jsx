'use client'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

export default function TawkMessenger() {
    const tawkMessengerRef = useRef();

    function handleMinimize() {
        tawkMessengerRef.current.minimize();
    };
    return (
        <div className="App border-2 ">
            <TawkMessengerReact
                propertyId="67f518c8846b7b190fd1efc6"
                widgetId="1ioamhk4p"/>
                
        </div>
    );
}