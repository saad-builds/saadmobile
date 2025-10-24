import React, { useState, useCallback } from "react";
// Since local image imports (e.g., "@/assets/gallery1.jpg") are not available in this environment,
// we must use placeholder image URLs to ensure the component is runnable and displayable.

// TEMPORARY FIX: We are commenting out the local file imports that caused the "Could not resolve" error.
// We will leave these imports here and will not modify them so they are preserved for your local project setup.

import img1 from "@/assets/gallery1.jpg";
import img2 from "@/assets/gallery2.jpg";
import img3 from "@/assets/gallery3.jpg";
import img4 from "@/assets/gallery4.jpg";   
import img5 from "@/assets/gallery5.jpg";
import img6 from "@/assets/gallery6.jpg";
import img7 from "@/assets/gallery7.jpg";
import img8 from "@/assets/gallery8.jpg";
import img9 from "@/assets/gallery9.jpg";
import img10 from "@/assets/gallery10.jpg";
import img11 from "@/assets/gallery11.jpg";
import img12 from "@/assets/gallery12.jpg";
import img13 from "@/assets/gallery13.jpg";
import img14 from "@/assets/gallery14.jpg";
import img15 from "@/assets/gallery15.jpg";
import img16 from "@/assets/gallery16.jpg";
import img17 from "@/assets/gallery17.jpg";
import img18 from "@/assets/gallery18.jpg";
import img19 from "@/assets/gallery19.jpg";
import img20 from "@/assets/gallery20.jpg";
import img21 from "@/assets/gallery21.jpg";
import img22 from "@/assets/gallery22.jpg";
import img23 from "@/assets/gallery23.jpg";
 const imageUrls: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23];


// RE-INTRODUCING PLACEHOLDERS to ensure the app compiles and displays correctly.
// const imageUrls: string[] = Array.from({ length: 23 }, (_, i) => { 
//   const id = i + 1;
//   // Simulating varied heights for masonry (this logic is just for visualization)
//   const heights = [300, 450, 350, 500, 400, 550, 300, 480]; 
//   const height = heights[i % heights.length];
//   const width = 400;
//   const color = (i % 3 === 0) ? '3b82f6' : (i % 3 === 1) ? '10b981' : 'ef4444';
//   const textColor = 'ffffff';
//   // The text in the placeholder confirms the simulated original filename
//   return `https://placehold.co/${width}x${height}/${color}/${textColor}?text=Gallery+${id}`;
// });


// --- Lightbox Component (Mocked as it's an external lib) ---
const Lightbox: React.FC<any> = ({ mainSrc, onCloseRequest, onMovePrevRequest, onMoveNextRequest, imageCaption }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onCloseRequest}
    >
      {/* Close Button: Added e.stopPropagation() to prevent accidental closure on click */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold p-4 hover:text-red-500 transition z-[10000] rounded-full bg-black/30 hover:bg-black/50"
        onClick={(e) => {
            e.stopPropagation(); // IMPORTANT: Stop the click from bubbling up and closing the lightbox
            onCloseRequest();
        }}
      >
        &times;
      </button>
      
      {/* Left Arrow: Added e.stopPropagation() to prevent closing the lightbox */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-4 hover:text-red-500 transition z-[10000] rounded-full bg-black/30 hover:bg-black/50 hidden md:block" // Hide on mobile for better usability
        onClick={(e) => {
            e.stopPropagation(); // IMPORTANT: Stop the click from bubbling up and closing the lightbox
            onMovePrevRequest();
        }}
      >
        &#10094;
      </button>
      
      {/* Right Arrow: Added e.stopPropagation() to prevent closing the lightbox */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-4 hover:text-red-500 transition z-[10000] rounded-full bg-black/30 hover:bg-black/50 hidden md:block" // Hide on mobile for better usability
        onClick={(e) => {
            e.stopPropagation(); // IMPORTANT: Stop the click from bubbling up and closing the lightbox
            onMoveNextRequest();
        }}
      >
        &#10095;
      </button>

      {/* Image Container: Still stops propagation to prevent closing on clicking the image itself. */}
      <div 
        className="relative max-w-5xl max-h-[90vh] mx-auto p-4" 
        onClick={(e) => e.stopPropagation()} 
      >
        <img
          src={mainSrc}
          alt={imageCaption}
          className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
        />
        <div className="text-center mt-2 text-white/80">{imageCaption}</div>
      </div>
    </div>
  );
};

// --- Shadcn Component Mocks ---
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div
    className={`bg-white/90 border border-gray-200 rounded-xl shadow-md ${className}`} 
    {...props}
  >
    {children}
  </div>
);

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`p-0 ${className}`} {...props}> {/* p-0 is critical to reducing the 'white layer' */}
    {children}
  </div>
);

// --- Gallery Component with Masonry Layout ---
const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback((index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  const movePrev = useCallback(() => {
    setPhotoIndex((prevIndex) => (prevIndex + imageUrls.length - 1) % imageUrls.length);
  }, []);

  const moveNext = useCallback(() => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900 min-h-screen"> {/* Updated to dark gray to match Hero theme */}
      <div className="container mx-auto max-w-6xl">
        {/* Title: Updated to match the gradient and structure from the Hero/Products components */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                Our Gallery
            </span>
          </h2>
          {/* Subtitle structure matching the 'highlight-strip' pattern */}
          {/* Text color changed to gray-200 for visibility on dark background */}
          <div className="highlight-strip inline-block text-lg md:text-xl text-gray-200 font-medium tracking-wide border-b-2 border-red-600 pb-1">
            ہماری گیلری
          </div>
        </div>

        {/* Masonry Layout Container (CSS Columns) */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6"> 
          {imageUrls.map((url, index) => (
            <div 
              key={index}
              className="mb-6 break-inside-avoid-column" 
            >
              <Card
                className="group cursor-pointer overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.03] rounded-xl"
                onClick={() => openLightbox(index)}
              >
                <CardContent className="p-0">
                  <img
                    src={url}
                    alt={`Gallery image ${index + 1}`}
                    // Ensure full width and height auto for masonry layout
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={imageUrls[photoIndex]}
            nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
            prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={movePrev}
            onMoveNextRequest={moveNext}
            imageCaption={`Image ${photoIndex + 1} of ${imageUrls.length}`}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
