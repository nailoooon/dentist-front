import { useEffect } from "react";

// Бесполезная вещь
export const usePreloadImages = (imageSrcs) => {
    useEffect(() => {
        const randomStr = Math.random().toString(32).slice(2) + Date.now();
        window.usePreloadImagesData = window.usePreloadImagesData ?? {};
        window.usePreloadImagesData[randomStr] = [];
        for (const src of imageSrcs) {
            const img = new Image();
            img.src = src;
            window.usePreloadImagesData[randomStr].push(img);
        }
        return () => {
            delete window.usePreloadImagesData?.[randomStr];
        };
    }, [imageSrcs]);
};