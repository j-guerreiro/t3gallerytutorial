import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/41ddceee-0e80-40e6-b22a-b160bd18f0bf-22ozx5.webp",
  "https://utfs.io/f/5470d839-ce47-4a7e-ba2e-02084aa3567e-lx3crv.webp",
  "https://utfs.io/f/3ac1d8b7-c015-42b9-a25e-45b6be8c7218-t9ff88.webp",
];

const mockImages = mockUrls.map((url, index) => (
  {
    id: index + 1,
    url,
  }
))

export default function HomePage() {
  return (
    <main> 
      <div className="flex flex-wrap justify-center gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
      <p className="text-center">Hello (gallery in progress!)</p>
    </main>
  );
}
