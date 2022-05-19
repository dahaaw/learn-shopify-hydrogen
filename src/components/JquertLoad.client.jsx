import React from 'react'
import { useEffect } from 'react';

export default function JquertLoad() {
    useEffect(() => {
        if(window.durotan?.init) {
            setTimeout(() => {
                // console.log({jQuery})
                // console.log('custom script init')
                window.durotan.init();
            }, 3000);
        }
    }, []);
  return false
}