export const metadata = {
  title: "Dentalosophy – Hasil Perawatan Gigi Dan Transformasi Senyum",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.dentalosophy.id/gallery",
  },
  keywords: "Transformasi Senyum",
  description:
    "Perawatan gigi di Dentalosophy. Transformasi Veneer, Whitening, Behel, hingga Implan untuk senyum yang lebih sehat dan percaya diri.",
};

const GalleryLayout = ({ children }) => {
  return <section>{children}</section>;
};

export default GalleryLayout;
