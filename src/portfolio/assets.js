// Map original relative paths directly to static public/ assets
export const ASSETS = {
    "/gallery/photo-1.jpg": "/gallery/photo-1.jpg",
    "/gallery/photo-2.jpg": "/gallery/photo-2.jpg",
    "/gallery/photo-3.png": "/gallery/photo-3.png",
    "/projects/custom-grab-cursor.png": "/projects/custom-grab-cursor.png",
    "/projects/narcissus.png": "/projects/narcissus.png",
    "/projects/rubiks-cube.png": "/projects/rubiks-cube.png",
    "/projects/shelfify.png": "/projects/shelfify.png",
    "/projects/stemfayoum.png": "/projects/stemfayoum.png",
    "/projects/ttt-pro.png": "/projects/ttt-pro.png",
    "/projects/word-combination.png": "/projects/word-combination.png",
    "/resume.pdf": "/resume.pdf",
    "/hero/wallpaper-dark.webp": "/hero/wallpaper-dark.webp",
    "/hero/wallpaper-light.webp": "/hero/wallpaper-light.webp",
};

export const getAsset = path => ASSETS[path] || path;
